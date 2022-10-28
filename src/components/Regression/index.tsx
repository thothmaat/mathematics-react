import React, { Component } from 'react'
import { MathComponent } from 'mathjax-react'

export default class Regression extends Component {
  render() {
    //MathML equation using JavaScript templete literals
    const mathml = "<math>\n" +
    "    <mrow>\n" +
    "        <mrow>\n" +
    "            <mi>f</mi>\n" +
    "            <mo>(</mo>\n" +
    "            <mi>x</mi>\n" +
    "            <mo>)</mo>\n" +
    "        </mrow>\n" +
    "        <mo>=</mo>\n" +
    "        <mrow>\n" +
    "            <mmultiscripts>\n" +
    "                <mo>&Integral;</mo>\n" +
    "                <mi>a</mi>\n" +
    "                <mi>b</mi>\n" +
    "            </mmultiscripts>\n" +
    "            <mrow>\n" +
    "                <mi>K</mi>\n" +
    "                <mo>(</mo>\n" +
    "                <mi>x</mi>\n" +
    "                <mo>,</mo>\n" +
    "                <mi>t</mi>\n" +
    "                <mo>)</mo>\n" +
    "            </mrow>\n" +
    "            <mrow>\n" +
    "                <mi>&phi;</mi>\n" +
    "                <mo>(</mo>\n" +
    "                <mi>t</mi>\n" +
    "                <mo>)</mo>\n" +
    "            </mrow>\n" +
    "            <mi>d</mi>\n" +
    "            <mi>t</mi>\n" +
    "        </mrow>\n" +
    "    </mrow>\n" +
    "</math>"
    //tex templete
    const latex = `\\displaystyle \\iiint\\limits_\\Omega f(x,y,z)dv=\\sum _{i=1}^n f(\\xi _i,\\eta _i,\\zeta _i)\\Delta v_i`
    return (
        <MathComponent tex={latex} />
        // <MathComponent mathml={mathml} />
    )
  }
}
