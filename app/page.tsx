import { Header } from "@/app/_shared/ui/header";
import { Carousel } from "@/app/_shared/ui/carousel";
import prisma from "../lib/prisma";

export default async function Homepage() {
  const testimonials = await prisma.testimonial.findMany();

  return (
    <div>
      <Header title="Jack's Steps" />
      <Carousel title="Testimonials" slides={testimonials} />
    </div>
  );
}
