import React from "react";

function ProfileHeader({name}) {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt=""
        className="h-20 w-20 rounded-full border-2 border-gray-700 object-cover"
      />

      <h2 className="mt-3 text-base font-medium">{name}</h2>
    </div>
  );
}

export default ProfileHeader;