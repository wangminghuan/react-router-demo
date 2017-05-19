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