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
          <li><Link activeStyle={{ color: '#ff552e' }} to="/about">About</Link></li>
          <li><Link activeStyle={{ color: '#ff552e' }} to="/contact">Contact</Link></li>
        </ul>
        <div className="article">
          {this.props.children}
        </div>
     </div>
    )
      
  }
}
export default App
/*activeStyle 属性可以设置当前活动组件的样式*/