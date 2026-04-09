import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-body selection:bg-slate-900 selection:text-white">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
          <Link href="/" className="text-xl font-bold text-slate-900 tracking-tighter font-headline">
            포트폴리오
          </Link>
          <div className="flex items-center gap-6 md:gap-10 font-headline font-medium text-sm tracking-wide">
            <Link
              className="text-slate-400 hover:text-slate-900 transition-colors"
              href="/"
            >
              작업물
            </Link>
            <Link
              className="text-slate-900 font-semibold"
              href="/about"
            >
              소개
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-40 flex-grow">
        <div className="max-w-7xl mx-auto px-8 relative">
          
          {/* Header Section (Editorial Layout) */}
          <div className="grid md:grid-cols-12 gap-12 lg:gap-24 mb-24 md:mb-32 items-end">
            <div className="md:col-span-8">
              <h1 className="font-headline font-medium text-5xl md:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-8">
                Designing with<br/>
                <span className="text-slate-300">clarity & purpose.</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
                시각적인 군더더기를 덜어내고, 본질에 집중합니다. 기술적 완성도와 아름다운 사용자 경험의 균형을 맞추는 프론트엔드 개발자입니다.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <div className="flex flex-col items-start md:items-end text-xs text-slate-400 uppercase tracking-widest gap-3 font-semibold">
                <span>Seoul, South Korea</span>
                <span className="block w-8 h-px bg-slate-300"></span>
                <span>Available for work</span>
              </div>
            </div>
          </div>

          {/* Large Image Section (Minimal & Wide) */}
          <div className="w-full aspect-[21/9] md:aspect-[3/1] bg-slate-100 overflow-hidden mb-24 md:mb-32 relative">
             <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2940&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105"
              />
          </div>

          {/* Content Section: 2 Columns */}
          <div className="grid md:grid-cols-12 gap-12 lg:gap-24 mb-32 pb-32 border-b border-slate-100">
            {/* Left Col: Titles */}
            <div className="md:col-span-5">
              <h2 className="font-headline text-3xl md:text-4xl text-slate-900 tracking-tight sticky top-32">
                Philosophy &<br/>Capabilities
              </h2>
            </div>
            
            {/* Right Col: Details */}
            <div className="md:col-span-7 space-y-24 pt-2 md:pt-0">
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-4">
                  <span className="w-8 h-px bg-slate-200"></span>
                  01. Design Philosophy
                </h3>
                <p className="text-xl md:text-2xl leading-relaxed text-slate-800 font-medium">
                  단순함은 궁극의 정교함입니다. 불필요한 장식을 배제하고 사용자에게 꼭 필요한 인터랙션만을 세련되게 전달하는 것을 목표로 합니다.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-4">
                  <span className="w-8 h-px bg-slate-200"></span>
                  02. Engineering
                </h3>
                <p className="text-lg leading-relaxed text-slate-500">
                  유지보수와 확장성이 뛰어난 깨끗한 프론트엔드 아키텍처를 설계합니다. 프레임워크에 종속되기보다는 웹의 본질적인 원리를 이해하고 최상의 성능을 구현하기 위해 끝없이 고민합니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"].map((skill) => (
                    <span key={skill} className="px-5 py-2 border border-slate-200 rounded-full text-xs font-semibold tracking-wider text-slate-600 bg-white hover:border-slate-400 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Minimal CTA */}
          <div className="text-center mb-32">
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-6 font-semibold">Let's Talk</p>
            <h2 className="text-4xl md:text-5xl font-headline text-slate-900 tracking-tight mb-12">
              Have an idea?
            </h2>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-6 text-lg md:text-xl font-medium text-slate-900 group">
              <span className="w-12 h-px bg-slate-300 transition-all duration-500 group-hover:w-24 group-hover:bg-slate-900"></span>
              hello@example.com
              <span className="w-12 h-px bg-slate-300 transition-all duration-500 group-hover:w-24 group-hover:bg-slate-900"></span>
            </a>
          </div>

        </div>
      </main>

      {/* Footer (Refined) */}
      <footer className="w-full py-12">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
          <div className="font-body text-xs text-slate-400 font-medium tracking-wide">
            © 2024 PORTFOLIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a className="font-body text-xs text-slate-400 hover:text-slate-900 font-medium tracking-widest uppercase transition-colors" href="#">Instagram</a>
            <a className="font-body text-xs text-slate-400 hover:text-slate-900 font-medium tracking-widest uppercase transition-colors" href="#">LinkedIn</a>
            <a className="font-body text-xs text-slate-400 hover:text-slate-900 font-medium tracking-widest uppercase transition-colors" href="#">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
