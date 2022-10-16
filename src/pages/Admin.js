import React, { useState } from 'react';
import styled from 'styled-components';
import FormBox from '../components/Admin/FormBox';
import 'antd/dist/antd.css';
import AdminList from '../components/Admin/AdminList';

const Admin = () => {
  const [onOff, setOnOff] = useState(true);
  console.log(onOff);

  return onOff ? <FormBox setOnOff={setOnOff} /> : <AdminList />;
};

export default Admin;

const Container = styled.div`
  width: 100%;
`;

const LoginBox = styled.div``;

const LoginInput = styled.input``;
