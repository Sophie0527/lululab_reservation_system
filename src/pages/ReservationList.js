import React, { useState } from 'react';
import styled from 'styled-components';
import Reservation from './Reservation';
import logo from '../images/lululab_logo.png';

const ReservationList = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const openReservation = () => {
    setReservationOpen(true);
  };

  return (
    <Container>
      <ContainerBox>
        <header>
          <img src={logo} alt="logo" />
        </header>
        {/* 캘린더 날짜 클릭 시 예약 페이지 (Reservation) 모달로 구현 */}
        <CalendarBox>
          <button onClick={openReservation}>14일</button>
        </CalendarBox>

        {reservationOpen && (
          <Reservation setReservationOpen={setReservationOpen} />
        )}
      </ContainerBox>
    </Container>
  );
};

export default ReservationList;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const ContainerBox = styled.div`
  padding: 20px;
  margin-top: 50px;
  background-color: white;
  header {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
  h1 {
    display: flex;
    justify-content: center;
    padding-bottom: 2px;
  }
`;
const CalendarBox = styled.div`
  width: 350px;
  margin: 0;
`;
