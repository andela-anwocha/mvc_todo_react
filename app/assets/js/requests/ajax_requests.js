export function getAllList(){
  let promise = new Promise(function(resolve, reject){
    $.ajax({
      url: "http://localhost:9292/todo",
      type: "GET",
      success: function(data){
        resolve(data);
      },
      error: function(data){
        reject(data);
      }
    });
  });

  return promise;
}

export function updateList(item){
  let promise = new Promise((resolve, reject) =>{
    $.ajax({
      url: "http://localhost:9292/todo",
      type: "POST",
      data: item,
      crossOrigin: true,
      success: (data) => { resolve(data) },
      error: (data) => { reject(data) }
    })
  })
  return promise;
}

export function updateListItem(item){

  let promise = new Promise((resolve, reject) =>{
    $.ajax({
      url: "http://localhost:9292/todo/"+item.id,
      type: "PUT",
      data: item,
      crossOrigin: true,
      success: (data) => { resolve(data) },
      error: (data) => { reject(data) }
    })
  })
  return promise;
}

export function deleteListItem(index){
  let promise = new Promise((resolve, reject) => {
    $.ajax({
      url: `http://localhost:9292/todo/${index}`,
      type: "DELETE",
      crossOrigin: true,
      success: (data) => { resolve(data) },
      error: (data) => { reject(data) }
      })
  })
  return promise;
}
