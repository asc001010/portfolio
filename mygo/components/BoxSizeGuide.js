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

        {/* Temporary Placeholder for Box Size Guide Image */}
        <div className="w-full bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-3xl p-12 flex flex-col items-center justify-center aspect-video max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center mb-6">
            <HelpCircle className="w-10 h-10 text-zinc-300" />
          </div>
          <h3 className="text-xl font-bold text-[#1D1D1F] mb-3">
            우체국 박스 사이즈 및 실제 보관 예시 사진
          </h3>
          <p className="text-zinc-400 max-w-md text-center bg-white px-6 py-3 rounded-full shadow-sm text-sm font-medium">
            [추후 제공 예정]
          </p>
          <p className="text-sm text-zinc-400 mt-6 max-w-lg text-center leading-relaxed">
            이 영역에는 1호~5호 우체국 박스 실물 비교 사진과 각 유닛(Cube, S, M, L, XL)에 
            박스가 몇 개나 들어가는지 시각적으로 보여주는 자료가 추가될 예정입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
