import Header from "@/components/Header";
import Introduction from "./components/Introduction";
import Skills from "@/components/home/Skills";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="mx-auto w-[95%] py-8">
      <Header />
      <main>
        <Introduction />
        <Skills />
        <Socials />
      </main>
    </div>
  );
}
