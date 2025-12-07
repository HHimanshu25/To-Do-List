// let task = 10
window.addEventListener('load', () => {
    document.querySelector('.inputbox').classList.remove('open')
})


for (let i = 1; i < localStorage.getItem('tasknum'); i++) {
    const data = JSON.parse(localStorage.getItem(`task${i}`))
    let task = document.createElement('div')
    let inch = document.createElement('input')
    let topic = document.createElement('div')
    task.setAttribute('class', 'task')
    task.setAttribute('data-id', `task${i}`)
    inch.setAttribute('type', 'checkbox')
    inch.setAttribute('class', 'task-complete')
    inch.setAttribute('name', 'complete')
    topic.setAttribute('class', 'task-topic')
    topic.innerText = data.name
    document.querySelector('.contain').append(task)
    task.append(inch)
    task.append(topic)
}



function newtask(value) {
    let task = document.createElement('div')
    let inch = document.createElement('input')
    let topic = document.createElement('div')
    task.setAttribute('class', 'task')
    task.setAttribute('data-id', `task${value}`)
    inch.setAttribute('type', 'checkbox')
    inch.setAttribute('class', 'task-complete')
    inch.setAttribute('name', 'complete')
    topic.setAttribute('class', 'task-topic')
    let get = JSON.parse(localStorage.getItem(`task${value}`))
    topic.innerText = get.name
    document.querySelector('.contain').append(task)
    task.append(inch)
    task.append(topic)



}
function addtask() {
    // ++task;
    document.querySelector('.inputbox').classList.toggle('open')
    let name = document.getElementById('titl')
    let date = document.querySelector('.date')
    let time = document.querySelector('.time')

    let tain = {
        name: '',
        date: 0,
        time: 0
    }
    // The OK button in the markup calls the global `update()` function.
}

// Global update function called by the OK button in HTML
function update() {
    document.querySelector('.inputbox').classList.toggle('open')
    const name = document.getElementById('titl')
    const date = document.querySelector('.date')
    const time = document.querySelector('.time')

    const tain = {
        name: name ? name.value : '',
        date: date ? date.value : '',
        time: time ? time.value : ''
    }

    if (tain.name && tain.name.trim() !== '') {
        let nn = localStorage.getItem('tasknum') || 1        
        localStorage.setItem(`task${nn}`, JSON.stringify(tain))
        newtask(nn)
        localStorage.setItem('tasknum', ++nn)
    }

}

function reset() {
}

document.querySelector('.nav-head').addEventListener('dblclick', () => {
    // reset()
    const num = Number(localStorage.getItem('tasknum')) || 0
    for (let i = 1; i <= num; i++) {
        localStorage.removeItem(`task${i}`)
    }
    localStorage.removeItem('tasknum')
})
document.querySelector('.contain').addEventListener('dblclick', (e) => {

    // Check if the clicked element has class 'task-topic'
    if (e.target && e.target.classList.contains('task-topic')) {
        let taskDiv = e.target.closest('.task');

        let confirmDelete = confirm('Do you want to delete this task?');

        if (confirmDelete) {

            // Remove the whole task container

            let taskid = Number(taskDiv.dataset.id.slice(4))

            let num = Number(localStorage.getItem('tasknum')) || 0
            for (let i = taskid; i < num; i++) {
                localStorage.setItem(`task${i}`, localStorage.getItem(`task${i + 1}`))
            }
            if (num >= 1) {
                localStorage.removeItem(`task${num}`)
                localStorage.setItem('tasknum', String(num - 1))
            }
            taskDiv.remove();

 
        }
    }
});

document.querySelector('.contain').addEventListener('change', (e) => {
    if (e.target.classList.contains('task-complete')) {
        
        let taskDiv = e.target.closest('.task');
        let id = taskDiv.dataset.id;
        
        let stored = JSON.parse(localStorage.getItem(id));
        stored.completed = e.target.checked;

        localStorage.setItem(id, JSON.stringify(stored));

        updateStyle(taskDiv, stored.completed);
    }
});
function updateStyle(taskDiv, completed) {
    let topic = taskDiv.querySelector('.task-topic');

    if (completed) {
        topic.style.textDecoration = "line-through";
        topic.style.opacity = "0.5";
    } else {
        topic.style.textDecoration = "none";
        topic.style.opacity = "1";
    }
}
if (data.completed) {
    inch.checked = true;
    updateStyle(task, true);
}



