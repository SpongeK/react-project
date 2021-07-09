import React from 'react'
import ReactDOM from 'react-dom'

const ele =  document.getElementById('root')
const imgList = ['https://img12.360buyimg.com/imagetools/jfs/t1/98439/27/12738/127209/5e5096bbEf75e6306/9982520198c92849.jpg',
  'https://img13.360buyimg.com/imagetools/jfs/t1/105952/10/13102/270510/5e5377b9E937b8520/469e37444a397456.jpg',
  'https://img14.360buyimg.com/imagetools/jfs/t1/172414/23/10277/28957/60a22a1eE29e3973e/c0f71ed9becab70c.png']
let curIndex = 0
let timer = null
function start(){
  stop()
  timer = setInterval(() => {
    console.log(curIndex)
    // let imgDom = (<img src={imgList[curIndex]} alt={curIndex}></img>)
    curIndex = (curIndex+1) % 3
    render()
  }, 1000)
}
// let imgDom = (<img id="image" src={imgList[curIndex]} alt={curIndex}></img>)

function stop(){
  clearInterval(timer)
}
function render(){
  ReactDOM.render( (<img id="image" src={imgList[curIndex]} alt={curIndex}></img>), ele)
}
render()
// const imgEle = document.getElementById('image')
ele.addEventListener('mouseenter', () => {
  start()
})
ele.addEventListener('mouseleave', () => {
  stop()
})