import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import Testimonial from "@/components/templates/Index/Testimonial";
import ReservationDetail from "@/components/templates/Index/reservation";

export default function Home() {
  return (
    <>
    <Slider/>
    <About/>
    <Services/>
    <Offer/>
    <Menu/>
    <ReservationDetail/>
    <Testimonial/>
    </>
  );
}
