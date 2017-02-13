var todoApp = {
  todos: [], //our data source/store
  init: function(){
    todoApp.cacheDom();
    todoApp.addEventListeners();
    todoApp.render();
  },
  cacheDom: function(){
    todoApp.createButton = document.querySelector('#create');
    todoApp.taskInput = document.querySelector('#task');
    todoApp.categoryInput = document.querySelector('#category');
    todoApp.dateInput = document.querySelector('#date');
    todoApp.list = document.querySelector('#list');
  },
  render: function(){
    console.log(todoApp.todos);
    var listItemsFromTodos = todoApp.todos
                                 .map(todoApp.createListItem)
                                 .join('');
    todoApp.list.innerHTML = listItemsFromTodos;
    var deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(function(button){
      button.addEventListener('click', todoApp.removeTodo);
    });
  },
  createListItem: function(todo, index) {
    return `<li data-index="${index}">${todo.task}:  (${todo.date})  [${todo.category}]
              <button class="delete">X</button>
            </li>`;
  },
  addEventListeners: function(){
    todoApp.createButton.addEventListener('click', todoApp.addTodo);
  },
  addTodo: function(){
    var task = todoApp.taskInput.value; //specific to input fields
    var date = todoApp.dateInput.value;
    var category = todoApp.categoryInput.value;
    var newTodo = createTodo(task, date, category);
    todoApp.todos.push(newTodo);
    todoApp.taskInput.value = '';
    todoApp.dateInput.value = '';
    todoApp.categoryInput.value = '';
    todoApp.render();
  },
  removeTodo: function(){
    var element = this; // only refers to the element bc we are in an event handler
    var parent = element.parentNode;
    var index = parent.dataset.index;
    todoApp.todos.splice(index, 1);
    todoApp.render();
  }
};
// console.log(todoApp);
todoApp.init();
// console.log(todoApp);
