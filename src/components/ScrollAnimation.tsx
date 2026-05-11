'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scale?: boolean;
  blur?: boolean;
}

export function ScrollAnimation({ children, className = '', delay = 0, direction = 'up', scale = false, blur = false }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      let transform = '';
      switch (direction) {
        case 'up': transform = 'translateY(40px)'; break;
        case 'down': transform = 'translateY(-40px)'; break;
        case 'left': transform = 'translateX(40px)'; break;
        case 'right': transform = 'translateX(-40px)'; break;
        case 'none': transform = 'none'; break;
      }
      if (scale) transform += ' scale(0.96)';
      return transform;
    }
    return 'none';
  };

  const getFilter = () => {
    if (!isVisible && blur) return 'blur(4px)';
    return 'none';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: getFilter(),
        transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), filter 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}
