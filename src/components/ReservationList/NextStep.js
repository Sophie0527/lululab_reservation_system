import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import axios from 'axios';
import { getBlackListApi } from '../../api/api';
const NextStep = ({
  setReservationOpen,
  setNextStepOpen,
  closeModal,
  selectDay,
  timeNumber,
  time,
  oderDay,
}) => {
  const goPreviousStep = () => {
    setNextStepOpen(false);
  };

  const [reservationValue, setReservationValue] = useState({
    order_number: `${oderDay}_${timeNumber}`,
    time: time,
    day: selectDay,
    name: '',
    phone: '',
    address: '',
    type: '',
  });

  const { name, phone, address } = reservationValue;
  const [selectType, setSelectType] = useState([false]);
  const selectTypeIndex = selectType.indexOf(true);
  const selectTypeValue = TYPELISTDATA[selectTypeIndex];
  const [blackList, setBlackList] = useState([]);
  const handleSelectType = idx => {
    const newArr = Array(TYPELISTDATA.length).fill(false);
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
    alert(
      `${name}님 ${selectDay} ${time}에 ${selectTypeValue} 예약이 완료 되었습니다. 예약번호 :${oderDay}_${timeNumber}를 꼭 확인해 주세요  `
    );
    setReservationOpen(false);
    window.location.reload();
  };

  const blackAlert = () => {
    alert(`${name}님은 병원 사정으로 방문 예약만 가능 하십니다.`);
    window.location.reload();
  };

  const goOrder = () => {
    axios
      .put(
        `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${oderDay}_${timeNumber}.json`,
        { ...reservationValue }
      )
      .then(
        axios.put(
          `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order_list/${oderDay}_${timeNumber}.json`,
          { order: `${oderDay}_${timeNumber}` }
        )
      )
      .then(success());
  };

  const fetchData = () => {
    getBlackListApi().then(res => {
      setBlackList(Object.keys(res.data));
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ContainerBox>
        <MoveButtonBox>
          <ArrowLeftOutlined onClick={goPreviousStep} />
          <CloseOutlined onClick={closeModal} />
        </MoveButtonBox>
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
              {TYPELISTDATA.map((type, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => {
                      handleSelectType(i);
                      setReservationValue({
                        ...reservationValue,
                        type: type,
                      });
                    }}
                    className={selectType[i] && 'active'}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </Label>
        </ReservationBox>
        {blackList.indexOf(phone) !== -1 ? (
          <ReservationButton
            className={valid && 'active'}
            disabled={!valid}
            onClick={() => {
              blackAlert();
            }}
          >
            예약하기
          </ReservationButton>
        ) : (
          <ReservationButton
            className={valid && 'active'}
            disabled={!valid}
            onClick={() => {
              goOrder();
            }}
          >
            예약하기
          </ReservationButton>
        )}
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
const MoveButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2px;
  svg {
    cursor: pointer;
  }
`;
const ReservationBox = styled.div`
  min-width: 350px;
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
    line-height: 20px;
    color: black;
    font-weight: 700;
  }
  input {
    border: 1.5px solid #b3b3b3;
    padding: 10px 8px;
    border-radius: 4px;
    font-size: 13px;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1.5px solid #b3b3b3;
    background-color: #efefef;
    padding: 10px 12px;
    border-radius: 4px;
    button {
      border: 1px solid #dadada;
      background-color: #f8f8f8;
      color: #b3b3b3;
      padding: 10px 20px;
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
  padding: 20px 5px;
  width: 100%;
  min-width: 350px;
  border: none;
  background-color: #efefef;
  color: #8e8e8e;
  &.active {
    background-color: #da005c;
    color: white;
    cursor: pointer;
  }
`;

const TYPELISTDATA = ['진료', '검진', '관리', '처방'];
