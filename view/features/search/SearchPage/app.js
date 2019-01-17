
import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;
import './app.less';
export default class SearchApp extends React.Component {
  
  componentDidMount(){
  }
  render() {
    return (
        <div className="search-box">
          <Search
              className="search-input"
              placeholder="搜索博客"
              onSearch={value => console.log(value)}
            />
        </div>
      
    );
  }
}