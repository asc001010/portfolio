"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "이메일과 비밀번호를 모두 입력해주세요." };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login Error:", error.message);
    if (error.message === "Email not confirmed") {
      return { error: "이메일 인증이 필요한 계정입니다. 가입 시 입력한 이메일에서 인증 링크를 클릭해주세요! (최근에 인증을 끄셨다면 새 이메일로 가입해보세요.)" };
    }
    return { error: "이메일 또는 비밀번호가 올바르지 않습니다. (" + error.message + ")" };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name") || "";

  if (!email || !password) {
    return { error: "이메일과 비밀번호를 모두 입력해주세요." };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: name,
      },
    },
  });

  if (error) {
    console.error("Signup Error:", error.message);
    if (error.status === 422 || error.message.includes("already registered")) {
        return { error: "이미 가입되어 있는 이메일입니다." };
    }
    return { error: "회원가입 처리 중 오류가 발생했습니다. (" + error.message + ")" };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  
  revalidatePath("/", "layout");
  redirect("/");
}
