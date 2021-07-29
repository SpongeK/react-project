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
            panelNum: 5,
            current: props.current || 1,
            total: props.total || 100,
            pageSize: props.pageSize || 10,
            // pageNum: Math.floor( props.total / props.pageSize )+1
        }
        
    }
    
    getPageNum(){
        console.log('getPageNum', this.state)
        const num = Math.ceil( this.state.total / this.state.pageSize )
        console.log('pageNum', num)
        return num || 1
    }

    handleClick = (index) => {
       if(this.state.current === index){
           return
       }
       this.setState({
           current: index
       })
    }
    // handleDownPage = () => {
    //     const minPage = this.state.current - 1
    //     if(minPage < 1){
    //         return
    //     }
    //     this.setState({
    //         current: minPage > 0 ? minPage : 1
    //     })
    // }
    // handleUpPage = () => {
    //     const maxPage = this.state.current + 1
    //     if(maxPage)
    //     this.setState({
    //         current: maxPage > this.state.pageNum ? this.state.pageNum : maxPage
    //     })
    // }
    toPage(cur){
        if(this.state.current === cur){
            return
        }
        this.setState({
            current: cur
        })
        // this.props.onChange && this.props.onChange({
        //     pageNum: cur,
        //     pageSize: this.state.pageSize
        // })
    }
    changeSize(e){
        const size = e.target.value
        if(this.state.pageSize === size){
             return
        }
        this.setState({
            pageSize: size,
            current: 1
        })
    }
    getMin(totalPage){
        var min = this.state.current - Math.floor( this.state.panelNum / 2)
        const maxMin = totalPage - this.state.panelNum
        if(maxMin + 1 < min ){
            min = maxMin +1
        }
        if(min < 1){
            min = 1
        }
        return min
    }
    getMax(min, totalPage){
        var max = min + this.state.panelNum - 1
        if(max > totalPage){
            max = totalPage
        }
        return max
    }
    render(){
        const pageNum = this.getPageNum()
        const minPage = this.getMin(pageNum)
        const maxPage = this.getMax(minPage, pageNum)
        console.log('render', pageNum, minPage, maxPage)
        let numItem = []
        
        for(let i =minPage; i<=maxPage;i++){
            let className = 'page-item'
            if(this.state.current === i){
                className += ' active'
            }
            numItem.push(<div className={className} key={i} data-index={i} onClick={() => {this.handleClick(i)}}>{i}</div>)     
        }
        return (
            <div className="pagination-wrap">
                <div className={this.state.current === 1 ? 'page-item disabled' : 'page-item'} onClick={() => this.toPage(this.state.current - 1 < 1 ? 1 : this.state.current - 1) }>&lt;</div>
                { numItem }
                <div className={this.state.current === pageNum ? 'page-item disabled' : 'page-item'} onClick={() => this.toPage(this.state.current + 1 > pageNum ? pageNum : this.state.current + 1) }>&gt;</div>
                <div>
                    <select onChange={ (e) => this.changeSize(e)}>
                        <option value="10">10条/页</option>
                        <option value="20">20条/页</option>
                        <option value="30">30条/页</option>
                        <option value="40">40条/页</option>
                    </select>
                </div>
            </div>
        )
    }
}