import React from "react";

class AddItemButton extends React.Component {

  constructor(){
    super();
    this._openModal = this._openModal.bind(this);
  }

  render() {
    return <div className="fixed-action-btn horizontal">
              <a className="btn-floating btn-large red modal-trigger" onClick={this._openModal}>
                <i className="material-icons">add</i>
              </a>
           </div>
  }

  _openModal(){
    $('#modal1').openModal();
  }
}

export { AddItemButton };