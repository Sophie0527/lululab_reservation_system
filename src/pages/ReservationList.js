import React, { useState } from 'react';
import styled from 'styled-components';
import Reservation from './Reservation';

const ReservationList = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const openReservation = () => {
    setReservationOpen(true);
  };

  return (
    <Container>
      Reservation List
      {/* 캘린더 날짜 클릭 시 예약 페이지 (Reservation) 모달로 구현 */}
      <button onClick={openReservation}>14일</button>
      {reservationOpen && (
        <Reservation setReservationOpen={setReservationOpen} />
      )}
    </Container>
  );
};

export default ReservationList;

const Container = styled.div``;
