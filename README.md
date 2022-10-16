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
- 배포 : [배포 바로가기]()

<br/>
<br/>

## 💻 Technlogies

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-ffc700?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<br/>
<br/>

## ⚙ 데이터 관리

- firebase firestorage를 이용하여 데이터 관리  
  - 전체 데이터: [https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order.json](https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order.json)  
  - 특정 데이터: [https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/[예약번호].json](https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/20221017_00.json)
    
<br/>
<br/>

## 🛠 구현사항과 해결방법

> MISSION 1

### 병원 예약 가능 목록 페이지

#### 1-1 &nbsp; <br/>
  
#### 1-2 &nbsp; <br/>

<br/>
<br/>

> MISSION 2

### 예약 등록 페이지

#### 2-1 &nbsp; <br/>
  
#### 2-2 &nbsp; <br/>

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

#### 4-1 &nbsp; <br/>
  
#### 4-2 &nbsp; <br/>

<br/>
<br/>

## ⚙ 프로젝트 관리

##### 프로젝트 관리 및 설계와 관련된 사항 [내용보기!](https://www.notion.so/wecode/13-81a1c15f26404a789850d53fb87acfc3)
