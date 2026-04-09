import { Clock, Shield, Car, Thermometer, Wifi, Key } from 'lucide-react';

const facilities = [
  { icon: Clock, label: '24시간 이용' },
  { icon: Shield, label: 'CCTV 보안' },
  { icon: Car, label: '주차 가능' },
  { icon: Thermometer, label: '항온항습' },
  { icon: Wifi, label: '무선 인터넷' },
  { icon: Key, label: '개별 도어락' },
];

export default function FacilityIcons() {
  return (
    <section className="bg-surface-low py-24 border-y border-zinc-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-20 text-center text-[#1D1D1F] tracking-tight">제공 시설 및 서비스</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-16 gap-x-8">
          {facilities.map((item, index) => (
            <div key={`facility-${item.label}-${index}`} className="flex flex-col items-center gap-6 transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 rounded-[2rem] bg-white shadow-sm flex items-center justify-center border border-black/5 group-hover:shadow-xl transition-shadow">
                <item.icon className="w-10 h-10 text-brand-blue stroke-[1.5]" />
              </div>
              <span className="text-base font-bold text-[#1D1D1F]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
