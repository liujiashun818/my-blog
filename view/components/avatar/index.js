import React from 'react';
import { Switch, Route, Router, hashHistory } from 'react-router-dom';
import { Badge, Avatar, Menu, Dropdown } from 'antd';
import './index.less';

export default class AvatarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
    handleMenuClick = (e) => {
      console.log(e);
      if (e.key === '1') {
        window.sessionStorage.removeItem('user_id');
        this.props.signOut();
      }
    };
    render() {
      const menu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1">
                 退出
          </Menu.Item>
          <Menu.Item key="2">
                  修改用户信息
          </Menu.Item>
          <Menu.Item key="3">
                  其它...
          </Menu.Item>
        </Menu>
      );
      return (
        <Dropdown overlay={menu} placement="bottomRight">
          <Badge count={1}><Avatar shape="circle" icon="user" /></Badge>
        </Dropdown>

      );
    }
}

