const tasks = document.getElementById('input-tasks');
let arrayTasks = [];
const maxTasks = 5;

function addTasks() {
    const newTasks = tasks.value.trim();

    if (arrayTasks.length >= maxTasks) {
        alert('Task Sudah Penuh, harap hapus salah satu');
        return;
    }

    if (arrayTasks.includes(newTasks)) {
        alert('Task sudah ada.');
        return;
    }
    if (newTasks === ""){
        alert('harap isi task terlebih dahulu');
        return;
    }else{
        alert('Task berhasil di tambahkan')
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

        const textElement = document.createElement('span');
        textElement.textContent = item;
        liElement.appendChild(textElement);

        const imgAfter = document.createElement('img');
        imgAfter.src = 'assets/delete.png';
        imgAfter.alt = 'Delete';
        liElement.appendChild(imgAfter);

        uiElement.appendChild(liElement);
    });
}
