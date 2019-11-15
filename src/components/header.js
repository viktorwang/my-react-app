import { Link } from "gatsby"
import React from "react"
import logo from "../viktorImage/test.png"
import './header.css'



class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if(scrollTop > 50){
      this.setState({ hasScrolled: true});
    }else{
      this.setState({ hasScrolled: false});
    }
  }

  render(){
    return (
      <div className={ this.state.hasScrolled ? 'theHeader scrolled' : 'theHeader' }>
        <div className="theHeaderWrap">
          <Link to="" className="logo"><img src={require('../viktorImage/test.png')} width="30" /></Link>
          <Link to="/course">Course</Link>
          <Link to="/course">Course</Link>
          <Link to="/course">Course</Link>
          <Link to="/course">Course</Link>
        </div>
      </div>
    )
  }
}


export default Header
