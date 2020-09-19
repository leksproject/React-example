import React from 'react';

class CycleCounter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            increment : 0
        }

        this.handleCounter = this.handleCounter.bind(this);
    }

    handleCounter(){

        // {this.state.increment !== this.props.cycle &&

        if(this.state.increment < this.props.cycle){
            this.setState({increment : this.state.increment + 1})
      
        }
        else{
            this.setState({increment : 0})
        }
        console.log("increment",this.state.increment);
    }

    render() {
        return (
          <button
            data-testid="cycle-counter"
            style={{ fontSize: '1rem', width: 120, height: 30, }}
          onClick={this.handleCounter}>{this.state.increment}</button>
        );
      }
}

export default CycleCounter;