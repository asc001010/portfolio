"use client";

import { Clock, Shield, Car, Thermometer, Wifi } from 'lucide-react';

const facilities = [
  { icon: Clock, label: '24시간 이용' },
  { icon: Shield, label: 'CCTV 보안' },
  { icon: Car, label: '주차 가능' },
  { icon: Thermometer, label: '항온항습' },
  { icon: Wifi, label: '무선 인터넷' },
];

export default function FacilityIcons() {
  return (
    <section className="bg-[#FAFAFC] pt-10 pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {facilities.map((item, index) => (
            <div 
              key={`facility-${index}`} 
              className="flex flex-col items-center gap-5 transition-all duration-300 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center border border-white/50 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-blue stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm md:text-base font-bold text-zinc-600 group-hover:text-[#1D1D1F] transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
