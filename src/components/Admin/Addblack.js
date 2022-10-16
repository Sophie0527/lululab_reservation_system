import React from 'react';
import { Button } from 'antd';
import { Row } from 'antd';

const Addblack = ({
  addListValue,
  setAddListValue,
  addBlackList,
  appendData,
}) => {
  const { phone } = addListValue;
  const handleLoginInput = e => {
    const { name, value } = e.target;
    setAddListValue({ ...addListValue, [name]: value });
  };
  return (
    <Row>
      <input
        placeholder="전화번호"
        type="text"
        name="phone"
        value={phone}
        onChange={e => {
          handleLoginInput(e);
        }}
      />
      <select
        name="reason"
        defaultValue="노쇼 다수"
        onChange={e => {
          handleLoginInput(e);
        }}
      >
        <option value="노쇼 다수" selected>
          노쇼 다수
        </option>
        <option value="진상">진상</option>
        <option value="외상">외상</option>
      </select>

      <Button
        type="primary"
        danger
        onClick={() => {
          addBlackList();
          appendData();
        }}
      >
        블랙리스트 추가
      </Button>
    </Row>
  );
};

export default Addblack;
