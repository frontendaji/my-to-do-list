const tasks = document.getElementById('input-tasks');
let completedTasksArray = [];
let arrayTasks = [];
const maxTasks = 5;
const completed = document.getElementById('completed-tasks');
const inclompleted = document.getElementById('incompleted-tasks');

function completedTasks(){
    const completedParagraph = document.querySelector('p[onclick="completedTasks()"]');
    const incompletedParagraph = document.querySelector('p[onclick="incompletedTasks()"]');

    completed.style.display = 'flex';
    inclompleted.style.display = 'none';
    showCompletedTask();
    completedParagraph.style.color = '#F6F6F7';
    incompletedParagraph.style.color = '#6F747A';
}

function incompletedTasks(){
    const completedParagraph = document.querySelector('p[onclick="completedTasks()"]');
    const incompletedParagraph = document.querySelector('p[onclick="incompletedTasks()"]');

    completed.style.display = 'none';
    inclompleted.style.display = 'block';
    completedParagraph.style.color = '#6F747A';
    incompletedParagraph.style.color = '#F6F6F7';
}

function addTasks() {
    const newTasks = tasks.value.trim();

    if (arrayTasks.length >= maxTasks) {
        alert('Task is Full, please delete one');
        return;
    }

    if (arrayTasks.includes(newTasks)) {
        alert('The task already exists.');
        return;
    }
    if (newTasks === ""){
        alert('Please complete the task first');
        return;
    }else{
        alert('Task added successfully')
    }

    arrayTasks.push(newTasks);
    console.table(arrayTasks);

    tasks.value = "";
    showTask()
}

function showTask(){
    const uiElement = document.getElementById('tasks');
    uiElement.innerHTML = "";

    arrayTasks.forEach(item => {
        const liElement = document.createElement('li');
        
        const imgBefore = document.createElement('img');
        imgBefore.src = 'assets/check.png';
        imgBefore.alt = 'Checklist';
        liElement.appendChild(imgBefore);

        imgBefore.onclick = function(){
            if(completedTasksArray.length >= maxTasks){
                alert('Completed Task is Full, Please delete one')
                return;
            }else{
                completedTasksArray.push(item);
                arrayTasks.shift(item);
                showTask();
            }
            console.log(completedTasksArray);
            console.log(arrayTasks);
        }

        const textElement = document.createElement('span');
        textElement.textContent = item;
        liElement.appendChild(textElement);

        const imgAfter = document.createElement('img');
        imgAfter.src = 'assets/delete.png';
        imgAfter.alt = 'Delete';
        liElement.appendChild(imgAfter);
        
        imgAfter.onclick = function(){
            arrayTasks.shift(item);
            alert('The task was successfully deleted');
            showTask();
        };

        uiElement.appendChild(liElement);
    });
}

function showCompletedTask() {
    const completedTasksList = document.getElementById('Completed');
    completedTasksList.innerHTML = "";

    completedTasksArray.forEach((task, index) => {
        const liElement = document.createElement('li');

        const imgAfter = document.createElement('img');
        imgAfter.src = 'assets/delete.png';
        imgAfter.alt = 'Delete';

        imgAfter.onclick = function() {
            completedTasksArray.splice(index, 1);
            showCompletedTask();
            alert('The task was successfully deleted');
        };

        liElement.appendChild(imgAfter);

        const spanElement = document.createElement('span');
        spanElement.textContent = `${index + 1}. ${task}`;
        liElement.appendChild(spanElement);

        completedTasksList.appendChild(liElement);
    });
}



