import React from "react";
import TodoStore from "../stores/todo_store.js";

export default class CardEditContent extends React.Component {

  constructor(){
    super();
    this._updateTempListItem = this._updateTempListItem.bind(this);
  }

  render(){
    let title = this.props.info.title;
    let textarea = this.props.info.description;
    return  <div className="card-edit-content white-text">
              <span className="card-title">{`Editing ${title}`}</span>
              <textarea className="materialize-textarea" ref={ele => this.body = ele} onKeyUp={this._updateTempListItem}>{textarea}</textarea>
            </div>
  }

  _updateTempListItem(){
    let temp_list_item = Object.assign({}, this.props.info, {description: this.body.value});
    TodoStore.setTempItem(temp_list_item);
  }
}
