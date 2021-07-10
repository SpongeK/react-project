import React from 'react'
import BallComponent from './BallComponent'
import { getRandom } from '../util'

export default class BallListComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ballList: []
    }

    this.timer = setInterval( () => {
      const ballInfo = {
        left: getRandom(0, window.innerWidth),
        top: getRandom(0, window.innerHeight),
        bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`,
        xSpeed: getRandom(50, 500),
        ySpeed: getRandom(50, 500),
      }
      this.setState({
        // ballList: this.state.ballList.push(ballInfo)  注意：需要重新进行赋值而不是改变原有数据
        ballList: [...this.state.ballList, ballInfo]
      })
      if(this.state.ballList.length > 10){
        clearInterval(this.timer)
      }
    }, 1000)
    
  }

  render(){
    return (
      this.state.ballList.map( item => {
        return <BallComponent {...item}></BallComponent> 
      })
    )
  }
}
