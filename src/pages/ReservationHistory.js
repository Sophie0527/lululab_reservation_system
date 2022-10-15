import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

const ReservationHistory = () => {
  const [reservationNumberValue, setReservationNumberValue] = useState('');
  const ChangedInputNumber = e => {
    setReservationNumberValue(e.target.value);
  };

  const [reservationInfoList, setReservationInfoList] = useState([]);
  const [reservationNum, setReservationNum] = useState('');
  const [showData, setShowData] = useState(false);
  const [typeData, setTypeData] = useState();

  const handleOnClick = () => {
    axios
      .get(
        `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${reservationNum}.json`
      )
      .then(res => setReservationInfoList(res.data));
    if (reservationNumberValue.length > 0) {
      setReservationNum(reservationNumberValue);
      setShowData(true);
    } else {
      setReservationNum('');
      setShowData(false);
    }
    const typeNum = reservationInfoList.type;
    if (typeNum === 1) {
      setTypeData('진료');
    } else if (typeNum === 2) {
      setTypeData('검진');
    } else if (typeNum === 3) {
      setTypeData('관리');
    } else if (typeNum === 4) {
      setTypeData('처방');
    }
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick();
    }
  };

  const deleteOnClick = () => {
    axios
      .delete(
        `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${reservationNum}.json`
      )
      .then(alert('예약이 취소되었습니다.'));
  };

  return (
    <Container>
      <ContainerBox>
        <SearchContainer>
          <h2>예약조회</h2>
          <SearchBox>
            <input
              placeholder="예약 번호를 입력해주세요."
              type="text"
              value={reservationNumberValue}
              onChange={ChangedInputNumber}
              onKeyPress={handleOnKeyPress}
            />
            <SearchOutlined
              type="button"
              value="search"
              onClick={handleOnClick}
            />
          </SearchBox>
        </SearchContainer>
        <ContentBox>
          {reservationInfoList === null && showData && (
            <InfoHeader>
              <h5>예약을 조회할 수 없습니다.</h5>
            </InfoHeader>
          )}
          {reservationInfoList !== null && showData && (
            <>
              <InfoHeader>
                <h5>No. {reservationInfoList.order_number}</h5>
              </InfoHeader>
              <InfoContent>
                <div>
                  <h5>예약자</h5>
                  <span>{reservationInfoList.name}</span>
                </div>
                <div>
                  <h5>전화번호</h5>
                  <span>{reservationInfoList.phone}</span>
                </div>
                <div>
                  <h5>주소</h5>
                  <span>{reservationInfoList.address}</span>
                </div>
              </InfoContent>
              <InfoContent>
                <div>
                  <h5>예약일시</h5>
                  <span>
                    {reservationInfoList.day} &nbsp;
                    {reservationInfoList.time}
                  </span>
                </div>
                <div>
                  <h5>예약종류</h5>
                  <span>{typeData}</span>
                </div>
              </InfoContent>
              <InfoFooter>
                <button onClick={deleteOnClick}>예약취소</button>
              </InfoFooter>
            </>
          )}
        </ContentBox>
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
`;
const SearchContainer = styled.div`
  background-color: #da005c;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: center;
  padding-bottom: 10px;
  h2 {
    padding: 10px;
    color: white;
    font-size: 15px;
    font-weight: 500;
  }
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0 10px;
  padding: 10px 50px;
  border-radius: 5px;
  svg {
    color: #3a3a3a;
    cursor: pointer;
  }
  input {
    border: none;
    font-size: 15px;
    padding-left: 10px;
    ::placeholder {
      font-size: 13px;
      padding: 5px;
    }
    :focus {
      outline: none;
    }
  }
`;
const ContentBox = styled.div`
  padding: 15px;
  color: #2b2b2b;
  border: 1.5px solid #efefef;
  background-color: #f8f8f8;
  min-height: 250px;
`;
const InfoHeader = styled.div`
  border-bottom: 1.5px solid #ededed;
  padding: 10px 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  h5 {
    font-size: 13px;
  }
`;
const InfoContent = styled.div`
  border-bottom: 1.5px solid #ededed;
  padding-bottom: 10px;
  margin-bottom: 10px;
  div {
    display: flex;
    padding: 4px 0;
    h5 {
      font-size: 13px;
      width: 60px;
    }
    span {
      font-size: 13px;
      font-weight: 700;
    }
  }
`;
const InfoFooter = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  button {
    border: none;
    background-color: #dadada;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 12px;
    cursor: pointer;
  }
`;
