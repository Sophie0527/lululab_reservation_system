import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import './customStyle.css';
import moment from 'moment/moment';
import 'moment/locale/ko';

const Calendar = ({ openReservation, setSelectDay, setOrderDay }) => {
  return (
    <DatePicker
      monthsShown={1}
      minDate={new Date()}
      locale={ko}
      disabledKeyboardNavigation
      inline
      dateFormat="YY/MM/DD"
      onChange={e => {
        setSelectDay(moment(e).format('YY/MM/DD (ddd)'));
        setOrderDay(moment(e).format('YYYYMMDD'));
        openReservation();
      }}
    />
  );
};

export default Calendar;
