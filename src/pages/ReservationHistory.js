import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchBar from '../components/ReservationHistory/SearchBar';
import ReservationHistoryInfo from '../components/ReservationHistory/ReservationHistoryInfo';

const ReservationHistory = () => {
  const [reservationInfoList, setReservationInfoList] = useState([]);
  const [orderUrl, setOrderUrl] = useState('');
  const [showData, setShowData] = useState(false);

  const showUserInfo = () => {
    if (orderUrl.length < 1) {
      setShowData(false);
      setOrderUrl('');
    } else if (orderUrl.length > 0) {
      setOrderUrl(orderUrl);
      setShowData(true);
    }
  };

  const handleOnClick = () => {
    axios
      .get(
        `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${orderUrl}.json`
      )
      .then(res => setReservationInfoList(res.data))
      .then(showUserInfo());
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick();
    }
  };

  return (
    <Container>
      <ContainerBox>
        <SearchBar
          orderUrl={orderUrl}
          setOrderUrl={setOrderUrl}
          handleOnKeyPress={handleOnKeyPress}
          handleOnClick={handleOnClick}
        />
        <ReservationHistoryInfo
          reservationInfoList={reservationInfoList}
          showData={showData}
          orderUrl={orderUrl}
        />
      </ContainerBox>
    </Container>
  );
};

export default ReservationHistory;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const ContainerBox = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 3px 2px #dadada;
  @media (max-width: 530px) {
    width: 250px;
    padding: 0px;
  }
`;
