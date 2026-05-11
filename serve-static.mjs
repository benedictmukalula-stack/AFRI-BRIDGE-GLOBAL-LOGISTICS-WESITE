import { createServer } from 'http';
import { openSync, createReadStream, existsSync, statSync, readFileSync } from 'fs';
import { join, extname } from 'path';

const PORT = 3000;
const BASE_DIR = '/home/z/my-project';
const APP_DIR = join(BASE_DIR, '.next/server/app');
const PUBLIC_DIR = join(BASE_DIR, 'public');

const routeMap = {
  '/': 'index.html',
  '/services': 'services.html',
  '/services/customs-clearing': join('services', 'customs-clearing.html'),
  '/services/air-freight': join('services', 'air-freight.html'),
  '/services/ocean-freight': join('services', 'ocean-freight.html'),
  '/services/road-transport': join('services', 'road-transport.html'),
  '/services/warehousing': join('services', 'warehousing.html'),
  '/services/project-cargo': join('services', 'project-cargo.html'),
  '/services/vehicle-sourcing': join('services', 'vehicle-sourcing.html'),
  '/services/registration': join('services', 'registration.html'),
  '/services/mining-industrial': join('services', 'mining-industrial.html'),
  '/services/oil-gas': join('services', 'oil-gas.html'),
  '/services/maritime-port': join('services', 'maritime-port.html'),
  '/services/trade-documentation': join('services', 'trade-documentation.html'),
  '/trade-corridors': 'trade-corridors.html',
  '/resources': 'resources.html',
  '/tracking': 'tracking.html',
  '/quote': 'quote.html',
  '/contact': 'contact.html',
  '/portal': 'portal.html',
  '/atlas': 'atlas.html',
  '/atlas/media': join('atlas', 'media.html'),
  '/atlas/intelligence': join('atlas', 'intelligence.html'),
  '/atlas/publications': join('atlas', 'publications.html'),
  '/atlas/marketplace': join('atlas', 'marketplace.html'),
  '/atlas/pricing': join('atlas', 'pricing.html'),
  '/academy': 'academy.html',
  '/academy/courses': join('academy', 'courses.html'),
  '/academy/courses/customs-clearance-fundamentals': join('academy', 'courses', 'customs-clearance-fundamentals.html'),
  '/academy/courses/freight-forwarding-professional': join('academy', 'courses', 'freight-forwarding-professional.html'),
  '/academy/courses/oil-gas-logistics-management': join('academy', 'courses', 'oil-gas-logistics-management.html'),
  '/academy/register': join('academy', 'register', 'index.html'),
  '/academy/register/customs-clearance-fundamentals': join('academy', 'register', 'customs-clearance-fundamentals.html'),
  '/academy/register/freight-forwarding-professional': join('academy', 'register', 'freight-forwarding-professional.html'),
  '/academy/register/oil-gas-logistics-management': join('academy', 'register', 'oil-gas-logistics-management.html'),
  '/academy/corporate-training': join('academy', 'corporate-training.html'),
  '/academy/certifications': join('academy', 'certifications.html'),
  '/academy/training-calendar': join('academy', 'training-calendar.html'),
  '/company/about': join('company', 'about.html'),
  '/company/team': join('company', 'team.html'),
  '/company/careers': join('company', 'careers.html'),
  '/company/news': join('company', 'news.html'),
  '/company/faq': join('company', 'faq.html'),
};

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.map': 'application/json',
};

function getMimeType(filePath) {
  const ext = extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

function sendFile(res, filePath, headers = {}) {
  if (!existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }
  const stat = statSync(filePath);
  const mime = getMimeType(filePath);
  res.writeHead(200, {
    'Content-Type': mime,
    'Content-Length': stat.size,
    ...headers,
  });
  // Use highWaterMark to control memory for large files
  const stream = createReadStream(filePath, { highWaterMark: 64 * 1024 });
  stream.on('error', (err) => {
    console.error('Stream error:', err.message);
    res.end();
  });
  stream.pipe(res);
}

function sendFileBuffered(res, filePath, headers = {}) {
  if (!existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }
  try {
    const data = readFileSync(filePath);
    const mime = getMimeType(filePath);
    res.writeHead(200, {
      'Content-Type': mime,
      'Content-Length': data.length,
      ...headers,
    });
    res.end(data);
  } catch (err) {
    console.error('Read error:', err.message);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Error');
  }
}

const server = createServer((req, res) => {
  let pathname;
  try {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    pathname = url.pathname;
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Bad URL');
    return;
  }

  // favicon
  if (pathname === '/favicon.ico') {
    const p = join(PUBLIC_DIR, 'favicon.ico');
    if (existsSync(p)) sendFile(res, p);
    else { res.writeHead(204); res.end(); }
    return;
  }

  // _next/static
  if (pathname.startsWith('/_next/static/')) {
    const p = join(BASE_DIR, '.next', pathname.replace('/_next', ''));
    if (existsSync(p)) {
      const ext = extname(p);
      // Stream large files, buffer small ones
      const stat = statSync(p);
      if (stat.size > 100 * 1024) {
        sendFile(res, p, { 'Cache-Control': 'public, max-age=31536000, immutable' });
      } else {
        sendFileBuffered(res, p, { 'Cache-Control': 'public, max-age=31536000, immutable' });
      }
    } else {
      res.writeHead(404); res.end();
    }
    return;
  }

  // _next/image proxy
  if (pathname.startsWith('/_next/image')) {
    try {
      const url = new URL(req.url, `http://localhost:${PORT}`);
      const imgUrl = url.searchParams.get('url');
      if (imgUrl) {
        const p = join(PUBLIC_DIR, imgUrl.replace(/^\//, ''));
        sendFile(res, p, { 'Cache-Control': 'public, max-age=86400' });
      } else {
        res.writeHead(400); res.end();
      }
    } catch { res.writeHead(400); res.end(); }
    return;
  }

  // public files (images, fonts, etc.)
  if (pathname.startsWith('/images/') || pathname.startsWith('/fonts/') || pathname === '/robots.txt') {
    sendFile(res, join(PUBLIC_DIR, pathname), { 'Cache-Control': 'public, max-age=86400' });
    return;
  }

  // RSC payloads
  if (pathname.endsWith('.rsc')) {
    const p = join(APP_DIR, pathname.replace(/^\//, ''));
    if (existsSync(p)) sendFileBuffered(res, p);
    else { res.writeHead(404); res.end(); }
    return;
  }

  // HTML pages - use buffered for reliability
  const htmlFile = routeMap[pathname];
  if (htmlFile) {
    const p = join(APP_DIR, htmlFile);
    if (existsSync(p)) {
      sendFileBuffered(res, p, { 'Cache-Control': 'no-cache' });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
    return;
  }

  // Try direct .html
  const directHtml = join(APP_DIR, pathname.replace(/^\//, '') + '.html');
  if (existsSync(directHtml)) {
    sendFileBuffered(res, directHtml, { 'Cache-Control': 'no-cache' });
    return;
  }

  // Try index.html
  const indexPath = join(APP_DIR, pathname.replace(/^\//, ''), 'index.html');
  if (existsSync(indexPath)) {
    sendFileBuffered(res, indexPath, { 'Cache-Control': 'no-cache' });
    return;
  }

  // 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Static server running on http://0.0.0.0:${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught:', err.message);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});
