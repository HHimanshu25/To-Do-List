import React from "react";
import { ChevronRight } from "lucide-react";

function SettingItem({
  icon,
  title,
  arrow = false,
  onClick,
}) {
  return (
    <button onClick={onClick} className="flex w-full items-center justify-between py-3.5">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm">{title}</span>
      </div>

      {arrow && <ChevronRight size={18} color="#777" />}
    </button>
  );
}

export default SettingItem;