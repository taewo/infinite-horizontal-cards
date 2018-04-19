import React, { Component } from 'react';

const Card = ({name, age}) => {
  return (
    <div className="card">
      {name},,,
      {age}
    </div>
  )
}

class Cards extends Component {
  state = {
    lists: [
      {
        name: 'a',
        age: 1
      },
      {
        name: 'b',
        age: 2
      },
      {
        name: 'c',
        age: 3
      },
      {
        name: 'd',
        age: 4
      },
      {
        name: 'e',
        age: 5
      },
    ]
  }
  render() {
    const { lists } = this.state;
    return (
      <div className="cards">
        {lists.map((data, i) => {
          return (
            <Card
              name={data.name}
              age={data.age}
              />
          )
        })}
      </div>
    )
  }
}

export default Cards;
