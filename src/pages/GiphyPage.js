import React, { Component } from "react";
class GiphyPage extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  componentWillUnmount() {
    console.log("unmounting, not used often.  Maybe sockets");
  }

  render() {
    return (
      <main>
        <h1>Giphy page</h1>
      </main>
    );
  }
}

export default GiphyPage;
