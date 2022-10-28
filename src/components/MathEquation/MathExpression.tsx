import React, { Component } from 'react';
import { Input,Select } from 'antd';
// const  { Option } = Select;
export default class MathExpression extends Component {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props:any){
        super(props)
        this.state = {a:1,b:1,c:0}
    }

    onChangeHandler_a (event:any) {
        const value = event.target.value
        this.setState({a:value})
        console.log(value)
    }
    onChangeHandler_b (event:any) {
        const value = event.target.value
        this.setState({b:value})
        console.log(value)
    }
    onChangeHandler_c (event:any) {
        const value = event.target.value
        this.setState({c:value})
        console.log(value)
    }

  render() {
    return (
        <div style={{width: '200px', height: '200px'}}>
            <span>Y  =  </span>
            <Input placeholder='二次项系数' type='number' onChange={(e:any) => this.onChangeHandler_a(e)}></Input>
            <span>  X^2  </span>
            <Input placeholder='一次项系数' type='number' onChange={(e:any) => this.onChangeHandler_b(e)}></Input>
            <span> X </span>
            <Input placeholder='常数项' type='number' onChange={(e:any) => this.onChangeHandler_c(e)}></Input>
        </div>
    )
  }
}
