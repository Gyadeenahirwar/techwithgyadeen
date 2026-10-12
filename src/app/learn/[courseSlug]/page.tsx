import React from "react";
import { notFound } from "next/navigation";
import { COURSES } from "@/lib/data";
import { LearnClient } from "@/components/learn/learn-client";

interface LearnPageProps {
  params: Promise<{ courseSlug: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    courseSlug: course.slug,
  }));
}

export default async function LearnPage({ params }: LearnPageProps) {
  const { courseSlug } = await params;
  const course = COURSES.find((c) => c.slug === courseSlug);

  if (!course) {
    notFound();
  }

  return <LearnClient course={course} />;
}
