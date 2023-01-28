import React from 'react';

class Array extends React.Component{
    state={
        arr: ['car','Motorbike']
    }
    render(){
       return(
        <div>
        <h1>Hello World</h1>
        <h1>{this.state.arr[0]}</h1>
        </div>
       )
    }
}
export default Array;