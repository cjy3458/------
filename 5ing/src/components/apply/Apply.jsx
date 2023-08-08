import React from "react";
import { styled } from "styled-components";
import CommunityNavBar from "../community/CommunityNavBar";
import ApplyBack from "./ApplyBack";

const Apply = () => {
  return (
    <>
      <CommunityNavBar />
      <Wrapper>
        <ApplyWrapper>
          <ProfileCircle>
            <ProfileImg src="/img/navprofile.png" />
          </ProfileCircle>
          <Text1>최재영</Text1>
          <Text2>멘토님에게 질문 보내기</Text2>
          <QuestionSection>안녕하세요!</QuestionSection>
          <Btn>오리챗 신청하기</Btn>
        </ApplyWrapper>
        <ApplyBack />
      </Wrapper>
    </>
  );
};

export default Apply;

const Btn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5%;
  min-width: 60%;
  min-height: 54px;
  bottom: 0;
  margin-bottom: 1.5%;
  background-color: #ffd5d5;
  z-index: 2;
  border-radius: 30px;
  background: linear-gradient(180deg, #89cdf6 0%, #c5e9ff 100%);
  color: white;
  font-size: 2.3rem;
  font-weight: 700;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Text2 = styled.div`
  font-size: 18px;
`;

const Text1 = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ProfileCircle = styled.div`
  height: 15%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 3px solid #89cdf6;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90.3vh;
`;

const ApplyWrapper = styled.div`
  width: 33%;
  height: 490px;
  border: 3px solid #89cdf6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  z-index: 1;
  position: absolute;
  background-color: white;
`;

const QuestionSection = styled.div`
  width: 80%;
  height: 30%;
  border: 3px solid var(--m-skyblue, #89cdf6);
  border-radius: 30px;
  padding: 20px;
  background-color: white;
`;
