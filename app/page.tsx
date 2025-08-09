import { Header } from "./header";
import { Carousel } from "./carousel";
import prisma from "../lib/prisma";

export default async function Homepage() {
  const testimonials = await prisma.testimonial.findMany();

  return (
    <div style={{ backgroundColor: "pink", padding: "0 1em 1em" }}>
      <Header title="Jack's Steps" />
      <Carousel title="Testimonials" slides={testimonials} />
    </div>
  );
}
