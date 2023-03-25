import React, { Component } from 'react';
import { render } from 'react-dom';
import convertToRawNodeDatum from './rawtoformat.tsx'
import Tree from 'react-d3-tree';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {

      fileContent: [{ id: '0', label: 'Root' }] 
    };
    
  }

  
  handleFileChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = () => {
      this.setState({fileContent: convertToRawNodeDatum(JSON.parse(reader.result))}); // convertToRawNodeDatum
      //this.state.fileContent = (JSON.parse(reader.result));
      //this.setState()
      console.log(this.state.fileContent);
      //const data3 = convertToRawNodeDatum(JSON.parse(reader.result));
     // console.log(data3)
      render();
        

    }
    reader.onerror = () => {
      console.log("File error!", reader.error);
    }

  }
  render() {
    return (
      <div  style={{ width: '100em', height: '50em' }}>
        <h1> File Reader</h1>
        <input type='file'onChange={this.handleFileChange}></input>
        <Tree class='hi' data={this.state.fileContent}/>
        <br/>

      </div>
    )
  }
}

export default App
