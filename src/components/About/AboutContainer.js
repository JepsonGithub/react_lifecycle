/**
 * Created by Jepson on 2018/4/15.
 */

import React from 'react'


export default class AboutContainer extends React.Component {

  constructor( props ) {
    // 调用完 super 以后, 才能使用 this
    super( props )
  }

  render() {
    return (
      <div>
        <h1> 我是 about </h1>
      </div>
    )
  }

}

