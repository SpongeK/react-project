import React from 'react'
import './pagination.css'
export default class Pagination extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            panelNum: 5
        }
        
    }
    
    getPageNum(){
        console.log('getPageNum', this.props)
        if(!this.props.total){
            return 1
        }
        const num = Math.ceil( this.props.total / this.props.pageSize )
        console.log('pageNum', num)
        return num
    }
    getMin(totalPage){
        var min = this.props.current - Math.floor( this.state.panelNum / 2)
        const maxMin = totalPage + 1 - this.state.panelNum
        if(maxMin > 0 && min > maxMin){
            min = maxMin
        } else if( min < 1){
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
    toPage(cur){
        if(this.props.current === cur){
            return
        }
        this.props.onChange && this.props.onChange({
            pageNum: cur,
            pageSize: this.props.pageSize
        })
    }
    changeSize(e){
        const size = e.target.value
        if(this.state.pageSize === size){
             return
        }
        this.props.onChange && this.props.onChange({
            pageNum: 1,
            pageSize: size
        })
    }
    
    render(){
        const pageNum = this.getPageNum()
        const minPage = this.getMin(pageNum)
        const maxPage = this.getMax(minPage, pageNum)
        console.log('render', pageNum, minPage, maxPage)
        let numItem = []
        for(let i =minPage; i<=maxPage;i++){
            let className = 'page-item'
            if(this.props.current === i){
                className += ' active'
            }
            numItem.push(<div className={className} key={i} data-index={i} onClick={() => this.toPage(i)}>{i}</div>)     
        }
        return (
            <div className="pagination-wrap">
                <div className={this.props.current === 1 ? 'page-item disabled' : 'page-item'} onClick={() => this.toPage(this.props.current - 1 < 1 ? 1 : this.props.current - 1) }>&lt;</div>
                { numItem }
                <div className={this.props.current === pageNum ? 'page-item disabled' : 'page-item'} onClick={() => this.toPage(this.props.current + 1 > pageNum ? pageNum : this.props.current + 1) }>&gt;</div>
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