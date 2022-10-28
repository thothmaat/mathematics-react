import React, { Component } from 'react'
// import MathExpression from './MathExpression'
import * as MathJaxColor from '../MathJaxColor'

interface IMathEquationProps{
  tatex: string;
}

export default class MathEquation extends Component {



  render() {
    const latex0 = '\\displaystyle \\iiint\\limits_\\Omega f(x,y,z)dv=\\sum _{i=1}^n f(\\xi _i,\\eta _i,\\zeta _i)\\Delta v_i'

    const latex1 = `\\displaystyle \\color{Red}\\iiint _\\limits\\color{Orange}\\Omega \\color{#d6cc35}f\\color{#d6cc35}(\\color{Red}x\\color{Red},\\color{Red}y\\color{Red},\\color{Red}z\\color{Red})\\color{Red}d\\color{Red}v = \\color{#b935d6} \\sum _ \\limits\\color{Blue}{i=1}\\limits ^\\color{Green}n \\color{Red}f\\color{Red}(\\color{Red}\\xi _\\color{Red}i\\color{Red},\\color{Red}\\eta _\\color{Red}i\\color{Red},\\color{Red}\\zeta _\\color{Red}i\\color{Red})\\color{Red}\\Delta \\color{Red}v_\\color{Red}i`
    
    const latex = `\\displaystyle 1 +  \\frac{q^2}{(1-q)}+\\frac{q^6}{(1-q)(1-q^2)}+\\cdots = \\displaystyle \\color{#10df5d}\\prod_\\limits{j=0}\\limits^{\\infty}\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},\\displaystyle\\text{ for }\\lvert q\\rvert < 1.`
    return (
      <div>
          <MathJaxColor.Context input='tex'>
              <div style={{height: '200px',width: '600px',textAlign: 'center'}}>
                  <MathJaxColor.Node>{latex1}</MathJaxColor.Node>
                  <MathJaxColor.Node>{latex}</MathJaxColor.Node>
                  <MathJaxColor.Node>{latex0}</MathJaxColor.Node>
              </div>
          </MathJaxColor.Context>
      </div>
    )
  }
}
