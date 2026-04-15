"use client";

import { Star, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  { id: 1, branch: 'kyodae', author: '김*민', rating: 5, date: '2026.03.15', content: '항온항습이 잘 되어서 옷 보관하기 너무 좋습니다. 교대역이랑 가까워서 접근성도 최고네요.' },
  { id: 2, branch: 'kyodae', author: '이*현', rating: 5, date: '2026.02.28', content: '무인이라 언제든 방문할 수 있다는 점이 가장 큰 장점입니다. 시설도 엄청 깔끔해요.' },
  { id: 3, branch: 'samsung', author: '박*준', rating: 5, date: '2026.04.01', content: '원룸에 안 들어가는 계절 짐들을 다 맡겼습니다. 삼성중앙역 픽업도 편하고 전반적으로 대만족!' },
  { id: 4, branch: 'samsung', author: '최*영', rating: 4, date: '2026.03.20', content: '주차장 완비되어 있어서 무거운 짐 옮길 때 편했습니다. L사이즈 생각보다 훨씬 큽니다.' },
];

export default function ReviewSection() {
  const [filter, setFilter] = useState('all');

  const filteredReviews = filter === 'all' ? reviews : reviews.filter(r => r.branch === filter);

  return (
    <section id="reviews" className="py-24 bg-surface-low border-t border-zinc-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-brand-blue" />
              오직 내꼬에서만, 생생한 이용 후기
            </h2>
            <p className="text-zinc-500">실제 프리미엄 창고 '내꼬'를 이용 중인 고객분들의 후기입니다.</p>
          </div>

          <div className="flex bg-white p-1.5 rounded-xl shadow-sm border border-zinc-200 w-fit">
            <button onClick={() => setFilter('all')} className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${filter === 'all' ? 'bg-[#1D1D1F] text-white' : 'text-zinc-500 hover:bg-zinc-50'}`}>전체</button>
            <button onClick={() => setFilter('kyodae')} className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${filter === 'kyodae' ? 'bg-[#1D1D1F] text-white' : 'text-zinc-500 hover:bg-zinc-50'}`}>교대점</button>
            <button onClick={() => setFilter('samsung')} className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${filter === 'samsung' ? 'bg-[#1D1D1F] text-white' : 'text-zinc-500 hover:bg-zinc-50'}`}>삼성중앙점</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div key={`review-card-${review.id}`} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(review.rating)].map((_, i) => <Star key={`star-${review.id}-${i}`} className="w-4 h-4 fill-current" />)}
                  </div>
                  <h4 className="font-bold text-[#1D1D1F]">{review.author} 고객님</h4>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-zinc-100 text-zinc-500 rounded-full">
                  {review.branch === 'kyodae' ? '교대점' : '삼성중앙점'}
                </span>
              </div>
              <p className="text-zinc-600 leading-relaxed">"{review.content}"</p>
              <div className="mt-6 text-xs text-zinc-400 font-medium">
                작성일: {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
