# lululab Reservation System Project

## ๐ ๋ฏธ๋ฆฌ๋ณด๊ธฐ

> ์์ฝํ๊ธฐ

&nbsp; &nbsp; &nbsp;<img src="https://user-images.githubusercontent.com/100933263/196032854-6ca37684-d29a-4123-afcb-765a7378f384.gif"  width="600" height="530"/>
<br/>
<br/>

> ์์ฝ์กฐํ

&nbsp; &nbsp; &nbsp;<img src="https://user-images.githubusercontent.com/100933263/196032267-ee3893cc-f86b-4270-8685-09b5987ca590.gif"  width="600" height="450"/>
<br/>
<br/>

> ๊ด๋ฆฌ์

&nbsp; &nbsp; &nbsp;<img src="https://user-images.githubusercontent.com/100933263/196031915-62e9d10f-61c8-43f4-a095-0ee5f443ab2c.gif"  width="600" height="550"/>
<br/>
<br/>

## ๐ฉ ํ๋ก์ ํธ ๊ฐ์

- **์งํ๊ธฐ๊ฐ** : 10/14~ 10/17
- **๊ณผ์ ์ฃผ๊ด** : ๋ฃฐ๋ฃจ๋ฉ
- **์ฐธ์ฌ๋ช๋จ** : ์ ์ตํ, ์์ํฌ
- **ํ๋ก์ ํธ ์ค๋ช** : ๋ณ์ ์์ฝ ์์คํ ๊ตฌ์ถ์ ์ํด ์์ฝํ๊ธฐ, ์์ฝ์กฐํ๊ฐ ๊ฐ๋ฅํ๋๋กํ์๊ณ , ๋ํ ์ถ๊ฐ์ ์ผ๋ก ๊ด๋ฆฌ์ํ์ด์ง๋ฅผ ์์ฑํ์ฌ ์์ฝ์๋ฆฌ์คํธ๋ฅผ ํ์ธํ๊ณ  ๋ธ๋๋ฆฌ์คํธ๋ฅผ ๊ด๋ฆฌํ  ์ ์๋๋ก ๊ตฌํํ์์ต๋๋ค.
- **๋ฐฐํฌ** : [๋ฐฐํฌ ๋ฐ๋ก๊ฐ๊ธฐ](https://team13-lululab.netlify.app/)

<br/>
<br/>

## ๐ป Technlogies

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-ffc700?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<br/>
<br/>

## โ ๋ฐ์ดํฐ ๊ด๋ฆฌ

- ์ํํ ๋ฐ์ดํฐ ๊ด๋ฆฌ๋ฅผ ์ํด  ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๊ณ  ์ถ๊ฐํ๊ณ  ์ญ์ ๊ฐ ๊ฐ๋ฅํ๋๋ก **firebase firestorage**๋ฅผ ์ฌ์ฉ<br/>

  - ์ ์ฒด ์์ฝ API : [https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order.json](https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order.json)  
  - ํน์  ์์ฝ API : bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/[์์ฝ๋ฒํธ].json
  - ์ ์ฒด ๋ธ๋๋ฆฌ์คํธ API : [https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist.json](https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist.json)  
  - ํน์  ๋ธ๋๋ฆฌ์คํธ API : bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist/[๋ฒํธ].json

<br/>
<br/>

## ๐  ๊ตฌํ์ฌํญ๊ณผ ํด๊ฒฐ๋ฐฉ๋ฒ

> MISSION 1

### ๋ณ์ ์์ฝ ๊ฐ๋ฅ ๋ชฉ๋ก ํ์ด์ง
: ์์ฝ ๊ฐ๋ฅ ์ฌ๋ถ๋ Calendar์์ ๋ ์ง ์ ํ ์ ์์ฝ๋ฑ๋ก ๋ชจ๋ฌ์์ ์๊ฐ๋ ๋ณ๋ก ํ์ธ ๊ฐ๋ฅํฉ๋๋ค.

#### 1-1 &nbsp; ์์ฝ ํ์ด์ง๋ก ์ด๋ํ๊ธฐ์ํด Calendar๋ฅผ ํ์ฉ<br/>
- #### Calendar์์ ๋ ์ง๋ฅผ ์ ํํ  ์ ์๋๋ก ๊ตฌํ<br/>
  `react-datepicker` ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ์ฌ Calendar ๊ตฌํํ์์ต๋๋ค.<br/>
  
- #### ํด๋น ๋ ์ง ์ ํ ์ ์์ฝ ๋ฑ๋ก ๋ชจ๋ฌ open<br/>
  onChange ์ด๋ฒคํธ ์ state๊ฐ์ true๋ฅผ ๋ณ๊ฒฝํ์ฌ ์์ฝ ๋ฑ๋ก ๋ชจ๋ฌ์ด ๋ณด์ฌ์ง๋๋ก ๊ตฌํํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
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

### ์์ฝ ๋ฑ๋ก ํ์ด์ง

#### 2-1 &nbsp; ์์ฝ ์๊ฐ ์กฐํ ๋ฐ ์ ํ<br/>
- #### ์์ฝ ์๊ฐ ์ ํ<br/>
  ์์ฝ ์๊ฐ ์ ํ ์ ํด๋น ์๊ฐ ๋ฒํผ ์ ๋ณ๊ฒฝ ๋ฐ '์๊ฐ์ ์ ํํด์ฃผ์ธ์' text ํด๋น ์๊ฐ์ผ๋ก ๋ณ๊ฒฝ๋ฉ๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
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
- #### ๋ค์๋จ๊ณ ๋ฒํผ ํ์ฑํ<br/>
  ์๊ฐ ๋ฒํผ ํด๋ฆญ ์ ๋ค์๋จ๊ณ ๋ฒํผ์ด ํ์ฑํ๋๊ณ , ๋ค์ ๋ชจ๋ฌ์ด open ๋๊ณ  ํ์ฌ ๋ชจ๋ฌ์ด ๋ซํ๋๋ก ๊ตฌํํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
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
          ๋ค์๋จ๊ณ
        </NextButton>
     ```
    </details>
    
#### 2-2 &nbsp; ์ค๋ณต ์์ฝ์ด ๋ถ๊ฐํ๋๋ก ๊ตฌํ<br/>
- #### ์์ฝ์๊ฐ ์๋ ์๊ฐ์ '๋ง๊ฐ'์ผ๋ก ๋ณด์ฌ์ฃผ๊ธฐ<br/>
  ์์ฝ์๊ฐ ์๋ ์๊ฐ์ '๋ง๊ฐ' text๋ฅผ ๋ณด์ฌ์ฃผ๊ณ  disabled ์ฒ๋ฆฌ๋ฅผ ํ์ฌ ํด๋ฆญ์ด ์๋๋๋ก ๊ตฌํํ์์ต๋๋ค.<br/>
  
#### 2-3 &nbsp; ์์ฝ์ ์ ๋ณด ์๋ ฅ<br/>
- #### ์๋ ฅ๊ฐ์ ๋ฐ๋ผ ๊ฐ์ฒด ๊ฐ ๋ณ๊ฒฝํ๊ธฐ<br/>
  input ๊ฐ์ value์ ๋ฐ๋ผ onChange ์ด๋ฒคํธ๋ก ๊ฐ ๋ณ๊ฒฝ๋๋๋ก ๊ตฌํํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
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
         placeholder="ex. ํ๊ธธ๋"
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
- #### ์์ฝํ๊ธฐ ๋ฒํผ ํด๋ฆญ ์ ์๋ ฅ ๋ฐ์ดํฐ ๋ณด๋ด ์ถ๊ฐํ๊ธฐ<br/>
  onClick ์ด๋ฒคํธ ์ put HTTP Method๋ฅผ ์ฌ์ฉํ์ฌ ์๋ ฅํ ๋ฐ์ดํฐ ๋ณด๋ด๋๋ก ๊ตฌํํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
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
    
#### 2-4 &nbsp; ๋ธ์ผํ ์์ฝ์์ ํํด์ ์์ฝ์ด ๋ถ๊ฐํ๋๋ก ๊ตฌํ<br/>
- #### ๋ธ๋๋ฆฌ์คํธ ์์ฝ์์ผ ๊ฒฝ์ฐ ์์ฝ ๋ถ๊ฐ<br/>
  ๋ธ๋๋ฆฌ์คํธ ์ผ ๊ฒฝ์ฐ alert์ฐฝ(๋ฐฉ๋ฌธ์์ฝ๋ง ๊ฐ๋ฅํฉ๋๋ค') ๋์ฐ๊ธฐ<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
  const blackAlert = () => {
    alert(`${name}๋์ ๋ณ์ ์ฌ์ ์ผ๋ก ๋ฐฉ๋ฌธ ์์ฝ๋ง ๊ฐ๋ฅ ํ์ญ๋๋ค.`);
    window.location.reload();
  };
     ```
    </details>


<br/>
<br/>

> MISSION 3

### ์์ฝ ๋ด์ญ ์กฐํ ํ์ด์ง

#### 3-1 &nbsp; ์์ฝ ๋ฒํธ๋ก ์์ฝ ๋ด์ญ ์กฐํ<br/>
- #### ๋ฒํผ ํด๋ฆญ ๋๋ enter ์ ๋ด์ญ ์กฐํ <br/>
  onClick ์ด๋ฒคํธ๊ฐ ์์ ์ get HTTP Method๋ฅผ ์ฌ์ฉํ์ฌ ํด๋น ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฌ์ค๋๋ก ํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
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
- #### state๋ฅผ ์ฌ์ฉํ์ฌ url ๋ณ๊ฒฝํ์ฌ ํด๋น ๋ฐ์ดํฐ ๊ฐ์ ธ์ค๊ธฐ<br/>
  input์ value๋ฅผ ๋ฐ์ onchange ์ด๋ฉํธ ์ url์ ๋ณ๊ฒฝํ์ฌ ํด๋น ์์ฝ์ ๋ณด๋ฅผ ๋ณด์ฌ์ฃผ๋๋ก ํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
        <input
          placeholder="์์ฝ ๋ฒํธ๋ฅผ ์๋ ฅํด์ฃผ์ธ์."
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
- #### ๊ฒ์ํ ์์ฝ๋ฒํธ๊ฐ ์์ ๋ ์กฐ๊ฑด<br/>
  ๋ฐ์ดํฐ์์ ํด๋น ์๋ ฅ๋ ๊ฐ์ด null ์ผ ๋ '์์ฝ์ ์กฐํํ  ์ ์์ต๋๋ค.'๊ฐ ๋ณด์ฌ์ง ์ ์๋ ์กฐ๊ฑด์ ์ถ๊ฐํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
      {reservationInfoList === null && showData && (
        <InfoHeader>
          <h5>์์ฝ์ ์กฐํํ  ์ ์์ต๋๋ค.</h5>
        </InfoHeader>
      )}
     ```
    </details>
  
#### 3-2 &nbsp; ์์ฝ์ทจ์๊ฐ ๊ฐ๋ฅํ๋๋ก ๊ตฌํ <br/>
- #### ์์ฝ์ทจ์ ๋ฒํผ ํด๋ฆญ ์ ์์ฝ์ทจ์ <br/>
  onClick ์ด๋ฒคํธ๊ฐ ์์ ์ delete HTTP Method๋ฅผ ์ฌ์ฉํ์ฌ ํด๋น ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํ๋๋ก ํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
      const deleteOnClick = () => {
        axios
         .delete(
            `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${orderUrl}.json`
         )
         .then(alert('์์ฝ์ด ์ทจ์๋์์ต๋๋ค.'));
       window.location.reload();
       };
     ```
    </details>
  
<br/>
<br/>

> MISSION 4 _ ์ถ๊ฐ ์ ํ ๊ตฌํ์ฌํญ

### ๊ด๋ฆฌ์ ํ์ด์ง

#### 4-1 &nbsp; ๊ด๋ฆฌ์ ํ์ด์ง ์ ๊ทผ ์กฐ๊ฑด<br/>
- #### ๊ด๋ฆฌ์ ํ์ด์ง ๋น๋ฐ๋ฒํธ ์๋ ฅ์ ํ์ธ ๊ฐ๋ฅ<br/>
  onFinish ์ด๋ฒคํธ ์ ๋น๋ฐ๋ฒํธ๊ฐ 1234 ์ด๋ฉด setState ๊ฐ์ ๋ฐ๊ฟ์ AdminList๊ฐ ๋ณด์ฌ์ง๊ณ , ๋น๋ฐ๋ฒํธ๊ฐ ํ๋ฆฌ๋ฉด alert์ฐฝ ๋์ฐ๋๋ก ๊ตฌํํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
      const onFinish = values => {
        values.password === '1234'
          ? setOnOff(prev => !prev)
          : alert('๋น๋ฐ๋ฒํธ๋ฅผ ํ์ธํ์ธ์');
      };
     ```
    </details>
  
#### 4-2 &nbsp; ๊ด๋ฆฌ์ํ์ด์ง์ ์์ฝ ๋ฆฌ์คํธ<br/>
- #### ์์ฝ์ด ์งํ์ค์ธ ๋ชจ๋  ์์ฝ์ ๋ณด๋ฅผ ๋ณด์ฌ์ฃผ๋ ์์ฝ ๋ฆฌ์คํธ<br/>
  ์์ฝ์ ๋ณด ๋ฐ์ดํฐ๋ฅผ getํ์ฌ ๋ฐฐ์ด์ ๋ด์ ์์ฝ๋ฒํธ ์์๋ก ๋ณด์ฌ์ฃผ๊ธฐ<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
      const fakeDataUrl =
        'https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order.json';

        const [data, setData] = useState([]);
        const appendData = () => {
          axios.get(fakeDataUrl).then(res => {
            setData(Object.values(res.data));
            message.success(
              `${Object.values(res.data).length} ๊ฐ ์์ฝ์ ๋ณด๊ฐ ์์ต๋๋ค.`
            );
          });
     ```
    </details>
- #### ๊ด๋ฆฌ์๊ฐ ์์ฝ์ทจ์๊ฐ ๊ฐ๋ฅํ๋๋ก ๊ตฌํ<br/>
  onClick ์ด๋ฒคํธ๊ฐ ์์ ์ delete HTTP Method๋ฅผ ์ฌ์ฉํ์ฌ ํด๋น ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํ๋๋ก ํ์์ต๋๋ค.<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
      const delBooking = num => {
        axios
          .delete(
            `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${num}.json`
          )
          .then(alert('์ญ์  ๋์์ต๋๋ค.'), appendData());
      };
     ```
    </details>
  
#### 4-3 &nbsp; ๊ด๋ฆฌ์ํ์ด์ง์ ๋ธ๋ ๋ฆฌ์คํธ<br/>
- #### ๋ธ๋ ๋ฆฌ์คํธ์ ์๋ ๊ณ ๊ฐ ์ ๋ณด ๋ฆฌ์คํธ<br/>
  ๋ธ๋๋ฆฌ์คํธ ๋ฐ์ดํฐ๋ฅผ getํ์ฌ ๋ฐฐ์ด์ ๋ด์ ์ ํ๋ฒํธ ์์๋ก ๋ณด์ฌ์ฃผ๊ธฐ<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
      const [data, setData] = useState([]);
      const appendData = () => {
        axios.get(fakeDataUrl).then(res => {
          setData(Object.values(res.data));
          message.success(
            `${Object.values(res.data).length} ๊ฐ ์์ฝ์ ๋ณด๊ฐ ์์ต๋๋ค.`
          );
        });
      };
     ```
    </details>
- #### ๊ด๋ฆฌ์๊ฐ ๋ธ๋๋ฆฌ์คํธ์ ์ถ๊ฐํ๊ฑฐ๋ ์ญ์  ๊ฐ๋ฅํ๋๋ก ๊ตฌํ<br/>
    <details>
    <summary>Code ๋๋ณด๊ธฐ</summary><br/>
      
     ```js
      const delBooking = num => {
        axios
          .delete(
            `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist/${num}.json`
          )
          .then(alert('์ญ์  ๋์์ต๋๋ค.'), appendData());
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
          .then(alert('๋ฆฌ์คํธ์ ์ถ๊ฐ ํ์์ต๋๋ค.'));
      };
     ```
    </details>

<br/>
<br/>

## โ ํ๋ก์ ํธ ๊ด๋ฆฌ

##### ํ๋ก์ ํธ ๊ด๋ฆฌ ๋ฐ ์ค๊ณ์ ๊ด๋ จ๋ ์ฌํญ [๋ด์ฉ๋ณด๊ธฐ!](https://www.notion.so/wecode/13-81a1c15f26404a789850d53fb87acfc3)
