import { Avatar, List, message } from 'antd';
import axios from 'axios';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const fakeDataUrl =
  'https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order.json';
const ContainerHeight = 400;

const ListTab = () => {
  const [data, setData] = useState([]);
  const appendData = () => {
    axios.get(fakeDataUrl).then(res => {
      setData(Object.values(res.data));
      message.success(
        `${Object.values(res.data).length} 개 예약정보가 있습니다.`
      );
    });
  };
  console.log(data);
  useEffect(() => {
    appendData();
  }, [setData]);

  const onScroll = e => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  const delBooking = num => {
    axios
      .delete(
        `https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/order/${num}.json`
      )
      .then(alert('삭제 되었습니다.'), appendData());
  };
  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="order_number"
        onScroll={onScroll}
      >
        {item => (
          <List.Item key={'list' + item.order_number}>
            <List.Item.Meta
              avatar={<Avatar>{item.type}</Avatar>}
              title={`${item.name}님 (예약번호: ${item.order_number})`}
              description={`예약일:${item.day}, 시간:${item.time}`}
            />
            <Button
              type="primary"
              danger
              size="small"
              onClick={() => {
                delBooking(item.order_number);
              }}
            >
              삭제
            </Button>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default ListTab;
