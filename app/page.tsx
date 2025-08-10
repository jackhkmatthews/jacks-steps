import { Header } from "@/app/_shared/ui/header";
import { Carousel } from "@/app/_shared/ui/carousel";
import prisma from "../lib/prisma";
import Image from "next/image";

export default async function Homepage() {
  const testimonials = await prisma.testimonial.findMany();

  return (
    <div>
      <Header title="Jack's Steps" />
      <Image
        src="/steps.jpeg"
        alt="Steps"
        width={1842}
        height={1842}
        className="max-w-xl w-full"
      />
      <Carousel title="Testimonials" slides={testimonials} />
    </div>
  );
}
