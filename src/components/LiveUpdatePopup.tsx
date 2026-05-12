'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Bell,
  X,
  Package,
  Truck,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Anchor,
  Warehouse,
  AlertTriangle,
  FileText,
  RefreshCw,
  ChevronRight,
  Zap,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface Notification {
  id: string;
  category: string;
  title: string;
  description: string;
  reference: string;
  location: string;
  timestamp: string;
  priority: string;
}

/* ------------------------------------------------------------------ */
/*  Category config                                                    */
/* ------------------------------------------------------------------ */
const CATEGORY_CONFIG: Record<
  string,
  { icon: React.ElementType; color: string; bg: string; label: string }
> = {
  received: {
    icon: Package,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    label: 'Received',
  },
  in_transit: {
    icon: Truck,
    color: 'text-amber-600',
    bg: 'bg-amber-100',
    label: 'In Transit',
  },
  customs: {
    icon: ShieldCheck,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
    label: 'Customs',
  },
  border: {
    icon: MapPin,
    color: 'text-orange-600',
    bg: 'bg-orange-100',
    label: 'Border',
  },
  completed: {
    icon: CheckCircle2,
    color: 'text-green-600',
    bg: 'bg-green-100',
    label: 'Completed',
  },
  port: {
    icon: Anchor,
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
    label: 'Port',
  },
  warehouse: {
    icon: Warehouse,
    color: 'text-violet-600',
    bg: 'bg-violet-100',
    label: 'Warehouse',
  },
  documentation: {
    icon: FileText,
    color: 'text-cyan-600',
    bg: 'bg-cyan-100',
    label: 'Docs',
  },
  alert: {
    icon: AlertTriangle,
    color: 'text-red-600',
    bg: 'bg-red-100',
    label: 'Alert',
  },
};

