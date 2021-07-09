import React from 'react'
import ListComponent from './listComponent';
const appkey = "demo13_1545210570249";

async function fetchAllStudents(){
    const students = await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + appkey)
    .then( res => res.json())
    .then( res => res.data)
    return students
}
async function render(){
    return await fetchAllStudents()
}
function ComponentDemp(){
    const list = render()
    return (
        <ListComponent list={list}></ListComponent>
    )
}
export default ComponentDemp