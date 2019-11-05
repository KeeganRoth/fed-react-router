import React, { Component } from "react";
import { SimpleForm } from "../components/SimpleForm";
import { fetchGiphyUrls } from "../giphy";
class GiphyPage extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    fetchGiphyUrls("test").then(urls => this.setState({ gifs: urls }));
  }

  handleSubmit = text => {
    console.log("submitted text", text);
    fetchGiphyUrls(text).then(urls => this.setState({ gifs: urls }));
  };

  componentWillUnmount() {}

  render() {
    return (
      <main>
        <h1>Giphy page</h1>
        <SimpleForm onFormSubmit={this.handleSubmit} />
        {this.state.gifs.map(gif => (
          <img src={gif} alt="" />
        ))}
      </main>
    );
  }
}

export default GiphyPage;