const PRIORITY_BADGE: Record<string, { label: string; color: string }> = {
  urgent: { label: 'URGENT', color: 'bg-red-100 text-red-700' },
  high: { label: 'HIGH', color: 'bg-amber-100 text-amber-700' },
  normal: { label: '', color: '' },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function LiveUpdatePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<Notification | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoShowTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch notifications from AI API
  const fetchNotifications = useCallback(async () => {
    try {
      const res = await fetch('/api/live-updates');
      if (res.ok) {
        const data = await res.json();
        if (data.notifications && Array.isArray(data.notifications)) {
          setNotifications(data.notifications);
          setLastFetchTime(Date.now());
        }
      }
    } catch {
      // Silent fail — keeps existing notifications if any
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(fetchNotifications, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchNotifications]);

  // Auto-show toast with latest high/urgent notification after 4 seconds
  useEffect(() => {
    if (notifications.length > 0 && !toastVisible) {
      autoShowTimerRef.current = setTimeout(() => {
        const urgentOrHigh = notifications.find(
          (n) => n.priority === 'urgent' || n.priority === 'high'
        );
        if (urgentOrHigh) {
          showToast(urgentOrHigh);
        }
      }, 4000);
    }
    return () => {
      if (autoShowTimerRef.current) clearTimeout(autoShowTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications.length]);

  // Close panel on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const showToast = (notif: Notification) => {
    setToast(notif);
    setToastVisible(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastVisible(false);
      setTimeout(() => setToast(null), 400);
    }, 6000);
  };

  const unseenCount = notifications.length;

  return (
    <>
      {/* Bell Button */}
      <div className="relative" ref={panelRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Live Operations Updates"
        >
          <Bell className="h-5 w-5 text-gray-600" />
          {unseenCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
              {unseenCount > 99 ? '99+' : unseenCount}
            </span>
          )}
          {/* Pulse on urgent */}
          {notifications.some((n) => n.priority === 'urgent') && (
            <span className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
          )}
        </button>

        {/* Notification Panel */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-full max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0B1F3A] text-white">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-semibold">Live Operations</span>
                <span className="text-[10px] bg-emerald-500/30 text-emerald-300 px-1.5 py-0.5 rounded-full">
                  AI-Powered
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setLoading(true);
                    fetchNotifications();
                  }}
                  className="p-1 rounded hover:bg-white/10 transition-colors"
                  aria-label="Refresh"
                  disabled={loading}
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-4 divide-x divide-gray-100 bg-gray-50 border-b border-gray-100">
              {[
                {
                  label: 'Received',
                  count: notifications.filter((n) => n.category === 'received').length,
                  color: 'text-blue-600',
                },
                {
                  label: 'In Transit',
                  count: notifications.filter((n) => n.category === 'in_transit').length,
                  color: 'text-amber-600',
                },
                {
                  label: 'Completed',
                  count: notifications.filter((n) => n.category === 'completed').length,
                  color: 'text-green-600',
                },
                {
                  label: 'Alerts',
                  count: notifications.filter((n) => n.category === 'alert').length,
                  color: 'text-red-600',
                },
              ].map((stat) => (
                <div key={stat.label} className="px-3 py-2 text-center">
                  <p className={`text-lg font-bold ${stat.color}`}>{stat.count}</p>
                  <p className="text-[10px] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Notification List */}
            <div className="max-h-[380px] overflow-y-auto divide-y divide-gray-50">
              {loading && notifications.length === 0 ? (
                <div className="flex items-center justify-center py-12">
                  <RefreshCw className="h-5 w-5 animate-spin text-gray-400" />
                  <span className="ml-2 text-sm text-gray-400">Fetching live updates...</span>
                </div>
              ) : notifications.length === 0 ? (
                <div className="py-12 text-center text-sm text-gray-400">
                  No live updates available
                </div>
              ) : (
                notifications.map((notif) => {
                  const cat = CATEGORY_CONFIG[notif.category] || CATEGORY_CONFIG.received;
                  const prio = PRIORITY_BADGE[notif.priority] || PRIORITY_BADGE.normal;
                  const CatIcon = cat.icon;

                  return (
                    <div
                      key={notif.id}
                      className="flex gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer group"
                      onClick={() => showToast(notif)}
                    >
                      {/* Category Icon */}
                      <div
                        className={`shrink-0 w-9 h-9 rounded-lg ${cat.bg} flex items-center justify-center mt-0.5`}
                      >
                        <CatIcon className={`h-4 w-4 ${cat.color}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                            {cat.label}
                          </span>
                          {prio.label && (
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${prio.color}`}>
                              {prio.label}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-gray-800 leading-snug truncate">
                          {notif.title}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
                          {notif.description}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5 text-[11px] text-gray-400">
                          <span className="font-mono">{notif.reference}</span>
                          <span>{notif.location}</span>
                          <span>{notif.timestamp}</span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <ChevronRight className="h-4 w-4 text-gray-300 shrink-0 self-center group-hover:text-gray-500 transition-colors" />
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">
                {lastFetchTime > 0
                  ? `Updated ${Math.round((Date.now() - lastFetchTime) / 1000)}s ago`
                  : ''}
              </span>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-xs text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Powered by Afri-Bridge AI
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-20 right-4 z-[200] w-full max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-400 ease-out ${
            toastVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-[calc(100%+2rem)] opacity-0'
          }`}
        >
          {/* Toast Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#0B1F3A] text-white">
            <div className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-xs font-semibold">Live Update</span>
            </div>
            <button
              onClick={() => {
                setToastVisible(false);
                setTimeout(() => setToast(null), 400);
              }}
              className="p-0.5 rounded hover:bg-white/10 transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Toast Body */}
          <div className="px-3 py-3 flex gap-3">
            {(() => {
              const cat = CATEGORY_CONFIG[toast.category] || CATEGORY_CONFIG.received;
              const prio = PRIORITY_BADGE[toast.priority] || PRIORITY_BADGE.normal;
              const CatIcon = cat.icon;
              return (
                <>
                  <div className={`shrink-0 w-10 h-10 rounded-lg ${cat.bg} flex items-center justify-center`}>
                    <CatIcon className={`h-5 w-5 ${cat.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-semibold text-gray-400 uppercase">
                        {cat.label}
                      </span>
                      {prio.label && (
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${prio.color}`}>
                          {prio.label}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-800 leading-snug">
                      {toast.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{toast.description}</p>
                    <div className="flex items-center gap-2 mt-1.5 text-[11px] text-gray-400">
                      <span className="font-mono font-medium">{toast.reference}</span>
                      <span>{toast.location}</span>
                      <span>{toast.timestamp}</span>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>

          {/* Progress bar */}
          {toastVisible && (
            <div className="h-0.5 bg-gray-100">
              <div
                className="h-full bg-emerald-500 transition-all duration-[6000ms] ease-linear"
                style={{ width: toastVisible ? '100%' : '0%', animation: 'shrink 6s linear forwards' }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
