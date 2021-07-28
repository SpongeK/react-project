import React from 'react'
import './pagination.css'
export default class Pagination extends React.Component{
    // state = {
    //     current: this.props.current || 1,
    //     total: this.props.total || 100,
    //     pageSize: this.props.pageSize || 10,
    //     pageNum: 1
    // }
    constructor(props){
        super(props)
        this.state = {
            current: props.current || 1,
            total: props.total || 100,
            pageSize: props.pageSize || 10,
            pageNum: Math.floor( props.total / props.pageSize )+1
        }
        // this.getPageNum()
    }
    
    getPageNum(){
        console.log('getPageNum', this.state)
        const num = Math.floor( this.state.total / this.state.pageSize )+1
        this.setState({
            pageNum: num
        }, () => {
            console.log('change', this.state)
        })
    }

    handleClick = (e) => {
       const { index } = e.currentTarget.dataset
       this.setState({
           current: Number(index)+1
       })
    }
    handleDownPage = () => {
        const minPage = this.state.current - 1
        this.setState({
            current: minPage > 0 ? minPage : 1
        })
    }
    handleUpPage = () => {
        const maxPage = this.state.current + 1
        this.setState({
            current: maxPage > this.state.pageNum ? this.state.pageNum : maxPage
        })
    }
    render(){
        console.log('render')
        let numItem = []
        
        for(let i =0; i<this.state.pageNum;i++){
            let className = 'page-item'
            if(this.state.current === i+1){
                className += ' active'
            }
            numItem.push(<div className={className} key={i} data-index={i} onClick={this.handleClick}>{i+1}</div>)     
        }
        let downBtnClassName = 'page-item',upBtnClassName = 'page-item'
        if(this.state.current === 1){
            downBtnClassName += ' disabled'
        }else if(this.state.current === this.state.pageNum){
            upBtnClassName += ' disabled'
        }
        return (
            <div className="pagination-wrap">
                <div className={downBtnClassName} onClick={ this.handleDownPage }>&lt;</div>
                { numItem }
                <div className={upBtnClassName} onClick={ this.handleUpPage }>&gt;</div>
                <div>
                    <select>
                        <option>10条/页</option>
                        <option>20条/页</option>
                        <option>30条/页</option>
                        <option>40条/页</option>
                    </select>
                </div>
            </div>
        )
    }
}