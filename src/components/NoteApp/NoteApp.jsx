import React, { Component } from "react";
import Note from "./Note";
import ColorBox from "./ColorBox";

export default class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        "#fff",
        "#FFD37F",
        "#FFFA81",
        "#D5FA80",
        "#78F87F",
        "#79FBD6",
        "#79FDFE",
        "#7AD6FD",
        "#7B84FC",
        "#D687FC",
        "#FF89FD",
      ],
      notes: [],
      noteTitle: "",
      inputColor: "#fff",
    };
  }
  x;

  changeColor(color) {
    this.setState({
      inputColor: color,
    });
  }

  inputHandler(event) {
    this.setState({
      noteTitle: event.target.value,
    });
  }

  submitHandler() {
    let newNote = {
      id: this.state.notes.length + 1,
      title: this.state.noteTitle.trim(),
      color: this.state.inputColor,
    };

    if (newNote.title) {
      this.setState((prevState) => {
        return {
          notes: [...prevState.notes, newNote],
        };
      });

      this.setState({
        inputColor: "#fff",
        noteTitle: "",
      });
    }
  }

  emptyInput() {
    this.setState({
      noteTitle: "",
    });
  }

  removeNote(noteID) {
    // Way 1
    // let mainNotes = this.state.notes.filter((note) => {
    //   return note.id !== noteID;
    // });

    // this.setState({
    //   notes: mainNotes,
    // });

    //Way 2
    let newNotes = [...this.state.notes];

    let mainNoteIndex = newNotes.notes.findIndex((note) => {
      return note.id === noteID;
    });

    newNotes.splice(mainNoteIndex, 1);

    this.setState({
      notes: newNotes,
    });
  }

  render() {
    return (
      <>
        <div>
          <section id="home">
            <div className="container">
              <div className="header upper">SabzLearn Note App</div>

              <br />
              <br />
              <div className="flex row-gt-sm">
                <div className="flex flex-50-gt-sm">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <input
                      id="input-field"
                      className="form-control"
                      type="text"
                      style={{ backgroundColor: this.state.inputColor }}
                      placeholder="Something here..."
                      value={this.state.noteTitle}
                      onChange={this.inputHandler.bind(this, event)}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <div id="color-select">
                      {this.state.colors.map((color) => (
                        <ColorBox
                          onColor={this.changeColor.bind(this, color)}
                          color={color}
                          key={color}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                    <button
                      onClick={this.submitHandler.bind(this)}
                      id="btn-save"
                      type="button"
                      className="btn btn-outline-info"
                    >
                      <span className="fa fa-plus"></span>
                    </button>
                    <button
                      onClick={this.emptyInput.bind(this)}
                      id="btn-delete"
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      <span id="btn-icon" className="fa fa-eraser"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex row-gt-sm">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="container">
                    <div className="row">
                      <div
                        id="listed"
                        className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns"
                      >
                        {this.state.notes.map((note) => (
                          <Note
                            {...note}
                            key={note.id}
                            onRemove={this.removeNote.bind(this)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
