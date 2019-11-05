import React from "react";

export class SimpleForm extends React.Component {
  state = {
    inputValue: ""
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onFormSubmit(this.state.inputValue);
        }}
      >
        <input
          value={this.state.inputValue}
          onChange={e => {
            this.setState({ inputValue: e.target.value });
          }}
        />
        <button>Submit</button>
      </form>
    );
  }
}
