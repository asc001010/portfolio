"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function OurStory() {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("grayscale");
            entry.target.classList.add("grayscale-0");
          } else {
            entry.target.classList.remove("grayscale-0");
            entry.target.classList.add("grayscale");
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-outline-variant/30 transition-all">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center px-6 md:px-12 xl:px-24 py-5 w-full">
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/" className="text-xl md:text-2xl font-serif tracking-[0.15em] uppercase text-primary">Botanical Atelier</Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            <Link href="/our-story" className="font-label text-xs uppercase tracking-[0.15em] text-primary transition-colors border-b border-primary/30">Our Story</Link>
            <Link href="/process" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Process</Link>
            <Link href="/journal" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Journal</Link>
          </nav>

          <div className="flex items-center gap-6 text-primary">
            <Link href="/" className="font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_back</span>
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="px-6 md:px-12 xl:px-24 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="block text-primary font-label uppercase tracking-[0.3em] text-xs md:text-sm">우리의 철학</span>
                <h1 className="font-headline text-5xl md:text-7xl xl:text-8xl text-primary leading-[1.1] italic">
                  덧없는 정수를 <br/>
                  <span className="font-normal not-italic">빚어내다.</span>
                </h1>
              </div>
              
              <div className="space-y-8 text-on-surface-variant font-light text-lg md:text-xl leading-relaxed max-w-xl">
                <p>
                  보태니컬 아틀리에(Botanical Atelier)는 진정한 사치가 인위적인 것이 아니라, 자연계의 느리고 의도적인 고동 속에 있다고 믿습니다. 우리의 이야기는 바람 소리만이 정적을 깨뜨리는 깊은 소나무 숲속에서 시작되었습니다.
                </p>
                <p>
                  전통적인 조향 기법의 안식처로 설립된 우리는 현대 세계의 산업적 속도를 거부합니다. 대신 계절에 맞춰 수확하며, 모든 정수 한 방울이 그 기원의 진실한 영혼을 간직하도록 합니다.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-12 -right-12 w-full h-full bg-primary-container/10 -z-10 rounded-full blur-3xl opacity-50"></div>
              <div className="aspect-[4/5] overflow-hidden shadow-2xl relative group">
                <img 
                  ref={addToRefs}
                  src="/our_story_main.png" 
                  alt="Artisanal Heritage" 
                  className="w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-in-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-[20px] border-surface/30 pointer-events-none"></div>
              </div>
              <p className="mt-6 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant text-right">
                유산 점적: 배치 No. 042
              </p>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mt-40 bg-stone-900 py-32 text-surface px-6 md:px-12 xl:px-24">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 border-l border-surface/20 pl-8">
              <h3 className="font-headline text-3xl">순수성 (Purity)</h3>
              <p className="font-light text-surface/70 leading-relaxed">
                인공 합성 보존료를 전혀 사용하지 않습니다. 모든 노트는 책임감 있게 채취된 꽃잎, 뿌리, 나무에서 얻어집니다.
              </p>
            </div>
            <div className="space-y-6 border-l border-surface/20 pl-8">
              <h3 className="font-headline text-3xl">인내 (Patience)</h3>
              <p className="font-light text-surface/70 leading-relaxed">
                우리는 6개월 이상 오일을 침전시켜 분자 구조가 복잡한 교향곡처럼 안정되도록 기다립니다.
              </p>
            </div>
            <div className="space-y-6 border-l border-surface/20 pl-8">
              <h3 className="font-headline text-3xl">존재감 (Presence)</h3>
              <p className="font-light text-surface/70 leading-relaxed">
                우리의 향수는 자신을 요란하게 드러내지 않고, 대자연으로의 조용한 초대처럼 은은하게 머물도록 설계되었습니다.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 border-t border-stone-800 text-stone-300 py-12 px-6 md:px-12 xl:px-24">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-[10px] tracking-widest uppercase text-stone-500">© 2024 Botanical Atelier. Infused with Nature.</p>
          <a href="/" className="font-label text-[10px] tracking-widest uppercase text-stone-500 hover:text-stone-300 transition-colors">홈으로 돌아가기</a>
        </div>
      </footer>
    </>
  );
}
