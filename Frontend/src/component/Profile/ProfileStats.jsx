import React from "react";

function ProfileStats() {
  return (
    <div className="mt-6 flex justify-center gap-3">
      <div className="rounded-md bg-[#363636] px-5 py-3 text-center">
        <p className="text-[11px] text-gray-400">Task left</p>
        <h3 className="mt-1 text-base">10</h3>
      </div>

      <div className="rounded-md bg-[#363636] px-5 py-3 text-center">
        <p className="text-[11px] text-gray-400">Task done</p>
        <h3 className="mt-1 text-base">5</h3>
      </div>
    </div>
  );
}

export default ProfileStats;