"use client";

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCalendar({ selectedDate, onSelect, minDate, label }) {
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate || new Date()));

  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const date = new Date(year, month, 1);
    const days = [];
    
    // Fill leading empty days
    for (let i = 0; i < date.getDay(); i++) {
      days.push(null);
    }
    
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    
    return days;
  }, [currentMonth]);

  const monthName = currentMonth.toLocaleString('ko-KR', { month: 'long', year: 'numeric' });

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));

  return (
    <div className="bg-white rounded-3xl p-6 shadow-2xl border border-zinc-100 w-[320px]">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-black text-[#1D1D1F] text-sm">{label} 선택</h4>
        <div className="flex gap-1">
          <button onClick={prevMonth} className="p-2 hover:bg-zinc-50 rounded-xl transition-colors"><ChevronLeft className="w-4 h-4" /></button>
          <button onClick={nextMonth} className="p-2 hover:bg-zinc-50 rounded-xl transition-colors"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
      
      <div className="text-center mb-4">
        <span className="text-xs font-black text-blue-500 uppercase tracking-widest">{monthName}</span>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['일', '월', '화', '수', '목', '금', '토'].map(d => (
          <div key={d} className="text-[10px] font-black text-zinc-300 text-center py-2">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map((date, i) => {
          if (!date) return <div key={`empty-${i}`} />;
          
          const dateStr = date.toISOString().split('T')[0];
          const isSelected = selectedDate === dateStr;
          const isToday = new Date().toISOString().split('T')[0] === dateStr;
          const isDisabled = minDate && dateStr < minDate;

          return (
            <button
              key={dateStr}
              disabled={isDisabled}
              onClick={() => onSelect(dateStr)}
              className={`
                h-10 rounded-xl text-xs font-bold transition-all relative flex items-center justify-center
                ${isSelected ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'hover:bg-zinc-50 text-[#1D1D1F]'}
                ${isDisabled ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'}
                ${isToday && !isSelected ? 'text-blue-500' : ''}
              `}
            >
              {date.getDate()}
              {isToday && !isSelected && <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
