import "server-only";
import { cookies } from "next/headers";

export const testimonialLikeCookieName = "testimonial-like-session";

export function encryptTestimonialLikeSession(testimonialIds: number[]) {
  return testimonialIds.join("x");
}

export function decryptTestimonialLikeSession(testimonialLikeSession: string) {
  return testimonialLikeSession.length > 0
    ? testimonialLikeSession.split("x").map(Number)
    : [];
}

export async function createTestimonialLikeSession(testimonialIds: number[]) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // week
  const session = encryptTestimonialLikeSession(testimonialIds);
  const cookieStore = await cookies();

  cookieStore.set(testimonialLikeCookieName, session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function addToTestimonialLikeSession(testimonialIds: number[]) {
  const session = (await cookies()).get(testimonialLikeCookieName)?.value || "";
  const payload = decryptTestimonialLikeSession(session);

  const updatedPayload = Array.from(new Set([...payload, ...testimonialIds]));
  const updatedSession = encryptTestimonialLikeSession(updatedPayload);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // week

  const cookieStore = await cookies();

  cookieStore.set(testimonialLikeCookieName, updatedSession, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function removeFromTestimonialLikeSession(
  testimonialIds: number[]
) {
  const session = (await cookies()).get(testimonialLikeCookieName)?.value || "";
  const payload = decryptTestimonialLikeSession(session);

  const updatedPayload = payload.filter((id) => !testimonialIds.includes(id));
  const updatedSession = encryptTestimonialLikeSession(updatedPayload);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // week

  const cookieStore = await cookies();

  cookieStore.set(testimonialLikeCookieName, updatedSession, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
