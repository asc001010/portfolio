"use client";


import { Play } from 'lucide-react';

const shortsData = [
  { 
    id: '1', 
    title: '내꼬 잠실점 전체 공간 1분 투어 🎬', 
    thumbnail: '/wifi_storage_1776154950965.png', 
    views: '2.5만회' 
  },
  { 
    id: '2', 
    title: '비밀번호 안 외워도 됨? 철통 보안 스마트락 사용법', 
    thumbnail: '/cctv_security_1776153862807.png', 
    views: '1.2만회' 
  },
  { 
    id: '3', 
    title: '미니밴 꽉 채운 짐, 큐브 하나에 다 들어간다고?!', 
    thumbnail: '/parking_cart_1776152454681.png', 
    views: '8천회' 
  },
  { 
    id: '4', 
    title: '새벽 3시에 짐 빼러 온 24시간 무인 창고 브이로그', 
    thumbnail: '/24h_access_1776153948761.png', 
    views: '4.1만회' 
  },
];

export default function ShortsGallery() {
  return (
    <section className="bg-[#1D1D1F] py-24 sm:py-32 overflow-hidden overflow-x-hidden relative">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 
            className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-3 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
          >
            영상으로 만나는 내꼬 🎥
          </h2>
          <p 
            className="text-zinc-400 font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 ease-out fill-mode-both"
          >
            생생한 이용 후기와 꿀팁을 쇼츠로 확인해보세요
          </p>
        </div>
      </div>

      <div className="w-full relative px-6 md:px-12">
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-8 pt-2 w-full hide-scrollbar"
          style={{ scrollPaddingLeft: '1.5rem', scrollPaddingRight: '1.5rem' }}
        >
          {shortsData.map((item, index) => (
            <div 
              key={`short-${index}`}
              className="group relative shrink-0 w-[65vw] sm:w-[260px] md:w-[300px] aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 snap-center transform-gpu isolate border border-white/10 animate-in fade-in zoom-in-95 duration-700 ease-out fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail Image */}
              <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden [transform:translateZ(0)]">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 blur-[2px] group-hover:blur-0 grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
              
              {/* Dim Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90 pointer-events-none rounded-3xl" />
              
              {/* YouTube Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-red-500/90 group-hover:border-red-500 transition-all duration-500">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>

              {/* Text Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-20">
                <div className="inline-block text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md mb-3 w-fit border border-white/10">
                  조회수 {item.views}
                </div>
                <h3 className="font-bold text-white text-lg leading-snug drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
          {/* Spacer for proper right margin on scroll */}
          <div className="shrink-0 w-1 md:w-6" />
        </div>
      </div>
    </section>
  );
}
