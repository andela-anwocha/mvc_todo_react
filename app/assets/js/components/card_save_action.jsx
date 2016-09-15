import React from "react";
import {updateItem} from "../actions/todo_actions.js";

export default class CardSaveAction extends React.Component {

  constructor(){
    super();
    this._updateItem = this._updateItem.bind(this);
    this._changeState = this._changeState.bind(this);
  }

  render(){
    return <div className="card-action">
              <a href="#" onClick={this._changeState}>Discard</a>
              <a href="#" onClick={this._updateItem}>Save</a>
            </div>
  }

  _changeState(){
    this.props.changeState();
  }

  _updateItem(){
    updateItem(this.props.info.id);
  }
}
