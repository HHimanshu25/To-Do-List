import React, { useState } from "react";

function ChangePasswordModal({ close }) {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(form);

    // Update password logic here

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-5">

      <div className="w-full max-w-sm bg-[#3b3b3b] rounded-xl p-5">

        <h2 className="text-center text-white text-xl font-medium">
          Change account Password
        </h2>

        <hr className="border-gray-500 my-4" />

        {/* Old Password */}

        <div className="mb-5">
          <label className="text-gray-200 text-sm">
            Enter old password
          </label>

          <input
            type="password"
            name="oldPassword"
            value={form.oldPassword}
            onChange={handleChange}
            placeholder="************"
            className="w-full mt-2 px-4 py-3 bg-transparent border border-gray-500 rounded-md outline-none text-white focus:border-[#8875FF]"
          />
        </div>

        {/* New Password */}

        <div>
          <label className="text-gray-200 text-sm">
            Enter new password
          </label>

          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="************"
            className="w-full mt-2 px-4 py-3 bg-transparent border border-gray-500 rounded-md outline-none text-white focus:border-[#8875FF]"
          />
        </div>

        {/* Buttons */}

        <div className="flex justify-between items-center mt-10">

          <button
            onClick={close}
            className="text-[#8875FF] text-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-[#8875FF] hover:bg-[#7868f0] px-10 py-3 rounded-md text-white transition"
          >
            Edit
          </button>

        </div>

      </div>

    </div>
  );
}

export default ChangePasswordModal;