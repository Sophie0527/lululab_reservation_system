import React from 'react';
import { Tabs } from 'antd';
import ListTab from './ListTab';
import BlackListTap from './BlackListTap';

const AdminList = () => {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="예약 리스트" key="1">
        <ListTab />
      </Tabs.TabPane>
      <Tabs.TabPane tab="블랙리스트" key="2">
        <BlackListTap />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default AdminList;
