
### 1. Install dependencies
Move into your project directory and run:
```
npm install
```


### 2. Run project
```
npm start
```


### Other notes
If you want to add redux in `App` component, you have to use the `withRouter` function from `react-router-dom` in order to make the routing work properly.

#### Example:
```
// src/modules/App/components/App/index.js

import { Route, withRouter } from 'react-router-dom';

class App extends Component {
    // ...
}

const mapActionsToProps = (dispatch) =>
  bindActionCreators({
    // ...
  }, dispatch);

const mapStateToProps = (state) => ({
  // ...
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App));
```

P.S.: App is not ejected. You can eject your app if needed.
