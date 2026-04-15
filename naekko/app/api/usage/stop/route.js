import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Update the latest active session for this user
  const { data, error } = await supabase
    .from('usage_sessions')
    .update({ ended_at: new Date().toISOString() })
    .match({ user_id: user.id })
    .is('ended_at', null)
    .order('started_at', { ascending: false })
    .limit(1)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ session: data });
}
