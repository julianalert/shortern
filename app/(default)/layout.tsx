import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import AOSInitializer from "./aos-initializer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInitializer />
      <Header />
      <main className="grow">{children}</main>
      <Footer border={true} />
    </>
  );
}
