/**
 * Created by Jepson on 2018/4/15.
 */

import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


import HomeContainer from '../components/Home/HomeContainer'
import MovieContainer from '../components/Movie/MovieContainer'
import AboutContainer from '../components/About/AboutContainer'

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import '../css/layout.css'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout className="layout" style={{ height: '100%' }}>
          <Header>
            <div className="logo"></div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/movie'>电影</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/about'>关于</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Route exact path="/" component={ HomeContainer } ></Route>
              <Route path="/movie" component={ MovieContainer } ></Route>
              <Route path="/about" component={ AboutContainer } ></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Router>
    )
  }
}
