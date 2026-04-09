"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function JournalPage() {
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

  const journalEntries = [
    {
      id: 1,
      category: "Scent Note",
      title: "베티버: 대지의 뿌리에서 추출한 깊은 평온",
      date: "2024. 03. 15",
      excerpt: "습한 흙의 향기와 나무의 온기를 동시에 품은 베티버는 보태니컬 아틀리에가 가장 사랑하는 원료 중 하나입니다...",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7OrvD8132aYvHULK8P7pvKCEiwcRgVH2Gcejts7mFoqgKhMh-ofoTWNB7O4zZcwB07atMc4SxslUuRPZm2gme_Sr55iEIFkN3PnrU8ZUF0Nz1TeSe24ArFGO10qbGDvsymLa38malvn_EeXIJQtQcbidI6Tp5kNU7HLUDj_iwAGZtFmf77UW_6hBmREcbH48yEUUU2eDf_isP0b9lEkJ78JPwAIpgeiA2qZwfDVKaMcTd0kM_L7L0SuPewjbSFctPd0n4yAYt9Fo"
    },
    {
      id: 2,
      category: "Seasonal",
      title: "안개 낀 숲의 새벽, 그 덧없음에 대하여",
      date: "2024. 02. 28",
      excerpt: "새벽 5시, 태평양 연안의 숲은 수만 개의 미세한 안개 입자로 가득 찹니다. 이 찰나의 순간을 향기에 담기 위한 여정...",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt1AbA8kud8p0n0c9C9Xk1C8_XTgf20xuIQBI5JLuQL4EQifZ-qwLKpW78iacdRnR249BDtTQ_e9P5mgZOBm3aGVWjcJw8xjJznOU-bzlDjQrrhsxuAmgUZ5XCDOQ-Vhp0wHRINsZvOlkJ7Qprzy6X2fFwiBx3RSpq50fOmzOrLp9cEoVHJvb8DsLObrG45yz-ZibTKpmBO3PkoZOJpVOaTB7XbeKgBJ2ymjeWqUYxn3YbZF88cRGzSKVfA6bvcsjNb_iL6qBo71CA"
    },
    {
      id: 3,
      category: "Philosophy",
      title: "기다림의 미학: 슬로우 퍼퓨머리의 가치",
      date: "2024. 01. 10",
      excerpt: "빠르게 변하는 세상에서 6개월이라는 시간을 기다리는 것이 어떤 의미를 갖는지, 우리의 작업 방식을 공유합니다.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2jqLeDzgYeAwvszNb31Suzjkr99h2_JKuWchEJO5N1m7M2IcBMgnxZbeMY7VLCIU3yfwbZEuw4ZGs02BdcFqoSHOOZcJn7RM0hsWX20xVyG19WEMbDuhPdhn3LHUS0K-AopX_sh8ZxTsc0WvZPxh85mk8DZbWmX1pLsrPiPFPrZNEZgAkWbDC09SSduCbn8x8KvJiARn-Lh4cFwH-fQKw0jbo8WKL2Jpaf9FjxOD9WPoS8OvbZAKluGefdbtHSnSy65C2SDSohaii"
    }
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-outline-variant/30 transition-all">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center px-6 md:px-12 xl:px-24 py-5 w-full">
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <a href="/secondproject" className="text-xl md:text-2xl font-serif tracking-[0.15em] uppercase text-primary">Botanical Atelier</a>
          </div>
          
          <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            <a href="/secondproject/our-story" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Our Story</a>
            <a href="/secondproject/process" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Process</a>
            <a href="/secondproject/journal" className="font-label text-xs uppercase tracking-[0.15em] text-primary transition-colors border-b border-primary/30">Journal</a>
          </nav>

          <div className="flex items-center gap-6 text-primary">
            <a href="/secondproject" className="font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_back</span>
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 overflow-x-hidden">
        {/* Journal Hero */}
        <section className="px-6 md:px-12 xl:px-24 max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center border-b border-outline-variant/20 pb-24">
            <div className="w-full md:w-1/2 space-y-6">
              <span className="block text-primary font-label uppercase tracking-[0.3em] text-xs">The Botanical Journal</span>
              <h1 className="font-headline text-5xl md:text-7xl text-primary italic leading-tight">
                기록된 <br/>
                <span className="font-normal not-italic">감각들.</span>
              </h1>
              <p className="text-on-surface-variant font-light text-lg md:text-xl leading-relaxed max-w-lg pt-4">
                숲의 목소리, 원료의 숨결, 그리고 아틀리에의 일상을 기록합니다. 향기를 넘어선 삶의 예술을 탐구하는 공간입니다.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-square overflow-hidden shadow-2xl relative">
                <img 
                  ref={addToRefs}
                  src="/journal_hero.png" 
                  alt="Journal Hero" 
                  className="w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-in-out"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journal Feed */}
        <section className="px-6 md:px-12 xl:px-24 max-w-[1600px] mx-auto mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {journalEntries.map((entry) => (
              <Link key={entry.id} href={`/journal/${entry.id}`} className="group cursor-pointer">
                <article>
                  <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                    <img 
                      ref={addToRefs}
                      src={entry.image} 
                      alt={entry.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-[1500ms] ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-label uppercase tracking-[0.2em] text-primary">
                      <span>{entry.category}</span>
                      <span className="text-on-surface-variant">{entry.date}</span>
                    </div>
                    <h2 className="font-headline text-2xl text-on-surface leading-snug group-hover:text-primary transition-colors">
                      {entry.title}
                    </h2>
                    <p className="text-on-surface-variant font-light text-sm leading-relaxed line-clamp-3">
                      {entry.excerpt}
                    </p>
                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform">
                        Read More <span className="material-symbols-outlined text-xs">east</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 border-t border-stone-800 text-stone-300 py-16 px-6 md:px-12 xl:px-24">
        <div className="max-w-[1600px] mx-auto text-center space-y-8">
          <h2 className="font-serif text-2xl text-stone-100 tracking-[0.2em] uppercase">Botanical Atelier</h2>
          <p className="font-label text-[10px] tracking-widest uppercase text-stone-500">© 2024 Botanical Atelier. Reflections from the Wild.</p>
        </div>
      </footer>
    </>
  );
}
