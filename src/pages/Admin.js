import React, { useState } from 'react';
import AdminList from '../components/Admin/AdminList';
import FormBox from '../components/Admin/FormBox';
import 'antd/dist/antd.css';

const Admin = () => {
  const [onOff, setOnOff] = useState(true);

  return onOff ? <FormBox setOnOff={setOnOff} /> : <AdminList />;
};

export default Admin;
