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

  // 第一次 渲染之后执行, 这时候, 页面已经渲染完了
  // 如果需要获取元素, 那么就在 componentDidMount 中写
  componentDidMount() {
    console.log("componentDidMount");
    console.log(document.getElementById("btn")) // 可以拿到 dom 对象, 因为已经渲染了

    // 在这个里面调用 setState, 将来会在运行时, state changed, 然后在运行阶段更新
    this.setState({
      initCount: 200
    })
  }


  // 打豆豆
  ml_handleCount() {
    console.log( "打豆豆" )
    // 思路, 每调用一次, 让当前 state 中的 initCount +1

    this.setState({
      initCount: this.state.initCount + 1
    })


  }

  render() {
    // 注意 render 里面肯定不能调用 setState, 会递归死循环
    // 页面更新了 --> 调用 render, 里面调用 setState --> 页面更新 --> ....
    console.log("生命周期-----render", ++this.index )
    return (
      <div>
        {
          this.state.initCount > 210 ? '豆豆被打死了' : (
            <ChildComponent initCount={ this.state.initCount }></ChildComponent>
          )
        }
        <button id="btn" onClick= { () => { this.ml_handleCount() } } >开始打</button>
      </div>
    )
  }


  // 每次 state change 改变时, 会调用, 根据返回值, 来判断是否需要 render
  // 返回 true 重新渲染, 否则不渲染
  shouldComponentUpdate( nextProps, nextState ) {
    console.log( 'shouldComponentUpdate 是否需要更新' )

    // 可以过滤掉一些改变, 可以减少更新渲染频率
    // nextState 表示已经改变的值, 为最新的
    return nextState.initCount % 2 === 0;
  }

  componentWillUpdate( nextProps, nextState ) {
    console.log( "componentWillUpdate" )
  }

  componentDidUpdate( preProps, preState ) {
    console.log( "componentDidUpdate" )
  }

}


class ChildComponent extends React.Component {
  render() {
    return ( <h1>打豆豆的次数: { this.props.initCount } </h1>)
  }
  componentWillUpdate(nextProps, nextState) {
    //console.log(nextProps);
  }
  componentWillReceiveProps( nextProps ) {
    console.log(nextProps);
  }
  componentWillUnmount() {
    console.log( '组件被销毁了' )
  }
}


// 3. 渲染
ReactDom.render( <Counter count='1'></Counter>, document.getElementById("app") )