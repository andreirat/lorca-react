import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class AppContainer extends React.Component {
  
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
  
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(
    {
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);