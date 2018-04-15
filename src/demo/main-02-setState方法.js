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

    this.index = 0

    this.state = {
      initCount: props.count
    }
  }

  // 第一次 渲染之前执行 组件将要被挂载到页面
  componentWillMount() {
    console.log("componentWillMount")
    // 在渲染之前是拿不到 dom 的
    console.log(document.getElementById("btn"))

    // 一般可以用来发送 ajax 请求, 获取数据初始化渲染页面
    // setState 本身就是异步的
    this.setState({
      initCount: 100
    })
  }

  // 打豆豆
  ml_handleCount() {
    console.log( "打豆豆" )
    // 思路, 每调用一次, 让当前 state 中的 initCount +1

    // 取值: this.state.initCount
    // 不能这样设置: this.state.initCount 因为这样虽然能改变 state 中的值,
    // 但是不会触发 render 更新页面, 要通过 this.setState({}) 设置

    //this.state.initCount += 1;
    //console.log(this.state.initCount);

    // setState 操作是异步的, 所以需要在回调中拿到加后的值
    //this.setState({
    //  initCount: this.state.initCount + 1
    //}, function() {
    //  console.log( "加后的值: " + this.state.initCount )
    //})


    // setState 设置值, 还有另一种写法, 可以添加一些预前处理
    //this.setState( function ( preState, props ) => {
    //
    //  // 返回一个对象
    //  return {
    //    initCount: preState.initCount + 1
    //  }
    //})

    this.setState( ( preState, props ) => {

      // 返回一个对象
      return {
        initCount: preState.initCount + 1
      }
    })

  }

  render() {
    // 注意 render 里面肯定不能调用 setState, 会递归死循环
    // 页面更新了 --> 调用 render, 里面调用 setState --> 页面更新 --> ....
    console.log("生命周期-----render", ++this.index )
    return (
      <div>
        {
          this.state.initCount > 210 ? '豆豆被打死了' : ( <h1>打豆豆的次数: { this.state.initCount } </h1>)
        }
        <button id="btn" onClick= { () => { this.ml_handleCount() } } >开始打</button>
      </div>
    )
  }

}

// 3. 渲染
ReactDom.render( <Counter count='1'></Counter>, document.getElementById("app") )