import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Pristine Editorial",
      category: "Fullstack Application",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDts90TCHREDVXCxbJDzXFGawzP3rD8zmSmk9tgXmxNtbwECEYBURgNgbvzaESdwKrJnz6VtqMBDz7uwg0jSG2RJYvjizNJgwxhiV-HfGuFgESZ19guYIvEzXhDM3vsBIha8L-6mSqZbnJ2V3c4TEVZsR-kZbQNcxKIVFRlZdfBKzCB3lYAbuEqQYelh9u_NOMFudLwUtzqPlCoftpVV6BZu6TTGXXcgXkD0LNIaX-s6lQ3rfm2XEGGC32u6AWAArt3rxJA35tUQQ5T",
      alt: "Pristine Editorial 프로젝트 인터페이스",
      url: "/bbb",
    },
    {
      title: "mygo",
      category: "Web Service",
      img: "/projects/mygo.png",
      alt: "mygo 프로젝트 인터페이스",
      url: "/mygo",
    },
    {
      title: "secondproject",
      category: "E-commerce Interface",
      img: "/projects/secondproject.png",
      alt: "secondproject 프로젝트 인터페이스",
      url: "/secondproject",
    },
  ];

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
              className="text-slate-900 font-semibold"
              href="/"
            >
              작업물
            </Link>
            <Link
              className="text-slate-400 hover:text-slate-900 transition-colors"
              href="/about"
            >
              소개
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-40 flex-grow">
        <div className="max-w-7xl mx-auto px-8 relative">
          
          {/* Hero Section */}
          <div className="mb-24 md:mb-40 max-w-4xl">
            <h1 className="font-headline font-medium text-5xl md:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-[1.05] mb-8">
              Selected <br/>
              <span className="text-slate-300">Works 2024.</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed">
              사용자와 비즈니스를 모두 만족시키는 웹 인터페이스. 본질에 충실한 심플한 디자인과 탄탄한 아키텍처를 결합합니다.
            </p>
          </div>

          {/* Project List (Editorial Style Layout) */}
          <div className="space-y-32 mb-40">
            {projects.map((project, index) => (
              <Link
                href={project.url}
                key={index}
                className="group block"
              >
                <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                  
                  {/* Left Col: Image */}
                  <div className={`md:col-span-8 overflow-hidden bg-slate-50 w-full ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] w-full transform transition-transform duration-[1.5s] group-hover:scale-[1.03]">
                      <Image
                        src={project.img}
                        alt={project.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Right Col: Info */}
                  <div className={`md:col-span-4 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1 items-start md:items-end md:text-right' : ''}`}>
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 block">
                      0{index + 1} — {project.category}
                    </span>
                    <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-8 uppercase">
                      {project.title}
                    </h2>
                    
                    <div className={`inline-flex items-center gap-4 text-sm font-medium text-slate-900 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                      View Project
                      <span className="w-8 h-px bg-slate-900 transition-all duration-500 group-hover:w-16"></span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          {/* Minimal CTA */}
          <div className="text-center mb-32 pb-32 border-b border-slate-100">
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

      {/* Footer */}
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
