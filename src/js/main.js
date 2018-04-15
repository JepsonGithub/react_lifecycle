// 1. 导入
import React from 'react'
import ReactDom from 'react-dom'


// 打豆豆
// 2. 创建
class Counter extends React.Component {

  // 设置默认的属性
  static defaultProps = {
    count: 3
  }

  constructor( props ) {
    super( props )

    // 绑定 this 指向
    this.ml_change = this.ml_change.bind( this )

    this.state = {
      initCount: props.count
    }
  }

  // 第一次 渲染之前执行 组件将要被挂载到页面
  componentWillMount() {
    this.setState({
      initCount: 0,
      inputValue: "哈哈"
    })
  }

  componentDidMount() {

  }

  // 打豆豆
  // 箭头函数的 this 由环境决定
  ml_handleCount= () => {
    console.log( "打豆豆" )

    this.setState({
      initCount: this.state.initCount + 1
    })

  }

  ml_change( e ) {
    console.log( e.target.value );

    this.setState({
      inputValue: e.target.value + "--"
    })
  }

  render() {
    // 注意 render 里面肯定不能调用 setState, 会递归死循环
    // 页面更新了 --> 调用 render, 里面调用 setState --> 页面更新 --> ....
    console.log("生命周期-----render" )
    return (
      <div>
        <h1>打豆豆的次数: { this.state.initCount } </h1>
        <button id="btn" onClick={  this.ml_handleCount }>开始打</button>
        <input type="text" value={ this.state.inputValue } onChange={ this.ml_change }/>
      </div>
    )
  }

}

// 3. 渲染
ReactDom.render( <Counter count='1'></Counter>, document.getElementById("app") )