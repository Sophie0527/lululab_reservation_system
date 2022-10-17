import styled from 'styled-components';
import axios from 'axios';

const ReservationHistoryInfo = ({
  reservationInfoList,
  showData,
  orderUrl,
}) => {
  const deleteOnClick = () => {
    axios
      .delete(
        `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${orderUrl}.json`
      )
      .then(
        axios.delete(
          `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order_list/${orderUrl}.json`
        )
      )
      .then(alert('예약이 취소되었습니다.'));
    window.location.reload();
  };

  return (
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
              <span>{reservationInfoList.type}</span>
            </div>
          </InfoContent>
          <InfoFooter>
            <button onClick={deleteOnClick}>예약취소</button>
          </InfoFooter>
        </>
      )}
    </ContentBox>
  );
};

export default ReservationHistoryInfo;

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
