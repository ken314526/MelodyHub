"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import musicSchoolData from "@/data/school.json";

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolData.schoolContent} />
    </div>
  );
}

export default WhyChooseUs;
