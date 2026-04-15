"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CustomCalendar({ selectedDate, onSelect, minDate, label }) {
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate || new Date()));
  
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  const isSelected = (dateStr) => {
    return dateStr === selectedDate;
  };

  const isDisabled = (dateStr) => {
    if (!dateStr || !minDate) return false;
    return new Date(dateStr) < new Date(minDate).setHours(0,0,0,0);
  };

  const isToday = (dateStr) => {
    const today = new Date().toISOString().split('T')[0];
    return dateStr === today;
  };

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  const renderMonth = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d).toISOString().split('T')[0]);

    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-4 px-2">
          <h4 className="font-black text-[#1D1D1F] text-base tracking-tight">{year}년 {month + 1}월</h4>
          <div className="flex items-center gap-1">
            <button onClick={prevMonth} className="p-1.5 hover:bg-zinc-100 rounded-xl transition-all active:scale-95 text-zinc-400"><ChevronLeft className="w-4 h-4" /></button>
            <button onClick={nextMonth} className="p-1.5 hover:bg-zinc-100 rounded-xl transition-all active:scale-95 text-zinc-400"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="grid grid-cols-7 mb-1">
          {weekDays.map(day => (
            <div key={day} className={`text-center text-[9px] font-black py-1.5 ${day === '일' ? 'text-red-400' : 'text-zinc-300'}`}>
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5">
          {days.map((dateStr, index) => {
            if (!dateStr) return <div key={`empty-${index}`} className="aspect-[1.6/1]" />;
            const disabled = isDisabled(dateStr);
            const selected = isSelected(dateStr);
            const today = isToday(dateStr);

            return (
              <button
                key={dateStr}
                disabled={disabled}
                onClick={() => onSelect(dateStr)}
                className={`
                  aspect-[1.6/1] w-full rounded-lg text-[11px] font-bold transition-all relative flex items-center justify-center
                  ${disabled ? 'text-zinc-200 cursor-not-allowed' : 'text-zinc-700 hover:bg-zinc-50'}
                  ${selected ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20' : ''}
                `}
              >
                {new Date(dateStr).getDate()}
                {today && !selected && (
                  <div className="absolute bottom-1 w-1 h-1 bg-blue-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-white/20 w-[320px] translate-y-2 select-none">
      <div className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-3 pl-1 opacity-60">
        {label} 선택
      </div>
      
      {renderMonth()}

      <div className="mt-4 pt-3 border-t border-zinc-50 flex items-center justify-between">
         <div className="flex items-center gap-3 text-[9px] text-zinc-400 font-bold">
            <div className="flex items-center gap-1"><div className="w-1 h-1 bg-blue-500 rounded-full" /> 오늘</div>
            <div className="flex items-center gap-1"><div className="w-1 h-1 bg-blue-500 rounded-full opacity-30" /> 선택</div>
         </div>
         <button className="text-[9px] font-black text-blue-500 uppercase tracking-widest hover:text-blue-700 transition-colors" onClick={() => {
           setCurrentMonth(new Date());
         }}>오늘로 이동</button>
      </div>
    </div>
  );
}
