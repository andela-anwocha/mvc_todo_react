import React from "react";
import ReactDOM from "react-dom";
import { viewItem, updateItem } from "../actions/todo_actions.js";
import TodoStore from "../stores/todo_store.js";

class ListItem extends React.Component {

    constructor(){
      super();
      this._viewItem = this._viewItem.bind(this);
      this._checkListener = this._checkListener.bind(this);
      this._deleteItem = this._deleteItem.bind(this);
    }

    render(){
      let title = this.props.info.title;
      let description = this.props.info.description;

      return  <li className="collection-item">
                <div className="visible-content">
                  <span className="item-text" ref={element => this.element = element}>{title}</span>
                  <a href="#!" className="secondary-content">
                    <div className="switch">
                      <label>
                        <input type="checkbox" onChange={this._checkListener} />
                        <span className="lever"></span> Done
                      </label>
                    </div>
                  </a>
                </div>
                <div className="invisible-content">
                  <a className="left-btn btn-flat" onClick={this._viewItem}>
                    View
                  </a>
                  <a className="right-btn btn-flat" onClick={this._deleteItem}>
                    Delete
                  </a>
                </div>
              </li>
    }

    componentDidMount(){
      this._attachListener();
      this._updateCheckElement();
    }

    _attachListener(){
      let node = ReactDOM.findDOMNode(this);
      node = $(node).find('span.item-text');
      $(node).click(function(){
        let context = $(node).closest('.collection-item');
        $('li.collection-item').find('.invisble-content').not(context.find('.invisible-content')).hide();

        context.find('.invisible-content').toggle("slow");
      })
    }

    _viewItem(){
      viewItem(this.props.info);
    }

    _updateCheckElement(){
      let node = ReactDOM.findDOMNode(this);
      if (this.props.info.status == "completed"){
        $(node).find('input').prop("checked", true);
      }
      else{
        $(node).find('input').prop("checked", false);
      }
      
    }

    _checkListener(event){
      let node = ReactDOM.findDOMNode(this);
      let checkValue = $(node).find('input').is(':checked');
      checkValue = checkValue ? "completed" : "pending";
      let tempItem = Object.assign({}, this.props.info, { status: checkValue });
      TodoStore.setTempItem(tempItem);
      updateItem(this.props.info.id);
    }

    _deleteItem(){
      $('#modal2').openModal();
      TodoStore.setDeleteItem(this.props.info);
    }
}

export {ListItem};