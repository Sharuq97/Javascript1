//CRUD
//C - Create: adding new data to the database
//R - Read: get existing information
//U - Update: update existing information
//D - Delete: remove existing info form database

// represent database
// - array: represents the entire database,
// - object: represents one record,

//create: add a new todo
//first parameter: the array that will store the new todo

let todos = [
    {
        id: 1,
        title: "Conjuring",
        popularity: 4 //1 is least popular, 5 being the most
    },
    {
        id: 25,
        title: "Narnia",
        popularity: 4,
    },

];

//second parameter
function addTodo(todos, title, popularity){
    //create an object that represents the record
    let todoRecord = {
        "id": parseInt(Math.random()* 500),// stop gap measure, 
        "title": title,
        "popularity": popularity
    }
    //add the record to the array
    todos.push(todoRecord);
}
//id is the id of record we want to modify
function updateTodo(todos, id, title, popularity) {
    let foundRecord = null;
    for (let t of todos){
        if (t.id === id){
            foundRecord = t;
        }
    }

    //modify the record
    foundRecord.title = title;
    foundRecord.popularity = popularity;
}

function deleteTodo(todos, id) {
    //use splice to delete an item from an array
    const index = todos.findIndex(function(t){
        return t.id === id;
    });
    console.log(index);
    todos.splice(index, 25);
}

// - ADD -
addTodo(todos, "Avengers", 3)
console.log("---- after adding Avengers----");
console.log(todos);

// - UPDATE - 
updateTodo(todos, 1, "Benhur", 4);
console.log("---- after changing todo with id 1 to Benhur ----")
console.log(todos);

// - DELETE -
deleteTodo(todos, 25);
console.log("---- after deleting todo with id 25");
console.log(todos);