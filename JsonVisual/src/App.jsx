import React, { Component } from 'react';
import { render } from 'react-dom';
import convertToRawNodeDatum from './rawtoformat.tsx'
import Tree from 'react-d3-tree';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      fileContent: ''
    };
    
  }

  
  handleFileChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = () => {
      this.setState({fileName: file.name, fileContent: JSON.parse(reader.result)});
      
      
      const data3 = convertToRawNodeDatum(JSON.parse(reader.result));
      console.log(data3)


    }
    reader.onerror = () => {
      console.log("File error!", reader.error);
    }

  }
  render() {
    return (
      <div>
        <h1> File Reader</h1>
        <input type='file'onChange={this.handleFileChange}></input>
        
        <br/>

      </div>
    )
  }
}

export default App














