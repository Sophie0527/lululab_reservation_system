import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from '../components/ReservationList/Calendar';
import '../components/ReservationList/Calendar';
import Reservation from '../components/ReservationList/Reservation';
import axios from 'axios';

const ReservationList = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectDay, setSelectDay] = useState(null);
  const [oderDay, setOrderDay] = useState(null);
  const [newList, setNewList] = useState({});
  const [result, setResult] = useState([]);
  const newArr = [];
  const nwww = [];

  const openReservation = () => {
    setReservationOpen(prev => !prev);
  };

  const check = () => {
    for (let i = 0; i < newList.length; i++) {
      newList[i].includes(oderDay) &&
        newArr.push(Number(newList[i].substr(-2)));
    }

    return newArr;
  };

  const remove = () => {
    const TIMELISTDATA = [
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
    ];
    for (let i = 0; i < newArr.length; i++) {
      TIMELISTDATA.splice(newArr[i], 1, '마감');
    }
    return setResult(TIMELISTDATA);
  };

  useEffect(() => {
    axios
      .get(
        'https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order_list.json'
      )
      .then(res => setNewList(Object.keys(res.data)));
    check();
    remove();
  }, [selectDay]);

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
            TIMELISTDATA={result}
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
