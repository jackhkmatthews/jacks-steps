import { Header } from "./header";
import { Carousel } from "@/app/_shared/ui/carousel";
import prisma from "../lib/prisma";
import Image from "next/image";

export default async function Homepage() {
  const testimonials = await prisma.testimonial.findMany();

  return (
    <div className="flex flex-col items-center gap-6">
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
