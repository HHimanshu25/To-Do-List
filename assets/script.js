// let task = 10
for(let i = 1; i<localStorage.getItem('tasknum'); i++){
    let task = document.createElement('div')
    let inch = document.createElement('input')
    let topic = document.createElement('div')    
    task.setAttribute('class', 'task')
    task.setAttribute('data-id',`task${i}`)
    inch.setAttribute('type', 'checkbox')
    inch.setAttribute('class', 'task-complete')
    inch.setAttribute('name','complete')
    topic.setAttribute('class', 'task-topic')
    topic.innerText = localStorage.getItem(`task${i}`)
    document.querySelector('.contain').append(task)
    task.append(inch)
    task.append(topic)
    
}
function newtask(value) {
    let task = document.createElement('div')
    let inch = document.createElement('input')
    let topic = document.createElement('div')    
    task.setAttribute('class', 'task')
    task.setAttribute('data-id',`task${value}`)
    inch.setAttribute('type', 'checkbox')
    inch.setAttribute('class', 'task-complete')
    inch.setAttribute('name','complete')
    topic.setAttribute('class', 'task-topic')
    topic.innerText = localStorage.getItem(`task${value}`)
    document.querySelector('.contain').append(task)
    task.append(inch)
    task.append(topic)
    
    
    
}    
function addtask() {
    // ++task;
    let nn = Number(localStorage.getItem('tasknum')) || 1   
    console.log(nn)
    let tain = prompt('enter your task')
    if(!(tain == "")){
        localStorage.setItem(`task${nn}`, tain) 
        newtask(nn)
        localStorage.setItem('tasknum', ++nn)   
        
    }        
    
}

function reset(){
}

document.querySelector('.nav-head').addEventListener('dblclick',()=>{
    // reset()
    for(let i = 2; i<= localStorage.getItem('tasknum'); i++){
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
    
    let num = localStorage.getItem('tasknum')
    for(let i = taskid; i<num; i++ ){
        localStorage.setItem(`task${i}` , localStorage.getItem(`task${i+1}`) ) 
        if(i == (num-1)){
            localStorage.removeItem('task${i}')
            localStorage.setItem('tasknum',num-1)

        }
    }
    taskDiv.remove();


}
    }
});


