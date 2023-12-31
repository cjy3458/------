import React from "react";
import { styled } from "styled-components";
import LandingNavBar from "../components/landing/header/LandingNavBar";
import MainSection from "../components/landing/main/MainSection";
import IntroduceSection from "../components/landing/introduction/IntroduceSection";
import ReviewSection from "../components/landing/review/ReviewSection";
import CTABtn from "../components/landing/CTABtn";
import ScrollBar from "../components/landing/ScrollBar";

// 랜딩 페이지
const LandingPage = () => {
  return (
    <>
      <ScrollBar />
      <LandingNavBar />
      <SectionWrapper>
        <MainSection />
        <IntroduceSection />
        <ReviewSection />
        <CTABtn />
      </SectionWrapper>
    </>
  );
};

export default LandingPage;

const SectionWrapper = styled.div`
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
