import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayoutServer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer border={true} />
    </>
  );
} 