'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/mygo/supabase/server'

export async function login(formData) {
  const supabase = await createClient()

  const email = formData.get('email')
  const password = formData.get('password')

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/mygo', 'layout')
  return { success: true, redirectTo: '/mygo/profile' }
}

export async function signup(formData) {
  const supabase = await createClient()

  const email = formData.get('email')
  const password = formData.get('password')

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/mygo', 'layout')
  return { success: true, redirectTo: '/mygo/profile', message: '이메일 확인을 위해 메일함을 확인해 주세요.' }
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  
  revalidatePath('/mygo', 'layout')
  return { success: true, redirectTo: '/mygo' }
}

export async function signInWithSocial(provider) {
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/mygo/auth/callback`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true, url: data.url }
}
