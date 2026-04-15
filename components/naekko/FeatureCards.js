"use client";

import { motion } from 'framer-motion';

const features = [
  {
    tag: '24시간 이용',
    title: '시간에\n구애받지 않는\n자유로운 출입',
    image: '/24h_access_1776153948761.png',
  },
  {
    tag: 'CCTV 보안',
    title: '사각지대 없는\n완벽한\n철통 보안 시스템',
    image: '/cctv_security_1776153862807.png',
  },
  {
    tag: '주차 가능',
    title: '무거운 짐도\n가뿐하게\n옮길 수 있어요',
    image: '/parking_cart_1776152454681.png',
  },
  {
    tag: '항온항습',
    title: '1년 365일\n최적의 보관 환경',
    image: '/temp_control_1776153878600.png',
  },
  {
    tag: '무선 인터넷',
    title: '시설 내 어디서든\n끊김없는 무선 인터넷',
    image: '/wifi_storage_1776154950965.png',
  }
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-32 rounded-t-[3rem] overflow-hidden -mt-10 relative z-20 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#1D1D1F] tracking-tighter mb-4 leading-tight"
          >
            단순한 보관을 넘어,<br className="md:hidden" /> 당신의 완벽한 프라이빗 룸
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-500 font-medium"
          >
            이미지를 넘기며 내꼬의 특별함을 확인해보세요
          </motion.p>
        </div>
      </div>

      <div className="w-full relative">
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-16 pt-4 px-6 md:px-12 w-full"
          style={{ scrollPaddingLeft: '1.5rem', scrollPaddingRight: '1.5rem' }}
        >
          {features.map((item, index) => (
            <motion.div 
              key={`feature-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative shrink-0 w-[85vw] sm:w-[380px] md:w-[450px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 snap-center"
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full [transform:translateZ(0)]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:opacity-100 transition-all duration-500 rounded-[3rem]" />
              
              {/* Content Box */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10 text-white">
                <div className="inline-flex max-w-max px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-xl bg-white/10 text-[12px] font-black tracking-widest uppercase shadow-sm">
                  {item.tag}
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black leading-[1.15] whitespace-pre-line transition-transform duration-700 drop-shadow-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Spacer for elegant end scroll */}
          <div className="shrink-0 w-6 md:w-12" />
        </div>
      </div>
    </section>
  );
}
