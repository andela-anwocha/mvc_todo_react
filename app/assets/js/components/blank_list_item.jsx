import React from "react";

class BlankListItem extends React.Component {
  render(){
    return  <li className="collection-item no-item">
              <div className="btn-container">
                 <a className="btn-flat" onClick={() => $('#modal1').openModal()}>Add Item</a>
              </div>
            </li>
  }
}

export { BlankListItem };
