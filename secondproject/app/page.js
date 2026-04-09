"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
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
      {/* Web Header / Navbar */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-outline-variant/30 transition-all">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center px-6 md:px-12 xl:px-24 py-5 w-full">
          <button className="md:hidden hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
          
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/" className="text-xl md:text-2xl font-serif tracking-[0.15em] uppercase text-primary">Botanical Atelier</Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            <Link href="/our-story" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Our Story</Link>
            <Link href="/process" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Process</Link>
            <Link href="/journal" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Journal</Link>
          </nav>
          
          <div className="flex items-center gap-6 text-primary">
          </div>
        </div>
      </header>

      <main className="overflow-x-hidden pt-16 md:pt-0">
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-screen min-h-[700px] w-full flex items-center px-6 md:px-12 xl:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-stone-900">
            <img 
              className="w-full h-full object-cover opacity-80" 
              alt="Dreamy landscape" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt1AbA8kud8p0n0c9C9Xk1C8_XTgf20xuIQBI5JLuQL4EQifZ-qwLKpW78iacdRnR249BDtTQ_e9P5mgZOBm3aGVWjcJw8xjJznOU-bzlDjQrrhsxuAmgUZ5XCDOQ-Vhp0wHRINsZvOlkJ7Qprzy6X2fFwiBx3RSpq50fOmzOrLp9cEoVHJvb8DsLObrG45yz-ZibTKpmBO3PkoZOJpVOaTB7XbeKgBJ2ymjeWqUYxn3YbZF88cRGzSKVfA6bvcsjNb_iL6qBo71CA" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/40 to-transparent hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/60 md:hidden"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-[1600px] mx-auto pt-12 md:pt-0 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
              <span className="label-sm uppercase tracking-[0.3em] text-surface-bright/80 font-label text-xs md:text-sm">The Sylvan Muse</span>
              <h2 className="font-headline text-6xl md:text-8xl xl:text-[9rem] text-surface-bright tracking-tighter leading-[1.0] italic mt-4 mb-6 pt-2">
                자연의 <br/>
                <span className="font-normal not-italic xl:ml-24 md:ml-12">숨결.</span>
              </h2>
              <p className="text-surface-bright/90 font-light text-base md:text-xl md:max-w-md mx-auto md:mx-0 mb-10 leading-relaxed">
                태평양의 안개 낀 숲에서 지속 가능한 방식으로 채취한 원료로 만든 소량 생산 보태니컬 향수 컬렉션입니다.
              </p>

            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 md:py-40 px-6 md:px-12 xl:px-24 bg-surface">
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
            <div className="w-full md:w-5/12 relative group order-2 md:order-1 mt-12 md:mt-0">
              <div className="absolute -top-6 md:-top-12 -left-6 md:-left-12 w-[110%] h-[110%] bg-surface-container-low -z-10 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-1000"></div>
              <img 
                ref={addToRefs}
                className="w-full aspect-[4/5] object-cover shadow-2xl grayscale transition-all duration-[1500ms] ease-in-out" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2jqLeDzgYeAwvszNb31Suzjkr99h2_JKuWchEJO5N1m7M2IcBMgnxZbeMY7VLCIU3yfwbZEuw4ZGs02BdcFqoSHOOZcJn7RM0hsWX20xVyG19WEMbDuhPdhn3LHUS0K-AopX_sh8ZxTsc0WvZPxh85mk8DZbWmX1pLsrPiPFPrZNEZgAkWbDC09SSduCbn8x8KvJiARn-Lh4cFwH-fQKw0jbo8WKL2Jpaf9FjxOD9WPoS8OvbZAKluGefdbtHSnSy65C2SDSohaii"
                alt="Our Heritage"
              />
            </div>
            
            <div className="w-full md:w-7/12 space-y-8 order-1 md:order-2">
              <span className="block text-primary font-label uppercase tracking-[0.2em] text-xs">장인 정신의 배경</span>
              <h3 className="font-headline text-4xl md:text-6xl text-primary leading-tight">우리의 유산</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg md:text-xl font-light">
                지속 가능한 수확의 토양에서 태어난 Sylvan Muse는 숲 바닥의 덧없는 정수를 담아냅니다. 우리는 계절의 리듬을 존중하는 조향을 믿으며, 자연의 심오한 단순함에서 고요한 사치를 추출합니다.
              </p>
              <div className="pt-6">
                <a className="inline-flex items-center gap-3 font-label text-sm uppercase tracking-widest text-primary border-b border-primary/30 pb-2 hover:border-primary transition-all group" href="/our-story">
                  브랜드 철학 발견하기
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">east</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Scents */}
        <section className="py-24 md:py-32 bg-surface-container-low px-6 md:px-12 xl:px-24">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-6">
              <div>
                <h3 className="font-headline text-4xl md:text-5xl mb-3 text-on-surface">시그니처 향수</h3>
                <p className="font-label text-xs md:text-sm uppercase tracking-widest text-on-surface-variant">2024 컬렉션</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container-highest mb-6">
                  <img ref={addToRefs} className="w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-in-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTyFI7ptSEfyHo0Bc3N8l6LoTTyPW6xkT3VpBz4fW7KbXMzI27yOuZ2ic4SdBiUUx978zgN39yrnCGKJlpuKFaVUaZiUKVl_2FEOrsq-dGkdyZvo3USh1mRvagN7-JkZcKKylETTka88ppfz5Cf3I_S0p3t-u5QrwWho7SK3QwWk-0EL_D4WLsjsXv05aJzE4lpIkjFKpJdg44Z5rbHgDOvKmLjGTEiBBrJDzpzE_VFWRS7RUsMXeiYEhGetQ1MjH72Q4nAt7jiR2I" alt="Product" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-surface/90 backdrop-blur px-4 py-2 text-[10px] uppercase font-bold tracking-widest text-on-surface border border-outline-variant/30">신제품</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline text-2xl text-on-surface mb-2 mt-1">Misty Cedar</h4>
                    <div className="flex gap-2 text-on-surface-variant">
                      <span className="font-label text-[10px] uppercase tracking-[0.1em]">Woody</span>
                      <span className="font-label text-[10px] uppercase tracking-[0.1em]">•</span>
                      <span className="font-label text-[10px] uppercase tracking-[0.1em]">Ozone</span>
                    </div>
                  </div>
                  <span className="text-on-surface font-body text-xl">$185</span>
                </div>
              </div>

              <div className="group cursor-pointer md:mt-16">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container-highest mb-6">
                  <img ref={addToRefs} className="w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-in-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhyVj0zgRNDWscAlEVCmSi7rdirmF5pAzf4iN0KcE-_pXEbY0Hh0WqLcAj258YK7eBsPhSRjOViTrtGU68yG7LTwfC6YtwGpuI_NMNDmcHYQ0s6nI3Z8s0yPfIFxvzZhr5xnYW45Az8Jz8xu77j9yc8LysCziufB8G58thfJAhSKShL7dv7ziu6u30uhIGUE6OlAOBXQfqbksym9zy8zYh9aOKRxgsE-4LadZXQ1AS0TRCnFbWgwlop82_47t4_ecxUw6Gz3aB1lK1" alt="Product" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline text-2xl text-on-surface mb-2 mt-1">Wild Violet</h4>
                    <div className="flex gap-2">
                      <span className="font-label text-[10px] uppercase text-on-surface-variant tracking-[0.1em]">Floral Essence</span>
                    </div>
                  </div>
                  <span className="text-on-surface font-body text-xl">$160</span>
                </div>
              </div>

              <div className="group cursor-pointer md:mt-32">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container-highest mb-6">
                  <img ref={addToRefs} className="w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-in-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7OrvD8132aYvHULK8P7pvKCEiwcRgVH2Gcejts7mFoqgKhMh-ofoTWNB7O4zZcwB07atMc4SxslUuRPZm2gme_Sr55iEIFkN3PnrU8ZUF0Nz1TeSe24ArFGO10qbGDvsymLa38malvn_EeXIJQtQcbidI6Tp5kNU7HLUDj_iwAGZtFmf77UW_6hBmREcbH48yEUUU2eDf_isP0b9lEkJ78JPwAIpgeiA2qZwfDVKaMcTd0kM_L7L0SuPewjbSFctPd0n4yAYt9Fo" alt="Product" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline text-2xl text-on-surface mb-2 mt-1">Green Moss</h4>
                    <div className="flex gap-2">
                      <span className="font-label text-[10px] uppercase text-on-surface-variant tracking-[0.1em]">Earthy Base</span>
                    </div>
                  </div>
                  <span className="text-on-surface font-body text-xl">$175</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        
        {/* Chips Section */}
        <section className="py-24 md:py-32 bg-surface px-6 md:px-12 border-t border-outline-variant/10">
          <div className="max-w-5xl mx-auto">
            <h4 className="font-label text-xs uppercase tracking-[0.4em] mb-16 text-center text-primary/60">Core Botanicals</h4>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
              <div className="group flex flex-col items-center gap-4 cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-all duration-500 group-hover:-translate-y-2">
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">eco</span>
                </div>
                <span className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">Vetiver</span>
              </div>
              
              <div className="group flex flex-col items-center gap-4 cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-all duration-500 group-hover:-translate-y-2">
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">park</span>
                </div>
                <span className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">Sandalwood</span>
              </div>
              
              <div className="group flex flex-col items-center gap-4 cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-all duration-500 group-hover:-translate-y-2">
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">flare</span>
                </div>
                <span className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">Amber</span>
              </div>
              
              <div className="group flex flex-col items-center gap-4 cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-all duration-500 group-hover:-translate-y-2">
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">grass</span>
                </div>
                <span className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">Oakmoss</span>
              </div>

              <div className="group flex flex-col items-center gap-4 cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-all duration-500 group-hover:-translate-y-2">
                  <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">filter_vintage</span>
                </div>
                <span className="text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">Jasmine</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-16 md:py-24 px-6 md:px-12 xl:px-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 text-center md:text-left space-y-6">
            <h2 className="font-serif text-2xl text-stone-100 tracking-[0.2em] uppercase">Botanical Atelier</h2>
            <p className="font-light text-stone-400 max-w-xs mx-auto md:mx-0 leading-relaxed">
              깊은 숲의 고요한 시를 모든 유리병에 담아 정성을 다해 만듭니다.
            </p>
          </div>
          
          <div className="md:col-span-8 flex flex-wrap justify-center md:justify-end gap-12 md:gap-24 text-center md:text-left">
            <div className="space-y-6">
              <h4 className="font-label text-xs uppercase tracking-[0.2em] text-stone-100">탐색</h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="font-body text-sm hover:text-white transition-colors">향수 컬렉션</a>
                <a href="#" className="font-body text-sm hover:text-white transition-colors">디스커버리 세트</a>
                <a href="#" className="font-body text-sm hover:text-white transition-colors">선물하기</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="font-label text-xs uppercase tracking-[0.2em] text-stone-100">아틀리에</h4>
              <nav className="flex flex-col gap-4">
                <a href="/our-story" className="font-body text-sm hover:text-white transition-colors">브랜드 철학</a>
                <a href="#" className="font-body text-sm hover:text-white transition-colors">지속 가능성</a>
                <a href="#" className="font-body text-sm hover:text-white transition-colors">저널</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="font-label text-xs uppercase tracking-[0.2em] text-stone-100">고객 지원</h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="font-body text-sm hover:text-white transition-colors">문의하기</a>
                <a href="#" className="font-body text-sm hover:text-white transition-colors">자주 묻는 질문</a>
                <a href="#" className="font-body text-sm hover:text-white transition-colors">반품 정책</a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-[10px] tracking-widest uppercase text-stone-500">© 2024 Botanical Atelier. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="font-label text-[10px] tracking-widest uppercase text-stone-500 hover:text-stone-300 transition-colors">개인정보 처리방침</a>
            <a href="#" className="font-label text-[10px] tracking-widest uppercase text-stone-500 hover:text-stone-300 transition-colors">이용 약관</a>
          </div>
        </div>
      </footer>
    </>
  );
}
