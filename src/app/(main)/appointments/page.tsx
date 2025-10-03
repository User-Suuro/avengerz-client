import type { Metadata } from "next";
import { getServerSession } from "@/server/utils/get-session";
import { unauthorized } from "next/navigation";

export const metadata: Metadata = {
  title: "Appointments | Avengerz",
};

export default async function Appointments() {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) unauthorized();

  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      appointments page
    </div>
  );
}
