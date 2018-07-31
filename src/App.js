import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {

  state = {
    decodedString: "",
    imgUrl: ""
  }

  decodeString = function() {
    let textfield = document.getElementById("inputField");
    let decodedString = atob(textfield.value);

    this.setState({
      decodedString: decodedString,
      imgUrl: "http://wx2.sinaimg.cn/bmiddle/86883a42gy1fsys3gxussj20hs0hswge.jpg"
    });
  }

  render() {
    return (
      <div class="main-div">
          <input type="text" placeholder="What do you wanna tell me?" id="inputField"/>
          <button onClick={() => this.decodeString()} >Yes</button>
        <h3>{this.state.decodedString}</h3>
        <img src={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;