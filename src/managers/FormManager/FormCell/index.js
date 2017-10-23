import React, { Component } from 'react';

class FormCell extends React.Component {
  
renderInnerCell = () => {
    const {inputType} = this.props;

    switch (inputType){
        case "text":
        {
            return this.renderText();
        }
        break;
        case "textarea":
        {
            return this.renderTextArea();
        }
        break;
        case "checkbox":
        {
            return this.renderCheckbox();
        }
        break;
        case "select":
        {
            return this.renderSelect();
        }
        break;
        case "submit":
        {
            return this.renderSubmit();
        }
        break;
    }
}

renderText = () => {
    return (
        <div>text</div>
    );
}

renderTextArea = () => {
    return (
        <div>textarea</div>
    );
}
renderCheckbox = () => {
    return (
        <div>checkbox</div>
    );
}
renderSelect = () => {
    return (
        <div>select</div>
    );
}
renderSubmit = () => {
    return (
        <div>submit</div>
    );
}

    render() {
      return (
        <div>
          {this.renderInnerCell()}
        </div>
      );
    }
  }
  
  export default FormCell;