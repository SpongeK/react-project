import React from 'react'
import Pagination from './Pagination'
export default class PaginationTest extends React.Component{
    state = {
        current: 1,
        total: 100,
        pageSize: 10
    }

    changePage = (pagination) => {
        console.log(pagination)
        this.setState({
            current: pagination.pageNum,
            pageSize: pagination.pageSize
        })
    }

    render(){
        return (
            <Pagination {...this.state} onChange={ this.changePage }></Pagination>
        )
    }
}