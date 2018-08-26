import React, { Component } from 'react';
import './Page.css';

export class Page extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded : false
    };
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
    return (
      <div id='page-container' className={ this.state.isLoaded ? ('loaded') : ('loading') }>
        {this.props.children}
      </div>
    );
  }
}

export default Page;