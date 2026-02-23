import Footer from "./components/Footer/footer";
import SecuritySection from "./components/Home/SecuritySection";
import StatsSection from "./components/Home/StatsSection";
import Testimonial from "./components/Home/Testimonial";
import WorkflowAnimation from "./components/Home/Workflow";

export default function Home() {
  return (
    <main className="">
      <h1 className="harvey text-7xl font-normal -tracking-[0.9px] text-balance">
        Practice MAde Perfect
      </h1>

      <WorkflowAnimation />
      <Testimonial />
      <StatsSection />
      <SecuritySection />
      <Footer />
    </main>
  );
}
