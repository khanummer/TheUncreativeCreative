import React, { Component } from 'react';
import './NameGenerator.css';
import { withRouter } from 'react-router-dom';

class NameGenerator extends Component {
    state = {
        currentName: 'name will appear here',
        firstHalfNames: ['Devastation', 'Technicalization', 'Obscenity', 'War', 'Hair', 'Disgust', 'Love', 'Happiness', '.44 Callibur', 'Destiny', 'PTSD', 'ADHD', 'Horror', 'Turtles'],
        secondHalfNames: ['Me', 'You', 'Us', 'a Glizzy', 'a Stick', 'this Man over here', 'a Bag', 'mystic empires', 'nothing', 'everything', 'umbrellas', 'the now']

    }


    generateName = () => {
        console.log('name generated')
        let currentFirstName = this.state.firstHalfNames[Math.floor(Math.random()*this.state.firstHalfNames.length)];
        let currentSecondName = this.state.secondHalfNames[Math.floor(Math.random()*this.state.secondHalfNames.length)];
        let newName = `${currentFirstName} of ${currentSecondName}`
        this.setState({
            currentName: newName
        })
    }

  render() {
    return (
      <div className="name-generator">
           ART NAME GENERATOR
            <div>{this.state.currentName}</div>
            <button onClick={() => this.generateName()}>generate name</button>
      </div>
    );
  }
}

export default withRouter(NameGenerator);