import React from 'react';
import { MathComponent } from 'mathjax-react';

import SingleEquation from './SingleEquation';

export default class ListOfEquations extends React.Component {
  static exampleConfig = {
    title: "List of Equations",
    caption: `Here we render a list of static equations and display the results.`,
    relSrc: "examples/ListOfEquations.tsx"
  };
  render(){
    // TeX equations using JavaScript template literals
    const latex = String.raw`\displaystyle\sum_{i=1}^{k+1}i \displaystyle= \left(\sum_{i=1}^{k}i\right) +(k+1)
    \displaystyle \displaystyle= \frac{k(k+1)}{2}+k+1 
    \displaystyle= \frac{k(k+1)}{2}+k+1
    \displaystyle= \frac{k(k+1)+2(k+1)}{2}
    \displaystyle= \frac{(k+1)(k+2)}{2}
    \displaystyle= \frac{(k+1)((k+1)+1)}{2}`;
    const equations = [String.raw`ax^2+bx+c=0`, String.raw`x=\frac{-b\pm \sqrt{b^2-4ac}}{2a}`, latex];
    // Make a MathComponent for each equation
    const typesetEquations = equations.map((e, i) => <MathComponent tex={e} key={i} />);
    return (
      <SingleEquation {...ListOfEquations.exampleConfig}>
        { typesetEquations }
      </SingleEquation>
    );
  }
}
