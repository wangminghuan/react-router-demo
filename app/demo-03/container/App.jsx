import React,{Component} from 'react';
import { Link } from 'react-router';
class App extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="father">
       <ul className="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="article">
          {this.props.children}
        </div>
     </div>
    )
      
  }
}
export default App

/*父组件嵌套子组件，加载任意一个子组件都会先加载他的父组件，如导航栏，就需要这样做*/