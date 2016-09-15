import AppDispatcher from '../dispatcher/app_dispatcher.js';
import { EventEmitter } from 'events';
import { getAllList, updateList, deleteListItem, updateListItem } from '../requests/ajax_requests.js';


const CHANGE_EVENT = 'change';
const SEARCH_EVENT = 'search';
const VIEW_EVENT = 'view';
const DELETE_EVENT = 'delete';

let _store = {
  list: [],
  editing: false
};



let _search_list;
let _list_item;
let _temp_list_item;
let _delete_item;



class TodoStoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  addSearchListener(cb) {
    this.on(SEARCH_EVENT, cb);
  }

  addViewListener(cb) {
    this.on(VIEW_EVENT, cb);
  }

  addDeleteListener(cb) {
    this.on(DELETE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getList() {
    return _store;
  }

  setList(list){
    _store.list = list;
  }

  getSearchList() {
    return _search_list;
  }

  getListItem(){
    return _list_item;
  }

  setTempItem(item){
    _temp_list_item = item;
  }

  setDeleteItem(item){
    _delete_item = item;
  }

  getDeleteItem(){
    return _delete_item;
  }

}



const TodoStore = new TodoStoreClass();

getAllList().then((data) => {
  TodoStore.setList(data);
  TodoStore.emit('change');
});


AppDispatcher.register((payload) => {
  const action = payload.action;
  switch (action.actionType) {

    case "NEW_ITEM":
      updateList(action.item).then((data) => {
        _store.list = _store.list.concat(data);
        TodoStore.emit(CHANGE_EVENT);
      })
      break;

    case "UPDATE_ITEM":
      if ((_temp_list_item != undefined) && (action.index == _temp_list_item.id)){
        updateListItem(_temp_list_item).then((data) =>{
          console.log(data);
          _store.list = data
          _list_item = _temp_list_item;
          TodoStore.emit(CHANGE_EVENT);
        })
      }
      break;

    case "VIEW_ITEM":
      _list_item = action.info;
      TodoStore.emit(VIEW_EVENT);
      break;

    case "REMOVE_ITEM":
      let item = action.item;
      deleteListItem(item.id).then((data) => {
        let index = _store.list.indexOf(item);
        _store.list = data;
        TodoStore.emit(DELETE_EVENT);
      });
      break;

    case "SEARCH_ITEM":
      let pattern = new RegExp(action.text, "ig");
      _search_list = _store.list.filter((item) => { return item.title.match(pattern) } );
      TodoStore.emit(SEARCH_EVENT);
      break;

    default:
      return true;
  }

});

export default TodoStore;
