"use client";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function JournalDetailPage() {
  const { id } = useParams();
  const imageRefs = useRef([]);

  const journalEntries = [
    {
      id: "1",
      category: "Scent Note",
      title: "베티버: 대지의 뿌리에서 추출한 깊은 평온",
      date: "2024. 03. 15",
      content: `
        베티버는 보태니컬 아틀리에가 가장 사랑하는 원료 중 하나입니다. 습한 흙의 향기와 나무의 온기를 동시에 품은 베티버는 대지의 깊은 곳에서 추출한 평온을 선사합니다.
        
        우리는 인도양의 화산 섬에서 자란 최상급 베티버 뿌리를 고집합니다. 이 뿌리들은 수작업으로 세척되고 수개월간 건조된 후, 고유의 복합적인 향기를 잃지 않도록 천천히 증류됩니다.
        
        베티버의 향은 단순히 나무 향에 머물지 않습니다. 그것은 비 온 뒤의 숲, 갓 파헤친 흙, 그리고 스모키한 깊이감을 모두 담고 있습니다. 우리의 조향사들은 이 원료가 가진 자연스러운 힘을 극대화하기 위해 최소한의 보조 원료만을 사용하여 순수함을 유지합니다.
      `,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7OrvD8132aYvHULK8P7pvKCEiwcRgVH2Gcejts7mFoqgKhMh-ofoTWNB7O4zZcwB07atMc4SxslUuRPZm2gme_Sr55iEIFkN3PnrU8ZUF0Nz1TeSe24ArFGO10qbGDvsymLa38malvn_EeXIJQtQcbidI6Tp5kNU7HLUDj_iwAGZtFmf77UW_6hBmREcbH48yEUUU2eDf_isP0b9lEkJ78JPwAIpgeiA2qZwfDVKaMcTd0kM_L7L0SuPewjbSFctPd0n4yAYt9Fo"
    },
    {
      id: "2",
      category: "Seasonal",
      title: "안개 낀 숲의 새벽, 그 덧없음에 대하여",
      date: "2024. 02. 28",
      content: `
        새벽 5시, 태평양 연안의 숲은 수만 개의 미세한 안개 입자로 가득 찹니다. 이 찰나의 순간을 향기에 담기 위한 우리의 여정은 매일 아침 반복됩니다.
        
        안개는 소리를 흡수하고 시각을 흐리게 하지만, 후각은 오히려 더욱 예민하게 깨어납니다. 젖은 이끼의 향, 서늘한 바늘잎 나무의 숨결, 그리고 바다에서 불어오는 미세한 소금기가 섞여 하나의 완벽한 대기질을 만듭니다.
        
        우리의 'Misty Cedar'는 이 새벽의 공기를 포착하려는 시도에서 탄생했습니다. 계절의 변화에 따라 미묘하게 달라지는 안개의 밀도를 이해하고 이를 향수에 투영하는 과정은 우리에게 가장 큰 영감을 주는 작업입니다.
      `,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt1AbA8kud8p0n0c9C9Xk1C8_XTgf20xuIQBI5JLuQL4EQifZ-qwLKpW78iacdRnR249BDtTQ_e9P5mgZOBm3aGVWjcJw8xjJznOU-bzlDjQrrhsxuAmgUZ5XCDOQ-Vhp0wHRINsZvOlkJ7Qprzy6X2fFwiBx3RSpq50fOmzOrLp9cEoVHJvb8DsLObrG45yz-ZibTKpmBO3PkoZOJpVOaTB7XbeKgBJ2ymjeWqUYxn3YbZF88cRGzSKVfA6bvcsjNb_iL6qBo71CA"
    },
    {
      id: "3",
      category: "Philosophy",
      title: "기다림의 미학: 슬로우 퍼퓨머리의 가치",
      date: "2024. 01. 10",
      content: `
        빠르게 변하는 세상에서 6개월이라는 시간을 기다리는 것이 어떤 의미를 갖는지, 우리의 작업 방식을 공유합니다. 
        
        대량 생산되는 향수들과 달리, 보태니컬 아틀리에는 '시간'을 주원료로 사용합니다. 원료들이 오일에 스며들어 서로의 경계를 허물고 하나의 온전한 조화를 이루기까지는 절대적인 물리적 시간이 필요합니다.
        
        우리는 기계를 통한 강제적인 고속 냉각이나 화학적인 안정화 과정을 거치지 않습니다. 대신 아틀리에의 어두운 저장고에서 계절의 온도를 맞받아치며 자연스럽게 익어가도록 둡니다. 이것이 우리가 정의하는 진정한 럭셔리이며, 당신의 피부 위에서 더 오래, 더 깊게 머무는 비결입니다.
      `,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2jqLeDzgYeAwvszNb31Suzjkr99h2_JKuWchEJO5N1m7M2IcBMgnxZbeMY7VLCIU3yfwbZEuw4ZGs02BdcFqoSHOOZcJn7RM0hsWX20xVyG19WEMbDuhPdhn3LHUS0K-AopX_sh8ZxTsc0WvZPxh85mk8DZbWmX1pLsrPiPFPrZNEZgAkWbDC09SSduCbn8x8KvJiARn-Lh4cFwH-fQKw0jbo8WKL2Jpaf9FjxOD9WPoS8OvbZAKluGefdbtHSnSy65C2SDSohaii"
    }
  ];

  const entry = journalEntries.find(e => e.id === id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("grayscale");
            entry.target.classList.add("grayscale-0");
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

  if (!entry) return <div className="p-24 text-center">Post not found</div>;

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-outline-variant/30 transition-all">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center px-6 md:px-12 xl:px-24 py-5 w-full">
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/secondproject" className="text-xl md:text-2xl font-serif tracking-[0.15em] uppercase text-primary">Botanical Atelier</Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            <Link href="/secondproject/our-story" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Our Story</Link>
            <Link href="/secondproject/process" className="font-label text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary transition-colors">Process</Link>
            <Link href="/secondproject/journal" className="font-label text-xs uppercase tracking-[0.15em] text-primary transition-colors border-b border-primary/30">Journal</Link>
          </nav>

          <div className="flex items-center gap-6 text-primary">
            <Link href="/secondproject/journal" className="font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>arrow_back</span>
              목록으로
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 overflow-x-hidden">
        {/* Post Hero */}
        <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden">
          <img 
            ref={addToRefs}
            src={entry.image} 
            alt={entry.title} 
            className="w-full h-full object-cover grayscale transition-all duration-[2000ms] scale-105"
          />
          <div className="absolute inset-0 bg-stone-950/20"></div>
        </div>

        <article className="max-w-4xl mx-auto px-6 py-24 md:py-32">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <div className="flex justify-center items-center gap-4 text-xs font-label uppercase tracking-[0.3em] text-primary">
                <span>{entry.category}</span>
                <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                <span className="text-on-surface-variant font-light">{entry.date}</span>
              </div>
              <h1 className="font-headline text-4xl md:text-6xl text-on-surface leading-tight pt-4">
                {entry.title}
              </h1>
            </div>

            <div className="w-12 h-[1px] bg-outline-variant/50 mx-auto"></div>

            <div className="max-w-3xl mx-auto">
              <div className="text-on-surface-variant font-light text-lg md:text-xl leading-[2.0] space-y-12 whitespace-pre-line first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                {entry.content}
              </div>
            </div>

            <div className="pt-24 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="space-y-4">
                <span className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60 text-center md:text-left">Share this story</span>
                <div className="flex gap-8 text-primary font-label text-xs uppercase tracking-widest">
                  <button className="hover:text-on-surface transition-colors">Instagram</button>
                  <button className="hover:text-on-surface transition-colors">Pinterest</button>
                  <button className="hover:text-on-surface transition-colors">Twitter</button>
                </div>
              </div>
              
              <Link href="/secondproject/journal" className="group flex items-center gap-4 border border-primary/20 px-12 py-5 font-label text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-500">
                Back to Journal
                <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">west</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Related Stories */}
        <section className="bg-surface-container-low py-24 md:py-32 px-6">
          <div className="max-w-[1600px] mx-auto">
            <h3 className="font-headline text-3xl mb-16 text-center text-on-surface">More to Explore</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journalEntries.filter(e => e.id !== id).slice(0, 3).map((related) => (
                <Link key={related.id} href={`/journal/${related.id}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden mb-6">
                    <img src={related.image} alt={related.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105" />
                  </div>
                  <span className="text-[10px] font-label uppercase tracking-widest text-primary mb-2 block">{related.category}</span>
                  <h4 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">{related.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-300 py-16 px-6 md:px-12 xl:px-24 border-t border-stone-800">
        <div className="max-w-[1600px] mx-auto text-center space-y-8">
          <h2 className="font-serif text-2xl text-stone-100 tracking-[0.2em] uppercase">Botanical Atelier</h2>
          <p className="font-label text-[10px] tracking-widest uppercase text-stone-500">© 2024 Botanical Atelier. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
