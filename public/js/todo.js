//factory Function
function createTodo(task, date, category){
  var todo = {};
  todo.task = task; //setting the propertie
  todo.date = date;
  todo.category = category;
  return todo;
}
