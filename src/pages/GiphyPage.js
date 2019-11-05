import React, { Component } from "react";
class GiphyPage extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    console.log("mounted");
    this.setState({
      gifs: ["https://media.giphy.com/media/3o85xGRWMlHdGB1vMs/giphy.gif"]
    });
  }

  componentWillUnmount() {
    console.log("unmounting, not used often.  Maybe sockets");
  }

  render() {
    return (
      <main>
        <h1>Giphy page</h1>
        {this.state.gifs.map(gif => (
          <img src={gif} alt="" />
        ))}
      </main>
    );
  }
}

export default GiphyPage;
