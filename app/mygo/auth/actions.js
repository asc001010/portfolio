'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
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
    return redirect(`/mygo?error=${encodeURIComponent(error.message)}`)
  }

  revalidatePath('/mygo', 'layout')
  redirect('/mygo/profile')
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
    return redirect(`/mygo?error=${encodeURIComponent(error.message)}`)
  }

  revalidatePath('/mygo', 'layout')
  redirect('/mygo/profile')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  
  revalidatePath('/mygo', 'layout')
  redirect('/mygo')
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
    console.error('Social login error:', error)
    return
  }

  if (data.url) {
    redirect(data.url)
  }
}
