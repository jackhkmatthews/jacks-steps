-- CreateTable
CREATE TABLE "public"."Testimonial" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);
