import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import Testimonial from "@/components/templates/Index/Testimonial";
import ReservationDetail from "@/components/templates/Index/reservation";
import axios from "axios";

export default function Home({ data }) {
  console.log("services",data.services)
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu menu={data.menu} />
      <ReservationDetail />
      <Testimonial data={data.testimonial}/>
    </>
  );
}
export async function getStaticProps() {
  const response = await axios.get("http://localhost:4000/services")
 
  const services = response.data
  const res2 = await fetch("http://localhost:4000/menu");
  const menu = await res2.json();
  const res3 = await fetch("http://localhost:4000/comments");
  const testimonial = await res3.json();
  return { props: { data: { services, menu,testimonial } } };
}
