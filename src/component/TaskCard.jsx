import React from 'react'
import { Link } from 'react-router-dom'
function TaskList({ oncheck, data, con, id }) {
console.log(id)
    const date = new Date().getDate()
    return (
        <div className="task-list flex flex-col gap-3">
            {data
                ?.filter(task => task.user === id && task.done === con)
                .map(task => (
                    <Link key={task.id} className="flex items-center gap-3 rounded-lg bg-[#363636] p-3 shadow-sm" to={`/edit/${task.id}`}>
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => oncheck(task.id)}
                            className="h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-white checked:bg-white"
                        />

                        <div className="flex flex-1 flex-col">
                            <h3 className="text-sm font-medium">{task.title}</h3>

                            <div className="mt-2 flex items-center justify-between gap-2">
                                <span className="text-[11px] text-gray-400">
                                    {task.date === date ? "Today" : `${task.date},${task.month}` }
                                    {task.time && ` at ${task.time}`}
                                </span>

                                <div className="flex items-center gap-2">
                                    {task.category && (
                                        <span className="flex items-center gap-1 rounded-md bg-red-400 px-2.5 py-1 text-[11px]">
                                            <span className="material-symbols-outlined text-sm">
                                                {task.category[0]}
                                            </span>
                                            {task.category[1]}
                                        </span>
                                    )}

                                    {task.priority && (
                                        <span className="flex items-center gap-1 rounded-md border border-indigo-400 px-2.5 py-1 text-[11px]">
                                            <span className="material-symbols-outlined text-sm">
                                                flag
                                            </span>
                                            {task.priority}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>


    )
}

export default TaskList