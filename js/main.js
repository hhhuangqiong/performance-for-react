import React, { createElement, Component } from 'react';
import {render} from 'react-dom';
import Perf from 'react-addons-perf';
import ListItem from './ListItem'

function arrayGenerator(length) {
  return Array.apply(null, { length: length }).map(Number.call, Number)
}

let startRerender;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      multiplier: 1
    }
  }

  componentDidMount() {
    // console.log(new Date() - performance.timing.navigationStart)
  }


  componentDidUpdate() {
    Perf.stop('Perf');
    Perf.printInclusive();
    Perf.printWasted();

  }
  
  resetMultiplier() {
    Perf.start('Perf');
    this.setState({ multiplier: 2 })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.resetMultiplier.bind(this)}>Click Me</button>
        <ul>
          {
            arrayGenerator(5000).map(i => {
              return <ListItem key={i} text={i}/>
            })
          }
          {
            arrayGenerator(5000).map(i => {
              return <ListItem key={i} text={i + this.state.multiplier}/>
            })
          }
        </ul>
      </div>
    );
  }
}

render(<App />,document.getElementById('main'));


