import { Avatar, List, message } from 'antd';
import axios from 'axios';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Addblack from './Addblack';
import { Row } from 'antd';
const fakeDataUrl =
  'https://bookingclinic-fd4f0-default-rtdb.firebaseio.com/blacklist.json';
const ContainerHeight = 400;

const BlackListTop = () => {
  const [data, setData] = useState([]);
  const [addListValue, setAddListValue] = useState({
    phone: '',
    reason: '',
  });
  const { phone } = addListValue;

  const appendData = () => {
    axios.get(fakeDataUrl).then(res => {
      setData(Object.values(res.data));
      message.success(
        `${Object.values(res.data).length} 명의 블랙회원 정보가 있습니다.`
      );
    });
  };

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
  return (
    <>
      <List key={phone}>
        <VirtualList
          data={data}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="order_number"
          onScroll={onScroll}
        >
          {item => (
            <List.Item key={'black' + item.phone}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<UserOutlined />}
                  />
                }
                title={`휴대전화: ${item.phone}`}
                description={`    사유: ${item.reason}`}
              />
              <Button
                type="primary"
                danger
                size="small"
                onClick={() => {
                  delBooking(item.phone);
                }}
              >
                삭제
              </Button>
            </List.Item>
          )}
        </VirtualList>
      </List>
      <InputBox>
        <Row justify="space-around" align="middle">
          <Addblack
            addListValue={addListValue}
            setAddListValue={setAddListValue}
            addBlackList={addBlackList}
            appendData={appendData}
          />
        </Row>
      </InputBox>
    </>
  );
};

export default BlackListTop;
const InputBox = styled.div``;
