import React, { useState, useEffect } from 'react';
import { DownOutlined, UpOutlined, CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import NextStep from '../components/Reservation/NextStep';

const Reservation = props => {
  const { setReservationOpen } = props;

  const closeModal = () => {
    setReservationOpen(false);
  };

  const [selectTimeOpen, setSelectTimeOpen] = useState(false);
  const openTimeButton = () => {
    if (!selectTimeOpen) {
      setSelectTimeOpen(true);
    } else {
      setSelectTimeOpen(false);
    }
  };

  const [timeList, setTimeList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/datas/time.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setTimeList(data);
      });
  }, [setTimeList]);

  const [selectTime, setSelectTime] = useState([false]);
  const handleSelectTime = idx => {
    const newArr = Array(timeList.length).fill(false);
    if (!selectTime[idx]) {
      newArr[idx] = true;
    }
    setSelectTime(newArr);
  };
  const selectIndex = selectTime.indexOf(true);
  const selectValue = timeList[selectIndex];

  const validation = () => {
    if (selectTime.includes(true)) {
      return true;
    }
    return false;
  };
  const valid = validation();

  const [nextStepOpen, setNextStepOpen] = useState(false);

  const openNextStep = () => {
    setNextStepOpen(true);
  };

  return (
    <Container>
      <ContainerBox>
        {!nextStepOpen && (
          <>
            <MoveButtonBox>
              <CloseOutlined onClick={closeModal} />
            </MoveButtonBox>
            <ReservationBox>
              <ContentBox>
                <SelectDate>
                  <h5>날짜</h5>
                  <span>2022. 10. 14 (금)</span>
                </SelectDate>
                <SelectTime onClick={openTimeButton}>
                  <div>
                    <h5>시간</h5>
                    <span className={selectTimeOpen && 'inactive'}>
                      시간을 선택해 주세요.
                    </span>
                  </div>
                  {!selectTimeOpen ? <DownOutlined /> : <UpOutlined />}
                </SelectTime>
                {selectTimeOpen && (
                  <SelectTimeButtonBox>
                    <div>
                      {timeList.map((time, i) => {
                        return (
                          <button
                            key={i}
                            onClick={() => handleSelectTime(i)}
                            className={selectTime[i] && 'active'}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </SelectTimeButtonBox>
                )}
              </ContentBox>
            </ReservationBox>
            <NextButton
              className={valid && 'active'}
              disabled={!valid}
              onClick={openNextStep}
            >
              다음단계
            </NextButton>
          </>
        )}
        {nextStepOpen && (
          <NextStep
            setReservationOpen={setReservationOpen}
            setNextStepOpen={setNextStepOpen}
            closeModal={closeModal}
            selectValue={selectValue}
          />
        )}
      </ContainerBox>
    </Container>
  );
};

export default Reservation;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const ContainerBox = styled.div`
  padding: 20px;
  margin-top: 50px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 3px 2px #dadada;
`;
const MoveButtonBox = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 2px;
  svg {
    cursor: pointer;
  }
`;
const ReservationBox = styled.div`
  width: 350px;
  border: 1.5px solid #efefef;
`;
const ContentBox = styled.div`
  padding: 15px;
  color: #2b2b2b;
`;
const SelectDate = styled.div`
  border-bottom: 1.5px solid #ededed;
  padding: 10px 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  h5 {
    font-size: 13px;
  }
  span {
    font-size: 13px;
    font-weight: 700;
    padding: 0 15px;
  }
`;
const SelectTime = styled.div`
  border-bottom: 1.5px solid #ededed;
  padding: 10px 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    h5 {
      font-size: 13px;
    }
    span {
      font-size: 13px;
      font-weight: 600;
      padding: 0 15px;
      &.inactive {
        font-weight: 500;
        color: #b3b3b3;
      }
    }
  }
`;
const SelectTimeButtonBox = styled.div`
  border-bottom: 1.5px solid #ededed;
  padding: 10px 0;
  display: flex;
  align-items: center;
  div {
    padding: 0 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
      :hover {
        background-color: #efe1e7;
        color: black;
      }
      &.active {
        background-color: #efe1e7;
        color: black;
      }
    }
  }
`;
const NextButton = styled.button`
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
