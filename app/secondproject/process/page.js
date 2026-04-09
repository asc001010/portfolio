"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ProcessPage() {
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
            <Link href="/secondproject" className="text-xl md:text-2xl font-serif tracking-[0.15em] uppercase text-primary">Botanical Atelier</Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            <Link href="/secondproject/our-story" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Our Story</Link>
            <Link href="/secondproject/process" className="font-label text-xs uppercase tracking-[0.15em] text-primary transition-colors border-b border-primary/30">Process</Link>
            <Link href="/secondproject/journal" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Journal</Link>
          </nav>

          <div className="flex items-center gap-6 text-primary">
            <Link href="/secondproject" className="font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_back</span>
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="px-6 md:px-12 xl:px-24 max-w-[1600px] mx-auto">
          <div className="text-center mb-24 space-y-6">
            <span className="block text-primary font-label uppercase tracking-[0.3em] text-xs">The Alchemical Slowing</span>
            <h1 className="font-headline text-5xl md:text-8xl text-primary italic leading-tight">
              시간이 빚어낸 <br/>
              <span className="font-normal not-italic tracking-tight">작품.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
            <div className="md:col-span-7 space-y-12">
              <div className="aspect-video overflow-hidden shadow-2xl relative">
                <img 
                  ref={addToRefs}
                  src="/process_main.png" 
                  alt="Crafting Process" 
                  className="w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-in-out scale-100"
                />
                <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none"></div>
              </div>
              
              <div className="space-y-8 text-on-surface-variant font-light text-xl md:text-2xl leading-relaxed max-w-3xl">
                <p>
                  보태니컬 아틀리에의 모든 향수는 거부할 수 없는 시간의 흐름을 따릅니다. 우리는 인공적인 가속을 거부하며, 식물이 가진 본연의 속도가 최상의 향을 완성한다고 믿습니다.
                </p>
                <p>
                  한 병의 향수가 완성되기까지는 채취부터 숙성까지 최소 180일의 시간이 소요됩니다. 이 고요한 기다림의 시간 동안, 야생의 원료들은 서로 유기적으로 결합하며 깊고 입체적인 교향곡을 완성해 나갑니다.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 space-y-16 sticky top-40">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-4xl text-primary-container">01</span>
                  <h3 className="font-headline text-3xl text-primary">원료의 수확</h3>
                </div>
                <p className="text-on-surface-variant font-light">
                  계절과 시간, 습도까지 고려하여 최상의 상태인 원료만을 엄선합니다. 자연에 해를 끼치지 않는 윤리적 채취는 우리 공정의 시작입니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-4xl text-primary-container">02</span>
                  <h3 className="font-headline text-3xl text-primary">냉압착과 침전</h3>
                </div>
                <p className="text-on-surface-variant font-light">
                  열을 가하지 않는 방식으로 원료의 파괴를 최소화하며, 오일에 원료의 숨결을 층층이 쌓아 올립니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-4xl text-primary-container">03</span>
                  <h3 className="font-headline text-3xl text-primary">넘버링과 봉인</h3>
                </div>
                <p className="text-on-surface-variant font-light">
                  모든 병은 장인의 손길을 거쳐 수작업으로 번호가 매겨집니다. 이는 각 배치가 가진 고유한 역사를 증명하는 우리만의 방식입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative mt-40 py-60 text-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/quote_bg.png" 
              alt="Mist background" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-background/20"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <blockquote className="font-serif text-4xl md:text-6xl text-primary leading-tight italic drop-shadow-md px-4">
              &quot;서두름은 향기를 흩뜨리지만, <br className="hidden md:block"/> 기다림은 영혼을 새깁니다.&quot;
            </blockquote>
            <div className="w-12 h-[1px] bg-primary/30 mx-auto mt-12"></div>
            <p className="font-label text-xs uppercase tracking-[0.4em] text-primary/70">The Slow Art of Scent</p>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 border-t border-stone-800 text-stone-300 py-12 px-6 md:px-12 xl:px-24">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-[10px] tracking-widest uppercase text-stone-500">© 2024 Botanical Atelier. The Slow Process.</p>
          <div className="flex gap-8">
            <a href="/secondproject" className="font-label text-[10px] tracking-widest uppercase text-stone-500 hover:text-stone-300 transition-colors">Home</a>
            <a href="/secondproject/our-story" className="font-label text-[10px] tracking-widest uppercase text-stone-500 hover:text-stone-300 transition-colors">Our Story</a>
          </div>
        </div>
      </footer>
    </>
  );
}
