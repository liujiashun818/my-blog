
import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;

export default class SearchApp extends React.Component {
  
  componentDidMount(){
  }
  render() {
    return (
        <Search
          placeholder="搜索博客"
          style={{ width: '34%' }}
          onSearch={value => console.log(value)}
        />
    );
  }
}