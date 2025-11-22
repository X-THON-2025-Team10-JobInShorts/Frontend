'use client';

import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const onDismiss = () => {
    router.back(); // 뒤로가기를 하면 모달이 꺼지고 원래 페이지 url로 돌아감
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* 배경 클릭 시 닫기 */}
      <div className="absolute inset-0" onClick={onDismiss} />

      {/* 모달 컨텐츠 */}
      <div className="relative z-10 w-full max-w-md h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 z-50 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
