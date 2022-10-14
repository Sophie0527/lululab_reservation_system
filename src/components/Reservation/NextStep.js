import React, { useState } from 'react';
import styled from 'styled-components';

const NextStep = props => {
  const { setReservationOpen } = props;

  const [reservationValue, setReservationValue] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const { name, phone, address } = reservationValue;

  const [reservationTypeList, setReservationTypeList] = useState([]);
  fetch('http://localhost:3000/datas/type.json', {
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => {
      setReservationTypeList(data);
    });

  const [selectType, setSelectType] = useState([false]);
  const handleSelectType = idx => {
    const newArr = Array(reservationTypeList.length).fill(false);
    if (!selectType[idx]) {
      newArr[idx] = true;
    }
    setSelectType(newArr);
  };

  const validation = (name, phone, address) => {
    if (
      name.length > 1 &&
      phone.length > 1 &&
      address.length > 1 &&
      selectType.includes(true)
    ) {
      return true;
    }
    return false;
  };
  const valid = validation(name, phone, address);

  const success = () => {
    alert('예약이 완료되었습니다.');
    setReservationOpen(false);
  };

  return (
    <Container>
      <ContainerBox>
        <ReservationBox>
          <Label>
            <h3>Name</h3>
            <input
              placeholder="ex. 홍길동"
              type="text"
              value={name}
              onChange={e => {
                setReservationValue({
                  ...reservationValue,
                  name: e.target.value,
                });
              }}
            />
          </Label>
          <Label>
            <h3>Phone Number</h3>
            <input
              placeholder="ex. 01012345678"
              type="nmuber"
              value={phone}
              onChange={e => {
                setReservationValue({
                  ...reservationValue,
                  phone: e.target.value,
                });
              }}
            />
          </Label>
          <Label>
            <h3>Address</h3>
            <input
              placeholder="ex. 서울특별시 강남구 테헤란로 427"
              type="nmuber"
              value={address}
              onChange={e => {
                setReservationValue({
                  ...reservationValue,
                  address: e.target.value,
                });
              }}
            />
          </Label>
          <Label>
            <h3>Reservation Type</h3>
            <div>
              {reservationTypeList.map((type, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => handleSelectType(i)}
                    className={selectType[i] && 'active'}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </Label>
        </ReservationBox>
        <ReservationButton
          className={valid && 'active'}
          disabled={!valid}
          onClick={success}
        >
          예약하기
        </ReservationButton>
      </ContainerBox>
    </Container>
  );
};

export default NextStep;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const ContainerBox = styled.div``;
const ReservationBox = styled.div`
  width: 350px;
  border: 1.5px solid #efefef;
  padding: 10px 20px;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  h3 {
    margin: 0 0 4px;
    font-size: 14px;
    color: black;
  }
  input {
    border: 1.5px solid #b3b3b3;
    padding: 10px 8px;
    border-radius: 4px;
    font-size: 13px;
  }
  div {
    padding: 0 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1.5px solid #b3b3b3;
    background-color: #efefef;
    padding: 10px 8px;
    border-radius: 4px;
    button {
      border: 1px solid #dadada;
      background-color: #f8f8f8;
      color: #b3b3b3;
      padding: 5px 15px;
      margin: 1.5px;
      cursor: pointer;
      font-weight: 500;
      font-size: 12px;
      border-radius: 2px;
      &.active {
        background-color: #efe1e7;
        color: black;
      }
    }
  }
`;
const ReservationButton = styled.button`
  margin-top: 15px;
  padding: 10px 0;
  width: 350px;
  border: none;
  background-color: #efefef;
  color: #8e8e8e;
  &.active {
    background-color: #da005c;
    color: white;
    cursor: pointer;
  }
`;