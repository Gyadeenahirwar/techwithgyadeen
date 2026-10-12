import { NextResponse } from "next/server";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = subscribeSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          message: validated.error.issues[0]?.message || "Validation failed",
        },
        { status: 400 }
      );
    }

    // In a database-backed deployment, this inserts into NewsletterSubscriber model
    console.log(`[Newsletter] Subscribed: ${validated.data.email} (${validated.data.name || "Anonymous"})`);

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to TechWithGyadeen intelligence newsletter.",
      data: { email: validated.data.email },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while subscribing.",
      },
      { status: 500 }
    );
  }
}
