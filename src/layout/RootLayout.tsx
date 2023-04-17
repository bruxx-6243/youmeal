import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
