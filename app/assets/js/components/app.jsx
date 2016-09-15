import React from 'react';
import { render } from 'react-dom';
import { List } from "./list.jsx";
import { AddItemButton } from "./add_item_button.jsx";
import { ItemContent } from "./item_content.jsx";
import TodoStore from "../stores/todo_store.js";
import AddItemModal from "./add_item_modal.jsx";
import DeleteItemModal from "./delete_item_modal.jsx";

render(<List/>, document.getElementById('container'));
render(<AddItemButton />, document.getElementById('add-container'));
render(<ItemContent />, document.getElementById('item-content'));
render(<AddItemModal />, document.getElementById('add-item-modal'));
render(<DeleteItemModal />, document.getElementById('delete-item-modal'));

