import React, { Component } from 'react'
import CheckBoxGroup from './index';

export default class Test extends Component {
  state = {
    datas: [
      {
          id: 1,
          value: 'movie',
          label: '电影'
      },
      {
          id: 2,
          value: 'music',
          label: '音乐'
      },
      {
          id: 3,
          value: 'dance',
          label: '舞蹈'
      },
      {
          id: 4,
          value: 'paint',
          label: '画画'
      },
    ],
    checkDatas: []
  }

  render() {
    console.log('Test render')
    return (
        <CheckBoxGroup {...this.state} onChange={(arr) => {
          this.setState({
            checkDatas: arr
          })
        }}></CheckBoxGroup>
    )
  }
}
