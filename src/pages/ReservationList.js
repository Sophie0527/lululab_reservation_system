import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from '../components/ReservationList/Calendar';
import '../components/ReservationList/Calendar';
import Reservation from '../components/ReservationList/Reservation';

const ReservationList = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectDay, setSelectDay] = useState(null);
  const [oderDay, setOrderDay] = useState(null);

  const openReservation = () => {
    setReservationOpen(prev => !prev);
  };

  return (
    <Container>
      <ContainerBox>
        <CalendarBox>
          <Calendar
            openReservation={openReservation}
            setSelectDay={setSelectDay}
            setOrderDay={setOrderDay}
          />
        </CalendarBox>
        {reservationOpen && (
          <Reservation
            setReservationOpen={setReservationOpen}
            selectDay={selectDay}
            oderDay={oderDay}
          />
        )}
      </ContainerBox>
    </Container>
  );
};

export default ReservationList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const ContainerBox = styled.div`
  width: 100%;
`;
const CalendarBox = styled.div``;
