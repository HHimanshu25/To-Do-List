import React, { useState } from "react";

function ChangeNameModal({ close, currentName, user, setUser, id }) {
  const [name, setName] = useState("");

  function updateuser() {
    close()
    if(name.trim() == '') return;
    setUser(prev =>
      prev.map(ele => ele.id == id ? {...ele, username : name} : ele)
    )

  }
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="w-[90%] max-w-sm bg-[#363636] rounded-xl p-6">

        <h2 className="text-white text-xl font-medium text-center">
          Change account name
        </h2>

        <input
          type="text"
          value={name}
          placeholder={currentName}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-8 px-4 py-3 rounded-md bg-transparent border border-gray-500 text-white outline-none focus:border-[#8875FF]"
        />

        <div className="flex justify-between mt-8">

          <button
            onClick={close}
            className="text-[#8875FF] text-lg"
          >
            Cancel
          </button>

          <button
            onClick={updateuser}
            className="bg-[#8875FF] px-8 py-2 rounded-md"
          >
            Edit
          </button>

        </div>

      </div>

    </div>
  );
}

export default ChangeNameModal;