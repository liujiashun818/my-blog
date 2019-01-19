import React from 'react';
import {Collapse, Icon, Dropdown ,Menu } from 'antd';
const Panel = Collapse.Panel;

import './style.less';

export const ChangeEditor = ({props, className, onChange}) => {
    const ellipsisContent = (
        <Menu>
          <Menu.Item onClick={onChange}>
              富文本编辑器
          </Menu.Item>  
         </Menu>
    );
    return(
             <Dropdown className={className} overlay={ellipsisContent} placement="bottomCenter">
                <Icon type="ellipsis" />
             </Dropdown>
  
    )
}
