import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Componet {
  render() {
    return (
      <div>
        <Button>button</Button>
        <hr />
        <Label>label<Label>
      </div>
    )
  }
}

const Button = (props) => <button>{props.children}</button>

class Label extends React.Component {
  render(){
    return (
      <label>{this.props.children}</label>
    )
  }
}
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update(){
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount(){
//     console.log('componentWillMount')
//     this.setState({m: 2})
//   }
//   componentDidMount(){
//     console.log('componentDidMount')
//     this.inc = setInterval(this.update,500)
//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount')
//     clearInterval(this.inc)
//   }
//   render(){
//     console.log('render');
//     return <button onClick={this.update}>
//     {this.state.val * this.state.m}</button>
//   }
// }
//
// class Wrapper extends React.Component {
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode( document.getElementById('a'))
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }


//  {
//   constructor(){
//     super();
//     this.state = {a: ''}
//   }
//   update(e){
//     this.setState({
//       a: this.refs.a.value,
//       b: this.refs.b.value
//     })
//   }
//   render(){
//     return (
//       <div>
//         <input
//         ref="a"
//         type="text"
//         onChange={this.update.bind(this)}
//         />{this.state.a}
//         <hr />
//         <input
//         ref="b"
//         type="text"
//         onChange={this.update.bind(this)}
//         />{this.state.b}
//       </div>
//     )
//   }
// }


//  {
//   constructor(){
//     super();
//     this.state = {currentEvent: '---'}
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({currentEvent: e.type})
//   }
//   render(){
//     return(
//       <div>
//         <textarea
//           onKeyPress={this.update}
//           onCopy={this.update}
//           onCut={this.update}
//           onPaste={this.update}
//           onFocus={this.update}
//           onBlur={this.update}
//           onDoubleClick={this.update}
//           onTouchStart={this.update}
//           onTouchMove={this.update}
//           onTouchEnd={this.update}
//           cols="30"
//           rows="10" />
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }


//  {
//   render(){
//     return <Title text="12345678"/>
//   }
// }
//
// const Title = (props) => <h1>Title: {props.text}</h1>
//
// Title.propTypes = {
//   text(props, propName, component){
//     if(!(propName in props)){
//       return new Error(`missing ${propName}`)
//     }
//     if(props[propName].length < 6){
//       return new Error(`${propName} was too short`)
//     }
//   }
// }



//   render(){
//     return <button>I <Heart /> React</button>
//   }
// }
//
// class Heart extends React.Component {
//   render(){
//     return <span>&hearts;</span>
//   }
// }
//
// const Button = (props) => <button>{props.children}</button>

 //  constructor(){
 //    super();
 //    this.state = {
 //      txt: "this is the state txt",
 //    }
 //  }
 //  update( e ){
 //    this.setState({txt: e.target.value})
 //  }
 //   render() {
 //     return (
 //       <div>
 //          <h1>{this.state.txt}</h1>
 //          <Widget update={this.update.bind(this)} />
 //          <Widget update={this.update.bind(this)} />
 //          <Widget update={this.update.bind(this)} />
 //       </div>
 //    )
 //   }
 // }
 //
 // const Widget = (props) =>
 // <input type="text" onChange={props.update}/>
 //

// // App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
//  }
// App.defaultProps = {
//   txt: "this is the default text"
// }

//const App = () => <h1> Hello Stateless </h1>

export default App
