import { Box, HelpCircle } from 'lucide-react';

export default function BoxSizeGuide() {
  return (
    <section id="box-guide" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
            <Box className="w-8 h-8 text-brand-blue" />
            박스 크기 안내
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            우체국 박스 표준 규격을 기준으로 보관함 사이즈를 가늠해 보세요. 
            정확한 보관량은 지점 방문 시 상담을 통해 확인하실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: '1호 박스', size: '22x19x9 cm', usage: '작은 책, 소품 보관' },
            { name: '2호 박스', size: '27x18x15 cm', usage: '문구류, 소형 전자기기' },
            { name: '3호 박스', size: '34x25x21 cm', usage: '신발, 가방, 의류 정리에 적합' },
            { name: '4호 박스', size: '41x31x28 cm', usage: '겨울 코트, 서류 묶음 등' },
            { name: '5호 박스', size: '48x38x34 cm', usage: '가장 많이 쓰이는 표준 규격' },
            { name: '특대형 박스', size: '60x40x40 cm+', usage: '이사/대형 물품 전용' },
          ].map((box, i) => (
            <div key={i} className="group bg-zinc-50 rounded-[2rem] p-8 border border-zinc-100 hover:bg-white hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Box className="w-8 h-8 text-brand-blue/30" />
              </div>
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">{box.name}</h3>
              <p className="text-xs font-black text-brand-blue uppercase tracking-widest mb-4">{box.size}</p>
              <p className="text-sm text-zinc-500 leading-relaxed">{box.usage}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1D1D1F] rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6">내 물건에 딱 맞는 <br />보관함 찾기</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                단순한 크기 비교를 넘어, 전문 매니저가 무료로 상담해 드립니다. <br className="hidden md:block" />
                보관하고 싶은 물건의 사진만 찍어서 보내주세요.
              </p>
              <button className="px-8 py-4 bg-brand-blue rounded-full font-bold text-sm hover:opacity-90 transition-all">
                전문가 견적 상담받기
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/5 space-y-2">
                <span className="text-2xl font-black italic">S</span>
                <span className="text-[10px] font-bold text-zinc-500">우체국 5호 4개</span>
              </div>
              <div className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/5 space-y-2">
                <span className="text-2xl font-black italic">M</span>
                <span className="text-[10px] font-bold text-zinc-500">1톤 트럭 1/4</span>
              </div>
              <div className="aspect-square bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/5 space-y-2">
                <span className="text-2xl font-black italic">L</span>
                <span className="text-[10px] font-bold text-zinc-500">1톤 트럭 전용</span>
              </div>
              <div className="aspect-square bg-brand-blue/20 rounded-2xl flex flex-col items-center justify-center border border-brand-blue/30 space-y-2">
                <span className="text-2xl font-black italic">XL</span>
                <span className="text-[10px] font-bold text-zinc-100">프리미엄 룸</span>
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}
