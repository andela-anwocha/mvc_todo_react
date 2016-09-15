import React from "react";
import { addItem } from "../actions/todo_actions.js";
import TodoStore from "../stores/todo_store.js";

export default class AddItemModal extends React.Component {

  constructor(){
    super();
    this._addItem = this._addItem.bind(this);
  }

  render(){
    return <div id="modal1" className="modal bottom-sheet">
              <div className="modal-content">
                <div className="modal-header">
                  <h4>Add List Item</h4>
                </div>
                <div className="row">
                  <div className="input-field col s6 level-up">
                    <input placeholder="Placeholder" id="title" type="text" className="validate" ref={title => this._title = title} />
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="input-field col s6">
                    <textarea className="materialize-textarea" ref={description => this._description = description}></textarea>
                    <label htmlFor="description">Description</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-action modal-close btn" onClick={this._addItem}>Add</a>
              </div>
            </div>
  }

  _addItem(){
    let item = {
                  title: this._title.value, 
                  description: this._description.value,
                  status: "pending"
                };
    addItem(item);
  }
}
