import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import Testimonial from "@/components/templates/Index/Testimonial";
import ReservationDetail from "@/components/templates/Index/reservation";

export default function Home({data}) {
  return (
    <>
    <Slider/>
    <About/>
    <Services services={data.services}/>
    <Offer/>
    <Menu/>
    <ReservationDetail/>
    <Testimonial/>
    </>
  );
}
export async function getStaticProps(){
  const res=await fetch('http://localhost:4000/services')
const services=await res.json()

  return{props:{data:{services}}}
}