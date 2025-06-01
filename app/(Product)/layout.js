import Footer from "@/components/footer-group";
import Header from "@/components/header-group";

export default function ProductLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
