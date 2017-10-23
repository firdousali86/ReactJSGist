import React, { Component } from 'react';
import FormCell from "./FormCell"

class FormManager extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        form:[
          {"inputType":"text",
        "fieldName":"firstName",
        fieldValue:""
      },
      {"inputType":"text",
      "fieldName":"lastName",
      fieldValue:""
    },
      {"inputType":"textarea",
      "fieldName":"address",
      fieldValue:""
    } ,
    {"inputType":"checkbox",
    "fieldName":"isMarried",
    fieldValue:false
  } ,
    {"inputType":"select",
    "selectType":"",
"fieldName":"address",
    fieldValue:""
  } ,
  {"inputType":"select",
  "selectType":"",
  fieldValue:"",
  isMultiple:true
} ,
    {"inputType":"submit",
    fieldValue:"Submit"
  }
  ]
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    
    renderInnerForm = () => {
      
        const formItems = this.state.form;
        const formCells = formItems.map((formItem) =>
          <li >
            <FormCell {...formItem} onChange={this.handleChange}/>
          </li>
        );
        return (
          <ul>{formCells}</ul>
        );
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {this.renderInnerForm()}
        </form>
      );
    }
  }
  
  export default FormManager;