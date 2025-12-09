
// let task = 10
window.addEventListener('load', () => {
    document.querySelector('.inputbox').classList.remove('open')
    document.querySelector('.completed').classList.remove('oopeen')

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
    if (data.complete) {
        topic.classList.add('line')
        inch.classList.add('inchch')
        document.querySelector('.completed').append(task)
    }
    else{
        document.querySelector('.contain').append(task)

    }
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
        time: time ? time.value : '',
        complete: false
    };

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




document.querySelector(".contain").addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('task-complete')) {
        let taskDiv = e.target.closest('.task');
        let taskid = taskDiv.dataset.id;
        let i = taskid.slice(4)

        document.querySelector(`[data-id=task${i}]`).children[0].classList.toggle('inchch')
        document.querySelector(`[data-id=task${i}]`).children[1].classList.toggle('line')
        let tt = JSON.parse(localStorage.getItem(`task${i}`))
        tt.complete = !tt.complete
        localStorage.setItem(`task${i}`, JSON.stringify(tt))
    }

})
document.querySelector(".completed").addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('task-complete')) {
        let taskDiv = e.target.closest('.task');
        let taskid = taskDiv.dataset.id;
        let i = taskid.slice(4)

        document.querySelector(`[data-id=task${i}]`).children[0].classList.toggle('inchch')
        document.querySelector(`[data-id=task${i}]`).children[1].classList.toggle('line')
        let tt = JSON.parse(localStorage.getItem(`task${i}`))
        tt.complete = !tt.complete
        localStorage.setItem(`task${i}`, JSON.stringify(tt))
    }

})
document.querySelector('.done-head').addEventListener('click',()=>{
    document.querySelector('.completed').classList.toggle('oopeen')
})