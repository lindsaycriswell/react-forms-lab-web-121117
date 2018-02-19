import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      showError: true
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    let poem = this.state.value.split("\n");
    if (poem.length === 3) {
      let line1 = poem[0].split(" ");
      let line2 = poem[1].split(" ");
      let line3 = poem[2].split(" ");

      line1 = line1.filter(word => {
        return word !== " ";
      });
      line2 = line2.filter(word => {
        return word !== " ";
      });
      line3 = line3.filter(word => {
        return word !== " ";
      });

      if (line1.length === 5 && line2.length === 3 && line3.length === 5) {
        this.setState({
          showError: false
        });
      } else {
        this.setState({
          showError: true
        });
      }
    } else {
      this.setState({
        showError: true
      });
    }
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div
          id="poem-validation-error"
          style={{
            color: "red",
            visibility: this.state.showError ? "visible" : "hidden"
          }}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;

// The first line has five words.
// The second line has three words.
// The third line has five words.
// Be sure to account for users accidentally adding too many spaces! This means that ' I am a furry dog ' is not a valid first line of the poem.
// Make sure the error message is still showing if the user deletes all of their content from the textarea box
