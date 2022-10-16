import React from 'react';
import DatePicker from 'react-datepicker';
import { addDays, getDay } from 'date-fns/esm';
import { ko } from 'date-fns/locale';
import moment from 'moment/moment';
import 'moment/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import './customStyle.scss';

const Calendar = ({ openReservation, setSelectDay, setOrderDay }) => {
  const today = new Date();

  const isWeekday = date => {
    const day = getDay(date);

    return day !== 0;
  };

  return (
    <DatePicker
      monthsShown={1}
      minDate={today}
      locale={ko}
      disabledKeyboardNavigation
      inline
      dateFormat="YY/MM/DD"
      filterDate={isWeekday}
      maxDate={addDays(today, 60)}
      onChange={e => {
        setSelectDay(moment(e).format('YY/MM/DD (ddd)'));
        setOrderDay(moment(e).format('YYYYMMDD'));
        openReservation();
      }}
    />
  );
};

export default Calendar;
