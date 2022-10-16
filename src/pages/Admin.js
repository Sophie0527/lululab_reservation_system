import React, { useState } from 'react';

import FormBox from '../components/Admin/FormBox';
import 'antd/dist/antd.css';
import AdminList from '../components/Admin/AdminList';

const Admin = () => {
  const [onOff, setOnOff] = useState(true);

  return onOff ? <FormBox setOnOff={setOnOff} /> : <AdminList />;
};

export default Admin;
