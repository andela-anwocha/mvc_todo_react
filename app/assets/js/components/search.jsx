import React from "react";
import { searchItem } from "../actions/todo_actions.js";

class Search extends React.Component {
  render(){
    return  <div>
              <div className="search-wrapper input-field">
                <input type="text" placeholder="Search TodoList..." ref={ (data) => this.searchData = data} onKeyUp={this._keyUp.bind(this)}/>
                <i className="material-icons">search</i>
              </div>
              <div className="horizontal-rule"></div>
            </div>
  }

  _keyUp(){
    searchItem(this.searchData.value);
  }
}

export { Search };
