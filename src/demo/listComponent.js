import React from 'react'
import ItemComponent from './itemComponent'

export default class ListComponent extends React.Component{

    constructor(props){
        super(props)
        this.props = props
        console.log('props', this.props)
    }
    
    render(){
        // const ele = this.props.list.map( item => <ItemComponent {...item}/>)
        return (
            <ul>
                {
                    // ele
                    this.props.list.map( item => {
                       return <ItemComponent {...item}></ItemComponent>
                    })
                }
            </ul>
        )
    }
}