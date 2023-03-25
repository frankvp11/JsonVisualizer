import React, { Component } from 'react';
import { render } from 'react-dom';


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
    reader.readAsText(file);
    reader.onload = () => {
      this.setState({fileName: file.name, fileContent: reader.result});
      console.log(reader.result);
    }
    reader.onerror = () => {
      console.log("File eror!", reader.error);
    }

  }
  render() {
    return (
      <div>
        <h1> File Reader</h1>
        <input type='file'onChange={this.handleFileChange}></input>
        <br/>
        {/* <p> {this.state.fileName} </p>
        <p> {this.state.fileContent}</p> */}




      </div>
    )
  }
}

export default App














