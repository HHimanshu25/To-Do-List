import React from "react";
import {
  Settings,
  UserRoundPen,
  LockKeyhole,
  Camera,
  Info,
  HelpCircle,
  MessageSquareMore,
  ShieldQuestion,
  LogOut,
  ChevronRight,
} from "lucide-react";

import ProfileHeader from "../component/Profile/ProfileHeader";
import ProfileStats from "../component/Profile/ProfileStats";
import SettingItem from "../component/Profile/SettingItem";
import Footer from "../component/Footer";

function Profile() {
  return (
    <div className="flex h-screen flex-col bg-black text-white scrollbar-none">
      <div className="flex-1 overflow-y-auto px-4 pt-6">
        <h2 className="mb-6 text-center text-lg font-medium">Profile</h2>

        <ProfileHeader />
        <ProfileStats />

        <p className="mt-7 mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
          Settings
        </p>

        <SettingItem icon={<Settings size={18} />} title="App Settings" />

        <p className="mt-7 mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
          Account
        </p>

        <SettingItem icon={<UserRoundPen size={18} />} title="Change account name" arrow />
        <SettingItem icon={<LockKeyhole size={18} />} title="Change account password" arrow />
        <SettingItem icon={<Camera size={18} />} title="Change account image" arrow />

        <p className="mt-7 mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
          Uptodo
        </p>

        <SettingItem icon={<Info size={18} />} title="About US" />
        <SettingItem icon={<HelpCircle size={18} />} title="FAQ" />
        <SettingItem icon={<MessageSquareMore size={18} />} title="Help & Feedback" />
        <SettingItem icon={<ShieldQuestion size={18} />} title="Support US" />

        <button className="mt-5 flex items-center gap-3 text-sm text-red-500">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;