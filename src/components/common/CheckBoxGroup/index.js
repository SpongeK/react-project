import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CheckBoxGroup extends Component {
  static propTypes = {
    datas: PropTypes.array.isRequired,
    checkDatas: PropTypes.array,
    onChange: PropTypes.func
  }

  handleChange = (e) => {
    const { value, checked } = e.target
    let newCheckArr;
    if(checked){
      newCheckArr = [...this.props.checkDatas, value]
    }else{
      newCheckArr = this.props.checkDatas.filter( item => value !== item)
    }
    this.props.onChange && this.props.onChange(newCheckArr)
  }

  getCheckBoxes(){
    console.log('checkDatas', this.props.checkDatas)
    return this.props.datas.map(item => {
      console.log('checked', item, this.props.checkDatas.includes(item.value))
      return <label key={item.value}>
        <input type="checkbox" value={item.value} checked={this.props.checkDatas.includes(item.value)} onChange={this.handleChange}></input>
        {item.label}
      </label>
    })
  }
  render() {
    return (
      <div>
        {this.getCheckBoxes()}
      </div>
    )
  }
}
