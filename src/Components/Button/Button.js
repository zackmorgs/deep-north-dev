import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './Button.css';

export class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      isHovered: true
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick(event) {
    console.log('btn: clicked');

    this.setState({
      isClicked: true
    });

    if (typeof this.props.onClick !== 'undefined') {
      this.props.onClick(event);
    }

    // do clicky stuff like event tracking
    if (typeof this.props.href !== 'undefined') {
      document.location.href = this.props.href;
    }
  }

  handleMouseEnter() {
    console.log('handleMouseEnter()');

    this.setState((previousState, currentProps) => {
      isHovered: !previousState.isHovered;
    });
  }
  handleMouseLeave() {
    console.log('handleMouseLeave()');

    this.setState((previousState, currentProps) => {
      isHovered: !previousState.isHovered;
    });
  }
  render() {
    console.log('Button render()');
    return (
      <a
        id={this.props.id}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={this.handleClick.bind(this)}
        className={classNames({
          btn: true,
          'btn-clicked': this.state.isClicked,
          'btn-hovered': this.stateisHovered,
          'primary': this.props.kind == 'primary'
        })}
      >
        {this.props.children}
      </a>
    );
  }
}

// class PrimaryButton extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Button {...this.props}>
//           {this.props.children}
//         </Button>
//       </React.Fragment>
//     );
//   }
// }

export class ButtonIcon extends Component {
  render() {
    return (
      <div id={this.props.id} className={'btn-icon'} href={this.props.href}>
        {this.props.children}
      </div>
    );
  }
}

export class ButtonText extends Component {
  render() {
    return <div className={'btn-text'}>{this.props.children}</div>;
  }
}

export default Button;
