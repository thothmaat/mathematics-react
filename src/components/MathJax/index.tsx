import BasicTypesetting from './BasicTypesetting';
import ListOfEquations from './ListOfEquations';
import Counter from './Counter';
import LiveTyping from './LiveTyping';
import React from 'react';
const allComponents = [BasicTypesetting, ListOfEquations, Counter, LiveTyping];
export default class MathJax extends React.Component {

  render() {
    return (
      <div className="container" >
          {allComponents.map((Cmp, i) => (
              <Cmp key={i} />
          ))}
      </div>
    )
  }
}