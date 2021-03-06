import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date().getHours();
let greeting;
let cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning'
  cssStyle.color = 'green';
} else if (curDate >= 12 && curDate < 19) {
  greeting = 'Good Afternoon'
  cssStyle.color = 'Orange';
} else {
  greeting = 'Good Night'
  cssStyle.color = 'grey';
}
ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>,
  document.getElementById('root')
);
