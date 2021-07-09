import React from 'react'
import ItemComponent from './itemComponent'

export default class ListComponent extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }
    
    render(){
        return (
            <ul>
                {
                    this.props.list.forEach( item => {
                        <ItemComponent {...item}></ItemComponent>
                    })
                }
            </ul>
        )
    }
}