import { createClient } from '@/lib/supabase/server';

/**
 * 결제 예정일이 7일 남은 유저 리스트를 추출합니다.
 */
export async function getUpcomingPayments() {
  const supabase = await createClient();
  
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  
  // Format to YYYY-MM-DD for comparison
  const dateString = targetDate.toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('subscriptions')
    .select(`
      *,
      profiles (
        phone_number,
        full_name
      )
    `)
    .eq('next_payment_date', dateString)
    .eq('status', 'active');

  if (error) {
    console.error('Error fetching upcoming payments:', error);
    return [];
  }

  return data;
}

/**
 * 카카오 알림톡 발송 시뮬레이션
 */
export async function sendKakaoReminder(paymentInfo) {
  console.log(`[알림톡 발송] ${paymentInfo.profiles.full_name}님, 7일 후 정기 결제가 예정되어 있습니다.`);
  // 실제 API 연동 시 fetch(KAKAO_API_URL, ...)
  return { success: true };
}
