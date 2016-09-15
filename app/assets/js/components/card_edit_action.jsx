import React from "react";
import { addItem } from "../actions/todo_actions.js";
import TodoStore from "../stores/todo_store.js";

export default class CardEditAction extends React.Component {

  constructor(){
    super();
    this._changeState = this._changeState.bind(this);
    this._deleteItem = this._deleteItem.bind(this);
  }

  render(){
    let cardActions = this._getCardActions();
    return  <div className="card-action">
              {cardActions}
            </div>
  }

  _getCardActions(){
    let info = (this.props.info != undefined) && (this.props.info.title != undefined);

    if(info){
      let index = 0;
      return ['Delete', 'Edit'].map(action => {
        index += 1;
        if(action == 'Edit'){
          return <a href="#" onClick={this._changeState} key={index}>Edit</a>
        }
        else{
          return <a href="#" key={index} onClick={this._deleteItem}>Delete</a>
        }
      });
    }
    return <div></div>;
  }

  _deleteItem(){
    $('#modal2').openModal();
    TodoStore.setDeleteItem(this.props.info);
  }

  _changeState(){
    this.props.changeState();
  }

  _removeItem(){
    removeItem();
  }

}
