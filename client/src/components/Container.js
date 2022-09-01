import { Col, Layout, Row } from 'antd';
import React from 'react';
import Navbar from './Navbar';
const { Header, Content } = Layout;

const Container = ({children}) => (
  <>
    <Layout className='container'>
      <Header><Navbar/></Header>
      <Row gutter = {30}>
      <Col span = {24}><Content>{children}</Content></Col>
      </Row>
    </Layout>
  </>
);

export default Container;