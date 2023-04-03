/*const exampleTasks = [
    {index: 0, text: 'Limpiar la casa', done: false},
    {index: 1, text: 'Comprar comida', done: false},
    {index: 2, text: 'Correr', done: false},
    {index: 3, text: 'Pagar el agua', done: false},
];*/


let userTasks = JSON.parse(localStorage.getItem('userTasks'));
if (!userTasks){
    localStorage.setItem('userTasks', JSON.stringify([]));
    userTasks = JSON.parse(localStorage.getItem('userTasks'));
}

const addTask = (text) => {
    if (text === ''){
        return false;
    }
    let newTask = {index: userTasks.length, text: text, done: false};
    userTasks.push(newTask);
    localStorage.setItem('userTasks', JSON.stringify(userTasks));
};

const deleteTask = (index) => {
    userTasks.splice(index, 1);
    for (let i = 0; i < userTasks.length; i++){
        userTasks[i].index = i;
    }
    localStorage.setItem('userTasks', JSON.stringify(userTasks));
};

const changeTaskStatus = (index) => {
    if (userTasks[index].done === true){
        userTasks[index].done = false;
    } else if (userTasks[index].done === false){
        userTasks[index].done = true;
    }
    localStorage.setItem('userTasks', JSON.stringify(userTasks));
};


export {addTask};
export {deleteTask};
export {changeTaskStatus};
export {userTasks};