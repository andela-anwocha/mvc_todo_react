import AppDispatcher from '../dispatcher/app_dispatcher.js';

export function addItem(item) {
  AppDispatcher.handleViewAction({
    actionType: "NEW_ITEM",
    item: item
  });
}

export function updateItem(index) {
  AppDispatcher.handleViewAction({
    actionType: "UPDATE_ITEM",
    index: index,
  });
}

export function viewItem(info) {
  AppDispatcher.handleViewAction({
    actionType: "VIEW_ITEM",
    info: info
  });
}

export function removeItem(item) {
  AppDispatcher.handleViewAction({
    actionType: "REMOVE_ITEM",
    item: item,
  });
}

export function searchItem(text){
  AppDispatcher.handleViewAction({
    actionType: "SEARCH_ITEM",
    text: text
  });
}
