import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pagination from './components/Pagination';
// function ComponentDemp(){
//     const list = render()
//     return (
//         <ListComponent list={list}></ListComponent>
//     )
// }
const params = {
    current: 1,
    total: 100,
    pageSize: 10
}
ReactDOM.render(
  <React.StrictMode>
    <Pagination {...params}></Pagination>
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




