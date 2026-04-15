import { Share2 as Facebook, Globe as Instagram, Film as Youtube, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="w-12 h-12 mb-6 bg-white rounded-full overflow-hidden p-1 shadow-sm">
              <img src="/logo.webp" alt="내꼬 로고" className="w-full h-full object-cover rounded-full" />
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6">개출되는 개인 창고 서비스, 내꼬(NAEKKO). <br />언제 어디서든 당신의 소중한 짐을 안전하게 보관하세요.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">서비스</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">지점안내</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용방법</a></li>
              <li><a href="#" className="hover:text-white transition-colors">요금안내</a></li>
              <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">주식회사 내꼬</h4>
            <p className="text-xs leading-relaxed">
              대표이사: 안승찬 <br />
              <span suppressHydrationWarning>사업자등록번호: 000-00-00000</span> <br />
              주소: 서울특별시 서초구 서초대로 314 <br />
              <span suppressHydrationWarning>고객센터: 1588-0000</span>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex items-center justify-between text-xs">
          <p>© 2026 NAEKKO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
