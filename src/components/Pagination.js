import React from 'react'
import './pagination.css'
export default function Pagination(props){

    const panelNum = 5
    const pageNum = getPageNum(props)
    const minNum = getMin(pageNum, panelNum, props)
    const maxNum = getMax(minNum, pageNum, panelNum, props)

    function getPageNum(props){
        console.log('getPageNum', props)
        if(!props.total){
            return 1
        }
        const num = Math.ceil( props.total / props.pageSize )
        console.log('pageNum', num)
        return num
    }
    function getMin(totalPage, panelNum, props){
        var min = props.current - Math.floor( panelNum / 2)
        const maxMin = totalPage + 1 - panelNum
        if(maxMin > 0 && min > maxMin){
            min = maxMin
        } else if( min < 1){
            min = 1
        }
        return min
    }
    function getMax(min, totalPage, panelNum, props){
        var max = min + panelNum - 1
        if(max > totalPage){
            max = totalPage
        }
        return max
    }
    function toPage(cur, props){
        if(props.current === cur){
            return
        }
        props.onChange && props.onChange({
            pageNum: cur,
            pageSize: props.pageSize
        })
    }
    function changeSize(e, props){
        const size = e.target.value
        if(props.pageSize === size){
                return
        }
        props.onChange && props.onChange({
            pageNum: 1,
            pageSize: size
        })
    }
    let numItem = []
    for(let i =minNum; i<=maxNum;i++){
        let className = 'page-item'
        if(props.current === i){
            className += ' active'
        }
        numItem.push(<div className={className} key={i} data-index={i} onClick={() => toPage(i, props)}>{i}</div>)     
    }
    return(
            <div className="pagination-wrap">
                <div className={props.current === 1 ? 'page-item disabled' : 'page-item'} onClick={() => toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }>&lt;</div>
                { numItem }
                <div className={props.current === pageNum ? 'page-item disabled' : 'page-item'} onClick={() => toPage(props.current + 1 > pageNum ? pageNum : props.current + 1, props) }>&gt;</div>
                <div>
                    <select onChange={ (e) => changeSize(e, props)}>
                        <option value="10">10条/页</option>
                        <option value="20">20条/页</option>
                        <option value="30">30条/页</option>
                        <option value="40">40条/页</option>
                    </select>
                </div>
            </div>
    );
}
    

