import React, { useState } from 'react';

import ReservationList from './ReservationList';
import ReservationHistory from './ReservationHistory';
import Admin from './Admin';
import { Breadcrumb, Layout, Menu } from 'antd';
import { CalendarOutlined, HistoryOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('예약하기', '1', <CalendarOutlined />),
  getItem('예약조회', '2', <HistoryOutlined />),
  getItem('관리자', '3', <HistoryOutlined />),
];

const MainLayout = () => {
  const [page, setPage] = useState('1');
  const onClick = e => {
    setPage(e.key);
  };

  return (
    <Layout>
      <Header>
        <a href="/">
          <Logo>
            <h1>lululab</h1>
          </Logo>
        </a>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={page}
          items={items}
          onClick={onClick}
        />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>룰루랩 예약 시스템</Breadcrumb.Item>
          <Breadcrumb.Item>
            {page === '1' && 'Reservation'}
            {page === '2' && 'Reservation History'}
            {page === '3' && 'Admin'}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          {page === '1' && <ReservationList />}
          {page === '2' && <ReservationHistory />}
          {page === '3' && <Admin />}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        13 Team
      </Footer>
    </Layout>
  );
};
export default MainLayout;

const Logo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  @media (max-width: 530px) {
    width: 50px;
    margin: 16px 10px;
  }
  h1 {
    font-size: 25px;
    line-height: 31px;
    text-align: center;
    font-weight: 700;
    color: white;
    letter-spacing: 2px;
    @media (max-width: 530px) {
      font-size: 17px;
      letter-spacing: 0px;
    }
  }
`;
