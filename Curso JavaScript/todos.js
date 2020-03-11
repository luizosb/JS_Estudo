var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//Função listar 
function renderItens(){
//Precisa disso para listar sempre um item novo e não todos os itens dnv
listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderItens();

//Adicionar itens a lista
function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderItens();
    saveToStorage();
}

//Chamar função pelo botão
buttonElement.onclick = addTodo;

//Função deletar
function deleteTodo(pos){
    todos.splice(pos, 1);
    renderItens();
    saveToStorage(); 
}

//Salvar em storage
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos)); 
}