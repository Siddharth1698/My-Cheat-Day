import React from 'react';
import NavbarModule from './components/NavbarModule';
import ReactDOM from 'react-dom';


class App extends React.Component {

  render(){
    return(
      < NavbarModule />
  );
  }
}




ReactDOM.render(<App/>,document.querySelector('#root'));