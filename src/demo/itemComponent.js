import React from 'react'

export default function ItemComponent(props){
    return (
        <li>
            姓名：{props.name},
            性别：{props.sex === 1 ? '男' : '女'}
        </li>
    )
}