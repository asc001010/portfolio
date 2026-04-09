import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (!profile || !profile.is_admin) {
    redirect("/"); // Not authorized
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-600">청소 예약 및 접수 관리가 이곳에 추가될 예정입니다.</p>
    </div>
  );
}