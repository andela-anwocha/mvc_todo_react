import React from "react";
import TodoStore from "../stores/todo_store.js";
import { removeItem } from "../actions/todo_actions.js";

export default class DeleteItemModal extends React.Component {

  constructor(){
    super();
    this._deleteItem = this._deleteItem.bind(this);
  }

  render(){
    return <div id="modal2" className="modal">
              <div className="modal-content">
                <h4>Delete</h4>
                <p>Are you sure you want to delete this item?</p>
              </div>
              <div className="modal-footer delete">
                <a href="#!" className=" modal-action modal-close btn" onClick={this._deleteItem}>Yes</a>
              </div>
           </div>
  }

  _deleteItem(){
    removeItem(TodoStore.getDeleteItem());
  }
}
