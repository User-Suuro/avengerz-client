import Navbar from "../_components/nav/navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
