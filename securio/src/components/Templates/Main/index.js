import React, { Component } from 'react';

import Header from '../../Header';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />

        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
