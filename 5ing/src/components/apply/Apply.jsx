import React from "react";

const Apply = () => {
  return (
    <Wrapper>
      <QuestionSection>안녕하세요!</QuestionSection>
    </Wrapper>
  );
};

export default Apply;

const Wrapper = styled.div`
  width: 550px;
  height: 780px;
  border: 3px solid #89cdf6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 30px;
`;

const QuestionSection = styled.div`
  width: 80%;
  height: 40%;
  border: 3px solid var(--m-skyblue, #89cdf6);
  border-radius: 30px;
  padding: 20px;
`;
