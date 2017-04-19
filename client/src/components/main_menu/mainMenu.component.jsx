import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgButton from '../common_components/imgButton.component.jsx'

export default class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
      howToSplashActive: false,
      aboutSplashActive: false,
    }
  }

  onComponentDidMount() {
    // in another project Jquery was behaving differently when used in a similar manner so am using vanilla JS for now
    this.domSelf = document.getElementById("main-menu")
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div id="main-menu" className="fadeable">
        <ul>
          <li><ImgButton name="play"   imgSrc="static_assets/images/bear.png" toggler={this.props.togglers.startGame}/></li>
          <li><ImgButton name="how-to" imgSrc="static_assets/images/bear.png" toggler={this.props.togglers.howToSplash}/></li>
          <li><ImgButton name="about"  imgSrc="static_assets/images/bear.png" toggler={this.props.togglers.aboutSplash}/></li>
        </ul>
      </div>
    )
  }
}