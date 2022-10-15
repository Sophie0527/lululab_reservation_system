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
      <ContainerBox>
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
const ContainerBox = styled.div``;
const CalendarBox = styled.div``;
