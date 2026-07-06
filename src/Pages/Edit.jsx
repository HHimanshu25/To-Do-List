import React, { useEffect, useState } from "react";

import PriorityModel from "../component/Task lable/PriorityModel";
import TimeModel from "../component/Task lable/TimeModel";
import LabelModal from "../component/Task lable/LabelModal";
import Calendar from "../component/Task lable/Calendar";

function Edit() {
    const [activModal, setActivModal] = useState(null)

    const data = JSON.parse(localStorage.getItem('tasks'))[0]

    const details = [
        {
            icon: "timer",
            title: "Task Time",
            click: "Calendar",
            value: `${data.date ? `${data.date} ${data.month}` : "Today"}${data.time ? ` at ${data.time}` : ""}`,
        },
        {
            icon: data.category?.[0] || "sell",
            title: "Task Category",
            click: "label",
            value: data.category?.[1] || "None",
        },
        {
            icon: "flag",
            title: "Task Priority",
            click:"priority",
            value: data.priority || "Default",
        },
    ];
    return (
        <div className="h-screen max-h-screen w-screen relative bg-[#121212] text-white px-5 py-4 flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center">
                <button className="w-9 h-9 bg-[#2A2A2A] rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">
                        close
                    </span>
                </button>

                <button className="w-9 h-9 bg-[#2A2A2A] rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">
                        sync
                    </span>
                </button>
            </div>

            {/* Task */}
            <div className="flex items-start gap-4 mt-10">

                <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 appearance-none rounded-full border-2 border-white checked:bg-white cursor-pointer"
                />

                <div className="flex-1">
                    <h2 className="text-xl font-medium">
                        {data.title}
                    </h2>

                    <p className="text-gray-400 mt-1 text-sm">
                        {data.descreption}
                    </p>
                </div>

                <button>
                    <span className="material-symbols-outlined text-xl">
                        edit
                    </span>
                </button>

            </div>

            {/* Details */}

            <div className="mt-10 flex flex-col gap-6">
                {details.map((item) => (
                    <div key={item.title} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span>{item.title} :</span>
                        </div>

                        <button className="bg-[#3A3A3A] text-sm px-4 py-2 rounded-md" onClick={()=> setActivModal(`${item.click}`)}>
                            {item.value}
                        </button>
                    </div>
                ))}


            </div>

            {/* Delete */}

            <button className="flex items-center gap-3 text-red-500 mt-10">
                <span className="material-symbols-outlined">
                    delete
                </span>

                Delete Task
            </button>

            {/* Bottom Button */}

            <div className="mt-auto pt-10">

                <button className="w-full bg-[#8B82F8] py-3 rounded-md text-lg font-medium">
                    Edit Task
                </button>

            </div>
            {activModal === "priority" && (
                <PriorityModel
                    back={() => setActivModal(null)}
                    // form={form}
                    // setForm={setForm}

                />
            )}

            {activModal === "Calendar" && (
                <Calendar
                    // timer={() => setActivModal('Timer')}
                    back={() => setActivModal(null)}
                    // form={form}
                    // setForm={setForm}
                />
            )}
            {activModal === "label" && (
                <LabelModal
                    back={() => setActivModal(null)}
                    // form={form}
                    // setForm={setForm}
                />
            )}
            {activModal === "Timer" && (
                <TimeModal
                    back={() => setActivModal(null)}
                    // form={form}
                    // setForm={setForm}
                />
            )}
        </div>
    );
}


export default Edit;