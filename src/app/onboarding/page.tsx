'use client';

import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import OnboardingCard from '@/components/onboarding/OnboardingCard';
import { ONBOARDING_CONTENTS } from '@/constants/onboarding';

const TOTAL_STEPS = 3;

function OnboardingLogic() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentStep = Number(searchParams.get('step')) || 1;

  /** 다음 단계 이동 */
  const next = () => {
    if (currentStep < TOTAL_STEPS) {
      router.push(`/onboarding?step=${currentStep + 1}`);
    } else {
      complete();
    }
  };

  /** 이전 단계 이동 */
  const back = () => {
    if (currentStep > 1) {
      router.push(`/onboarding?step=${currentStep - 1}`);
      // router.back() 써도 됨
    }
  };

  /** 온보딩 스킵 */
  const skip = () => {
    router.push('/login');
  };

  /** 온보딩 완료 */
  const complete = () => {
    router.push('/login');
  };

  /** render 부분은 네가 퍼블리싱 넣으면 됨 */
  return (
    <>
      {currentStep === 1 && <Step1 next={next} skip={skip} />}
      {currentStep === 2 && <Step2 next={next} back={back} skip={skip} />}
      {currentStep === 3 && <Step3 complete={complete} back={back} />}
    </>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={null}>
      <OnboardingLogic />
    </Suspense>
  );
}

/* --- Step 컴포넌트는 네가 퍼블리싱해서 넣으면 됨 --- */

function Step1({ next, skip }: { next: () => void; skip: () => void }) {
  return <OnboardingCard next={next} skip={skip} content={ONBOARDING_CONTENTS.step1} />;
}

function Step2({ next, back, skip }: { next: () => void; back: () => void; skip: () => void }) {
  return <OnboardingCard next={next} back={back} skip={skip} content={ONBOARDING_CONTENTS.step2} />;
}

function Step3({ complete, back }: { complete: () => void; back: () => void }) {
  return <OnboardingCard complete={complete} back={back} content={ONBOARDING_CONTENTS.step3} />;
}
