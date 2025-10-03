import { getServerSession } from "@/server/utils/get-session";
import type { Metadata } from "next";
import { unauthorized } from "next/navigation";

export const metadata: Metadata = {
  title: "Reviews | Avengerz",
};

export default async function Reviews() {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) unauthorized();

  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      reviews page
    </div>
  );
}
