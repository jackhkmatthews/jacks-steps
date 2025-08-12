"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./prisma";
import { CreateInvoice, EditInvoice } from "./validators";
import {
  addToTestimonialLikeSession,
  decryptTestimonialLikeSession,
  removeFromTestimonialLikeSession,
  testimonialLikeCookieName,
} from "./testimonial-like-session";
import { cookies } from "next/headers";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export type State = {
  errors?: {
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateInvoice.safeParse({
    amount: Number(formData.get("amount")),
    status: formData.get("status"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Edit Invoice.",
    };
  }

  // Prepare data for insertion into the database
  const { amount, status } = validatedFields.data;
  const date = new Date().toISOString();

  // Insert data into the database
  try {
    await prisma.invoice.create({
      data: {
        date,
        status,
        amount,
      },
    });
  } catch (error) {
    console.error(error);
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/admin/invoices");
  redirect("/admin/invoices");
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData
) {
  // Validate form fields using Zod
  const validatedFields = EditInvoice.safeParse({
    amount: Number(formData.get("amount")),
    status: formData.get("status"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  // Prepare data for insertion into the database
  const { amount, status } = validatedFields.data;

  // Insert data into the database
  try {
    await prisma.invoice.update({
      where: {
        id: Number(id),
      },
      data: {
        status,
        amount,
      },
    });
  } catch (error) {
    console.error(error);
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to edit Invoice.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/admin/invoices");
  revalidatePath(`/admin/invoices/${id}`);
  redirect(`/admin/invoices/${id}`);
}

export async function deleteInvoice(id: string) {
  // Insert data into the database
  try {
    await prisma.invoice.delete({
      where: {
        id: Number(id),
      },
    });
  } catch (error) {
    console.error(error);
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to delete Invoice.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/admin/invoices");
  redirect(`/admin/invoices`);
}

export async function addLike(testimonialId: number) {
  // Insert data into the database
  try {
    await prisma.testimonial.update({
      where: {
        id: Number(testimonialId),
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.error(error);
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to add like.",
    };
  }

  // Set stateless record of liked testimonials
  await addToTestimonialLikeSession([testimonialId]);

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/");
}

export async function toggleLike(testimonialId: number) {
  const session = (await cookies()).get(testimonialLikeCookieName)?.value || "";
  const payload = decryptTestimonialLikeSession(session);
  const liked = payload.includes(testimonialId);

  // Insert data into the database
  try {
    await prisma.testimonial.update({
      where: {
        id: Number(testimonialId),
      },
      data: {
        likes: {
          increment: liked ? -1 : 1,
        },
      },
    });
  } catch (error) {
    console.error(error);
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to add like.",
    };
  }

  // Set stateless record of liked testimonials
  await (liked
    ? removeFromTestimonialLikeSession([testimonialId])
    : addToTestimonialLikeSession([testimonialId]));

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
