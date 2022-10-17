import React, { useEffect, useState } from 'react';
import Calendar from '../components/ReservationList/Calendar';
import Reservation from '../components/ReservationList/Reservation';
import { getListApi } from '../api/api';
import styled from 'styled-components';
import '../components/ReservationList/Calendar';

const ReservationList = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectDay, setSelectDay] = useState(null);
  const [oderDay, setOrderDay] = useState(null);
  const [newList, setNewList] = useState({});
  const [result, setResult] = useState([]);
  const newArr = [];

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
  const fetchData = () => {
    getListApi()
      .then(res => setNewList(Object.keys(res.data)))
      .catch(e => {});
    check();
    remove();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
