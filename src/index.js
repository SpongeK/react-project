import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ComponentDemo from './demo/componentDemo'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import ListComponent from './demo/listComponent';
const appkey = "demo13_1545210570249";

async function fetchAllStudents(){
    const students = await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + appkey)
    .then( res => res.json())
    .then( res => res.data)
    return students
}
async function render(){
    const list = await fetchAllStudents()
    ReactDOM.render(<ListComponent list={ list } ></ListComponent>, document.getElementById('root'))
}
// function ComponentDemp(){
//     const list = render()
//     return (
//         <ListComponent list={list}></ListComponent>
//     )
// }
// ReactDOM.render(
//   <React.StrictMode>
//     { ComponentDemo()}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
render()

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




