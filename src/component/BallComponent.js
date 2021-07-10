import React from 'react'
import './ballComponent.css'

export default class BallComponent extends React.Component {
  constructor(props){
    super(props)
    /*
     props -> {
       xSpeed: x方向上的速度
       ySpeed: y方向上的速度
       left: 初始x上的位置
       top: 初始y上的位置
     }
    */
    this.state = {
      left: props.left || 0,
      top: props.top || 0,
      xSpeed: props.xSpeed,
      ySpeed: props.ySpeed,
    }
    this.run()
  }

  run(){
    const delay = 16
    setInterval(() => {
      let xDis = this.state.xSpeed * delay / 1000
      let yDis = this.state.ySpeed * delay / 1000
      let nowLeft = this.state.left + xDis
      let nowTop = this.state.top + yDis
      if(nowLeft > window.innerWidth - 100){
        nowLeft = window.innerWidth - 100
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      } else if(nowLeft <= 0){
        nowLeft = 0
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      }
      if(nowTop > window.innerHeight - 100){
        nowTop = window.innerHeight - 100
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      } else if(nowTop <= 0){
        nowTop = 0
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      }
      this.setState({
        left: nowLeft,
        top: nowTop,
      })
    }, delay)
  }
  
  render() {
    const styleParam = {
      left: this.state.left,
      top: this.state.top,
      background: this.props.bg
    }
    return (
      <div className="ball" style={styleParam}></div>
    )
  }
};
