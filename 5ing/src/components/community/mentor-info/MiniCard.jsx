import React from 'react'
import { styled } from 'styled-components';

const MiniCard = () => {
  return (
    <Card>
    <TopWrapper><ThumbnailImg src="/img/postimg.png" /></TopWrapper>
    <BottomWrapper>
      <Row>
        <Text1>(제목) 중국 퀸카카카카~</Text1>
      </Row>
    </BottomWrapper>
  </Card>
  )
}

export default MiniCard;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 180px;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2%;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px 30px 0px 0px;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8%;
  border-radius: 30px 30px 0px 0px;
  background-color: #d6f0ff;
`;

const BottomWrapper = styled.div`
  width: 85%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 5%;
  padding: 6% 2% 6% 2%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Text1 = styled.div`
  font-size: 17px;
  font-weight: 500;
`;
