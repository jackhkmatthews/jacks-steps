import { Carousel } from "@/app/_shared/ui/carousel";
import prisma from "@/app/_lib/prisma";
import Image from "next/image";
import { cookies } from "next/headers";
import {
  decryptTestimonialLikeSession,
  testimonialLikeCookieName,
} from "@/app/_lib/testimonial-like-session";

export default async function Homepage() {
  const cookie = (await cookies()).get(testimonialLikeCookieName)?.value || "";
  const session = decryptTestimonialLikeSession(cookie);
  const testimonials = await prisma.testimonial.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div className="flex flex-col items-center gap-6">
      <Image
        src="/steps.jpeg"
        alt="Steps"
        width={1842}
        height={1842}
        className="max-w-xl w-full"
      />
      <Carousel
        title="Testimonials"
        slides={testimonials}
        likedTestimonialIds={session}
      />
    </div>
  );
}
