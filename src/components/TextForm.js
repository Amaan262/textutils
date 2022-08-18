import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Please Enter Text", "warning");
    } else {
      props.showAlert("Converted into UpperCase", "success");
    }
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Please Enter Text", "warning");
    } else {
      props.showAlert("Converted into LowerCase", "success");
    }
  };
  const handleTextClear = () => {
    setText("");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text === "") {
      props.showAlert("Please Enter Text", "warning");
    } else {
      props.showAlert("Exta Spaces removed", "success");
    }
  };
  //   const handleTextLength = (event) => {
  //     let newLength = text.split(" ").length;
  //     console.log("new length is executed");
  //     return newLength;
  //   };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    // props.showAlert("Please Enter Text", "warning");
    copiedNoti();
    setTimeout(() => {
      dltnoti();
    }, 1000);
  };

  const copiedNoti = () => {
    const noti = document.createElement("span");
    const node = document.createTextNode("Copied!");
    noti.setAttribute("id", "copied");
    noti.className +=
      "position-absolute badge start-0 start-50 translate-middle bg-dark text-light copied";
    noti.appendChild(node);
    const element = document.getElementById("copy-btn");
    element.appendChild(noti);
  };
  const dltnoti = () => {
    const element = document.getElementById("copied");
    element.remove();
  };

  return (
    <div className="my-5">
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(7 42 80)",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            id="mybox"
            rows="8"
            placeholder="Enter your Text here "
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button
            onClick={handleUpClick}
            className={`btn btn-${
              props.mode === "light" ? "primary" : "primary"
            } me-1 my-1`}
          >
            Convert to UpperCase
          </button>
          <button
            onClick={handleLoClick}
            className={`btn btn-${
              props.mode === "light" ? "primary" : "primary"
            } me-1 my-1`}
          >
            Convert to LowerCase
          </button>
          <button
            onClick={handleExtraSpace}
            className={`btn btn-${
              props.mode === "light" ? "primary" : "primary"
            } me-1 my-1`}
          >
            Remove Extra Space
          </button>
          <button
            id="copy-btn"
            onClick={handleCopy}
            className="btn btn-success me-1 my-1 position-relative"
          >
            Copy
            {/* <span className="position-absolute badge start-0 start-50 translate-middle bg-primary">
              Copied!
            </span> */}
          </button>
          <button
            onClick={handleTextClear}
            className="btn btn-danger my-1 me-1"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words , {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <div
          className="container border border-success"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#072A50",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
