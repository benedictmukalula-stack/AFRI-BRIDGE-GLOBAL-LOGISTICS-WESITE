'use client';

import { MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function FloatingAIButton() {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-emerald-600/40"
            aria-label="Open Afri-Bridge AI Assistant"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-[#0B1F3A] text-white text-sm border-0">
          Open Afri-Bridge AI Assistant
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
