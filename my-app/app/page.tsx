"use client";

import { useState, useEffect, useRef } from "react";
import FeedCard from "@/components/FeedCard";
import { Button } from "@/components/ui/button";
import { User, Settings } from "lucide-react";

export default function Page() {
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [signInTime, setSignInTime] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Timer Logic
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  // Handle Button Clicks
  const handleAuthAction = () => {
    if (!isTimerRunning) {
      // --- SIGN IN ---
      setIsTimerRunning(true);
      const now = new Date();
      setSignInTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    } else {
      // --- SIGN OUT ---
      setIsTimerRunning(false);
      setSeconds(0); // Timer ko wapas 00:00:00 kar dega
      setSignInTime(null); // Sign-in message ko reset kar dega
    }
  };

  // Time Formatter (00:00:00)
  const formatTimer = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="p-4 md:p-6">
        <div
          className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden bg-zinc-900 text-white p-6 md:p-10 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-4 shadow-xl"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Left Side: Avatar & Details */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            {/* Profile Avatar */}
            <div className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-gray-400 bg-white overflow-hidden shadow-inner shrink-0">
              <img src="/avatar-placeholder.png" alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* User Details */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-light">Talha Zahid</h2>
              <div className="bg-blue-600 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded inline-block">
                Software Engineer
              </div>
              <div className="flex flex-col items-center md:items-start gap-1 text-sm text-gray-300">
                <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                  <User size={14} /> My Info
                </span>
                <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                  <Settings size={14} /> Account Settings
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Timer & Action */}
          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto border-t md:border-none pt-6 md:pt-0 border-white/10">
            <div className="text-4xl md:text-5xl font-light tabular-nums tracking-tighter">
              {formatTimer(seconds)}
            </div>

            <div className="text-xs md:text-sm text-gray-300 text-center md:text-right">
              {signInTime ? `You Signed In Today at ${signInTime}!` : "Status: Offline"}
            </div>

            <Button
              onClick={handleAuthAction}
              className={`w-full md:w-auto px-10 text-white transition-all font-medium h-11 ${isTimerRunning
                  ? "bg-red-700 hover:bg-red-800 shadow-lg shadow-red-900/20"
                  : "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-900/20"
                }`}
            >
              {isTimerRunning ? "Sign Out" : "Sign In"}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 max-w-4xl mx-auto">
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </div>
  );
}