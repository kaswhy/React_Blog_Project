/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [postTitle, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likeCount, setLikeCount] = useState(0);

  return (
    <div className="App">
        <div className="black-nav">
          <h4>ReactBlog</h4>
        </div>
        <div className="list">
          <h4>{ postTitle[0] } <span onClick={ () => { setLikeCount(likeCount + 1) } }>👍</span> {likeCount} </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{ postTitle[1] }</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{ postTitle[2] }</h4>
          <p>2월 17일 발행</p>
        </div>

        <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
