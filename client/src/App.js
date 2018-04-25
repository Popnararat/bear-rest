
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBear } from './actions';

const renderBear = (bear) => (
  <div key={bear.id}>
    {bear.name}
      <button>x</button>
      </div>

)
class App extends Component {
  constructor(props){
    super(props)
    
  }
 
  render() {
    let bears = this.props.bear;
    return (
      <div>
        {
          bears.map(renderBear)
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => (
  {bear: state.bear}
)
export default connect(mapStateToProps)(App);App;