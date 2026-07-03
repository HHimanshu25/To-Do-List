import React from 'react'

function TaskList({ oncheck, data, con }) {

    return (
        <div className="task-list flex flex-col gap-3">
            {data
                ?.filter(task => task.done === con)
                .map(task => (
                    <div
                        key={task.id}
                        className="flex items-center gap-3 rounded-lg bg-[#363636] p-4 shadow-sm"
                    >
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => oncheck(task.id)}
                            className="h-5 w-5 appearance-none rounded-full border-2 border-white cursor-pointer checked:bg-white"
                        />

                        <div className="flex flex-1 flex-col">
                            <h3 className="text-lg font-medium">{task.title}</h3>

                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-sm text-gray-400">
                                  {task.date? `${task.date},${task.month}`: "Today"}
                                  {task.time && ` at ${task.time}`}
                                </span>

                                <div className="flex items-center gap-2">
                                    {task.category && (
                                        <span className="flex items-center gap-1 rounded-md bg-red-400 px-3 py-1 text-sm">
                                            <span className="material-symbols-outlined text-base">
                                                {task.category[0]}
                                            </span>
                                            {task.category[1]}
                                        </span>
                                    )}

                                    {task.priority && (
                                        <span className="flex items-center gap-1 rounded-md border border-indigo-400 px-3 py-1 text-sm">
                                            <span className="material-symbols-outlined text-base">
                                                flag
                                            </span>
                                            {task.priority}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>


    )
}

export default TaskList