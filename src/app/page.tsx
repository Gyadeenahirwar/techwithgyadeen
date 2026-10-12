import React from "react";
import { Hero } from "@/components/home/hero";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { LatestUpdates } from "@/components/home/latest-updates";
import { LearningPaths } from "@/components/home/learning-paths";
import { WhyUs } from "@/components/home/why-us";
import { FreeResourcesSection } from "@/components/home/free-resources";
import { LatestArticles } from "@/components/home/latest-articles";
import { CommunitySection } from "@/components/home/community";
import { Newsletter } from "@/components/home/newsletter";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Featured Courses */}
      <FeaturedCourses />

      {/* 3. Latest Technology Updates */}
      <LatestUpdates />

      {/* 4. Popular Learning Paths */}
      <LearningPaths />

      {/* 5. Why TechWithGyadeen */}
      <WhyUs />

      {/* 6. Free Resources */}
      <FreeResourcesSection />

      {/* 7. Latest Technical Articles */}
      <LatestArticles />

      {/* 8. Developer Community */}
      <CommunitySection />

      {/* 9. Newsletter Subscription */}
      <Newsletter />

      {/* 10. Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}
