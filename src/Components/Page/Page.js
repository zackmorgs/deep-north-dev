import React, { Component } from 'react';
import './Page';

class Page extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log('Page : componentDidMount()', this.state);
    this.setState({
      isLoaded: true
    });
  }
  componentWillMount(){
    console.log('Page : componentWillMount()', this.state);
  }
  componentWillUpdate() {
    console.log('Page : componentWillUpdate()', this.state)
  }
  componentDidUpdate(){
    console.log('Page : updating...', this.state);
  }
  componentWillUnmount(){
    console.log('Page : componentWillUnmount()', this.state)
  }
  
  render() {
    let cssClass = 'loading';
    if (this.state.isLoaded) {
    }
    // } else {

    // }

    // if (this.state.isUpdating) {

    // }

    return (
      <div id='page-container' className={cssClass}>
        {this.props.children}
      </div>
    );
  }
}

export default Page;