import React,{Component} from 'react';
import { Link } from 'react-router';
class App extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
     </div>
    )
      
  }
}
export default App
/*通过 link属性类似a标签的效果可以点击给url添加相应锚点*/