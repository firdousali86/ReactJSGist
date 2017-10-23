import React, { Component } from 'react';
// import {Images} from '../../helpers';

import FormManager from "../../managers/FormManager"

class Home extends Component {
    render() {
      return (
        <div className="App">
          <FormManager />
        </div>
      );
    }
  }
  
  export default Home;
  