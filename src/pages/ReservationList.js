import styled from 'styled-components';
import Reservation from './Reservation';

const ReservationList = () => {
  return (
    <Container>
      Reservation List
      {/* 예약 페이지 (Reservation) 모달로 구현 */}
      <Reservation />
    </Container>
  );
};

export default ReservationList;

const Container = styled.div``;
