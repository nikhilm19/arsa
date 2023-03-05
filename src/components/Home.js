
import React from 'react';
import Intro from './Intro';

export class Home extends React.Component {
  constructor(){
    super()
  }

    render(){

        return (
            <div className="App">
              <Intro/>
            </div>
          );
    }
 
}

export default Home;
