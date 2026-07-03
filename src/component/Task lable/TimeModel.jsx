import { useState } from "react";

function TimeModal({ form, setForm, back }) {
const now = new Date();

const currentHour = String(now.getHours() % 12 || 12).padStart(2, "0");
const currentMinute = String(now.getMinutes()).padStart(2, "0");
const currentPeriod = now.getHours() >= 12 ? "PM" : "AM";

const [hour, setHour] = useState(currentHour);
const [minute, setMinute] = useState(currentMinute);
const [period, setPeriod] = useState(currentPeriod);
  const saveTime = () => {
    setForm({
      ...form,
      time: `${hour}:${minute} ${period}`,
    });

    back();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 ">
      <div className="w-85 bg-[#3b3b3b] rounded-md overflow-hidden">

        <h2 className="text-center text-2xl py-4">
          Choose Time
        </h2>

        <hr className="border-gray-500" />

        <div className="flex justify-center gap-5 py-8">

          {/* Hours */}
          <select
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="bg-[#2d2d2d] text-4xl text-center rounded-md w-20 h-20 overflow-y-auto z-10"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                {String(i + 1).padStart(2, "0")}
              </option>
            ))}
          </select>

          <div className="text-5xl self-center">:</div>

          {/* Minutes */}
          <select
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            className="bg-[#2d2d2d] text-4xl text-center rounded-md w-20 h-20"
          >
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i} value={String(i).padStart(2, "0")}>
                {String(i).padStart(2, "0")}
              </option>
            ))}
          </select>

          {/* AM PM */}
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-[#2d2d2d] text-3xl text-center rounded-md w-20 h-20"
          >
            <option>AM</option>
            <option>PM</option>
          </select>

        </div>
        <div className='flex gap-5 text-2xl mt-5 w-full justify-center p-2.5'>
          <button className=' w-full rounded-sm py-2.5 text-[rgb(134,135,231)]x`' onClick={back}>Cancel</button>
          <button className=' w-full rounded-sm py-2.5 bg-[rgb(134,135,231)]' onClick={saveTime} >Save</button>
        </div>
     
      </div>
    </div>
  );
}

export default TimeModal;