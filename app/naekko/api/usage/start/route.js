import { createClient } from '@/lib/naekko/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { lockerId } = await request.json();

  // Create a new session
  const { data, error } = await supabase
    .from('usage_sessions')
    .insert([
      { 
        user_id: user.id, 
        locker_id: lockerId || 'L-001', // Default ID for testing
        started_at: new Date().toISOString() 
      }
    ])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ session: data });
}
