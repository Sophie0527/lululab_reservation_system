# lululab Reservation System Project

## 🔍 미리보기

> 예약하기

&nbsp; &nbsp; &nbsp;<img src="https://user-images.githubusercontent.com/100933263/196032854-6ca37684-d29a-4123-afcb-765a7378f384.gif"  width="600" height="530"/>
<br/>
<br/>

> 예약조회

&nbsp; &nbsp; &nbsp;<img src="https://user-images.githubusercontent.com/100933263/196032267-ee3893cc-f86b-4270-8685-09b5987ca590.gif"  width="600" height="450"/>
<br/>
<br/>

> 관리자

&nbsp; &nbsp; &nbsp;<img src="https://user-images.githubusercontent.com/100933263/196031915-62e9d10f-61c8-43f4-a095-0ee5f443ab2c.gif"  width="600" height="550"/>
<br/>
<br/>

## 🚩 프로젝트 개요

- 진행기간 : 10/14~ 10/17
- 과제주관 : 룰루랩
- 참여명단 : 정억화, 손소희
- 배포 : [배포 바로가기](https://team13-lululab.netlify.app/)

<br/>
<br/>

## 💻 Technlogies

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-ffc700?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<br/>
<br/>

## ⚙ 데이터 관리

- firebase firestorage를 이용하여 데이터 관리  
  - 전체 예약 데이터: [https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order.json](https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order.json)  
  - 특정 예약 데이터: bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/[예약번호].json
  - 전체 예약 데이터: [https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist.json](https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist.json)  
  - 특정 예약 데이터: bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist/[번호].json

<br/>
<br/>

## 🛠 구현사항과 해결방법

> MISSION 1

### 병원 예약 가능 목록 페이지
: 예약 가능 여부는 Calendar에서 날짜 선택 시 예약등록 모달에서 시간대 별로 확인 가능합니다.

#### 1-1 &nbsp; 예약 페이지로 이동하기위해 Calendar를 활용<br/>
- #### Calendar에서 날짜를 선택할 수 있도록 구현<br/>
  `react-datepicker` 라이브러리를 사용하여 Calendar 구현하였습니다.<br/>
  
- #### 해당 날짜 선택 시 예약 등록 모달 open<br/>
  onChange 이벤트 시 state값을 true를 변경하여 예약 등록 모달이 보여지도록 구현하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
       const [reservationOpen, setReservationOpen] = useState(false);
       const openReservation = () => {
          setReservationOpen(prev => !prev);
        };
        
        ...
        
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
     ```
    </details>
    
<br/>
<br/>

> MISSION 2

### 예약 등록 페이지

#### 2-1 &nbsp; 예약 시간 조회 및 선택<br/>
- #### 예약 시간 선택<br/>
  예약 시간 선택 시 해당 시간 버튼 색 변경 및 '시간을 선택해주세요' text 해당 시간으로 변경됩니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
      const handleSelectTime = idx => {
        const newArr = Array(TIMELISTDATA.length).fill(false);
        if (!selectTime[idx]) {
          newArr[idx] = true;
        }
        setSelectTime(newArr);
        setTime(TIMELISTDATA[idx]);
        setTimeNumber('0' + idx);
      };
     ```
    </details>
- #### 다음단계 버튼 활성화<br/>
  시간 버튼 클릭 시 다음단계 버튼이 활성화되고, 다음 모달이 open 되고 현재 모달이 닫히도록 구현하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
      const validation = () => {
        if (selectTime.includes(true)) {
          return true;
        }
        return false;
      };
      const valid = validation();
      
      ...
      
        <NextButton
          className={valid && 'active'}
          disabled={!valid}
          onClick={openNextStep}
        >
          다음단계
        </NextButton>
     ```
    </details>
  
#### 2-2 &nbsp; 예약자 정보 입력<br/>
- #### 입력값에 따라 객체 값 변경하기<br/>
  input 값의 value에 따라 onChange 이벤트로 값 변경되도록 구현하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
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
      
      ...
      
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
     ```
    </details>
- #### 예약하기 버튼 클릭 시 입력 데이터 보내 추가하기<br/>
  onClick 이벤트 시 put HTTP Method를 사용하여 입력한 데이터 보내도록 구현하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
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
     ```
    </details>
- #### 블랙리스트 예약자일 경우 예약 불가<br/>
  블랙리스트 일 경우 alert창(방문예약만 가능합니다') 띄우기<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
  const blackAlert = () => {
    alert(`${name}님은 병원 사정으로 방문 예약만 가능 하십니다.`);
    window.location.reload();
  };
     ```
    </details>

<br/>
<br/>

> MISSION 3

### 예약 내역 조회 페이지

#### 3-1 &nbsp; 예약 번호로 예약 내역 조회<br/>
- #### 버튼 클릭 또는 enter 시 내역 조회 <br/>
  onClick 이벤트가 있을 시 get HTTP Method를 사용하여 해당 데이터를 불러오도록 하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
       const handleOnClick = () => {
         axios
           .get(
             `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${orderUrl}.json`
           )
           .then(res => setReservationInfoList(res.data))
           .then(showUserInfo());
        };
     ```
    </details>
- #### state를 사용하여 url 변경하여 해당 데이터 가져오기<br/>
  input의 value를 받아 onchange 이멘트 시 url을 변경하여 해당 예약정보를 보여주도록 하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
        <input
          placeholder="예약 번호를 입력해주세요."
          type="text"
          value={orderUrl}
          onChange={e => {
            setOrderUrl(e.target.value);
          }}
          onKeyDown={handleOnKeyPress}
        />
        <SearchOutlined type="button" value="search" onClick={handleOnClick} />
     ```
    </details>
- #### 검색한 예약번호가 없을 때 조건<br/>
  데이터에서 해당 입력된 값이 null 일 때 '예약을 조회할 수 없습니다.'가 보여질 수 있는 조건을 추가하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
      {reservationInfoList === null && showData && (
        <InfoHeader>
          <h5>예약을 조회할 수 없습니다.</h5>
        </InfoHeader>
      )}
     ```
    </details>
  
#### 3-2 &nbsp; 예약취소가 가능하도록 구현 <br/>
- #### 예약취소 버튼 클릭 시 예약취소 <br/>
  onClick 이벤트가 있을 시 delete HTTP Method를 사용하여 해당 데이터를 삭제하도록 하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
      const deleteOnClick = () => {
        axios
         .delete(
            `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${orderUrl}.json`
         )
         .then(alert('예약이 취소되었습니다.'));
       window.location.reload();
       };
     ```
    </details>
  
<br/>
<br/>

> MISSION 4 _ 추가 선택 구현사항

### 관리자 페이지

#### 4-1 &nbsp; 관리자 페이지 접근 조건<br/>
- #### 관리자 페이지 비밀번호 입력시 확인 가능<br/>
  onFinish 이벤트 시 비밀번호가 1234 이면 setState 값을 바꿔서 AdminList가 보여지고, 비밀번호가 틀리면 alert창 띄우도록 구현하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
      const onFinish = values => {
        values.password === '1234'
          ? setOnOff(prev => !prev)
          : alert('비밀번호를 확인하세요');
      };
     ```
    </details>
  
#### 4-2 &nbsp; 관리자페이지의 예약 리스트<br/>
- #### 예약이 진행중인 모든 예약정보를 보여주는 예약 리스트<br/>
  예약정보 데이터를 get하여 배열에 담아 예약번호 순서로 보여주기<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
      const fakeDataUrl =
        'https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order.json';

        const [data, setData] = useState([]);
        const appendData = () => {
          axios.get(fakeDataUrl).then(res => {
            setData(Object.values(res.data));
            message.success(
              `${Object.values(res.data).length} 개 예약정보가 있습니다.`
            );
          });
     ```
    </details>
- #### 관리자가 예약취소가 가능하도록 구현<br/>
  onClick 이벤트가 있을 시 delete HTTP Method를 사용하여 해당 데이터를 삭제하도록 하였습니다.<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
      const delBooking = num => {
        axios
          .delete(
            `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${num}.json`
          )
          .then(alert('삭제 되었습니다.'), appendData());
      };
     ```
    </details>
  
#### 4-3 &nbsp; 관리자페이지의 블랙 리스트<br/>
- #### 블랙 리스트에 있는 고객 정보 리스트<br/>
  블랙리스트 데이터를 get하여 배열에 담아 전화번호 순서로 보여주기<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
      const [data, setData] = useState([]);
      const appendData = () => {
        axios.get(fakeDataUrl).then(res => {
          setData(Object.values(res.data));
          message.success(
            `${Object.values(res.data).length} 개 예약정보가 있습니다.`
          );
        });
      };
     ```
    </details>
- #### 관리자가 블랙리스트에 추가하거나 삭제 가능하도록 구현<br/>
    <details>
    <summary>Code 더보기</summary><br/>
      
     ```js
      const delBooking = num => {
        axios
          .delete(
            `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist/${num}.json`
          )
          .then(alert('삭제 되었습니다.'), appendData());
      };

      const addBlackList = () => {
        axios
          .put(
            `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist/${phone}.json `,
            { ...addListValue }
          )
          .then(
            setAddListValue({
              phone: '',
              reason: '',
            })
          )
          .then(alert('리스트에 추가 하였습니다.'));
      };
     ```
    </details>

<br/>
<br/>

## ⚙ 프로젝트 관리

##### 프로젝트 관리 및 설계와 관련된 사항 [내용보기!](https://www.notion.so/wecode/13-81a1c15f26404a789850d53fb87acfc3)
