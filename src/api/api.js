import axios from 'axios';
const url = 'https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/';
/* 예약리스트 조회*/
export async function getListApi() {
  return await axios.get(url + 'order_list.json');
}
export async function getBlackListApi() {
  return await axios.get(url + 'blacklist.json');
}
