import axios from 'axios';
const url = 'https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/';
/* 예약리스트 조회*/
export async function getListApi() {
  return await axios.get(url + 'order_list.json');
}
export async function getBlackListApi() {
  return await axios.get(url + 'blacklist.json');
}
// const goOrder = () => {
//   axios
//     .put(
//       `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${oderDay}_${timeNumber}.json`,
//       { ...reservationValue }
//     )
//     .then(
//       axios.put(
//         `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order_list/${oderDay}_${timeNumber}.json`,
//         { order: `${oderDay}_${timeNumber}` }
//       )
//     )
//     .then(success());
// };
// useEffect(() => {
//   axios
//     .get(
//       'https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist.json'
//     )
//     .then(res => {
//       setBlackList(Object.keys(res.data));
//     });
// }, []);
// console.log(blackList);
