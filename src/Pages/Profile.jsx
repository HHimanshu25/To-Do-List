import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
import ChangeNameModal from "../component/Profile/ChangeNameModal";
import ChangePasswordModal from "../component/Profile/ChangePasswordModal";


function Profile({userinfo, setUserInfo, name, id}) {

  const navigate = useNavigate()
  const [showNameModal, setShowNameModal] = useState(false);
  const [username, setUserName] = useState(name)
  // setTimeout(() => {
  //   console.log(name)
  // }, 100);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  return (
    <div className="flex h-screen flex-col bg-black text-white scrollbar-none">
      <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-none">
        <h2 className="mb-6 text-center text-lg font-medium">Profile</h2>

        <ProfileHeader name={name}/>
        <ProfileStats />

        <p className="mt-7 mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
          Settings
        </p>

        <SettingItem icon={<Settings size={18} />} title="App Settings" />

        <p className="mt-7 mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
          Account
        </p>

        <SettingItem
          icon={<UserRoundPen size={20} />}
          title="Change account name"
          arrow
          onClick={() => setShowNameModal(true)} />


        <SettingItem
          icon={<LockKeyhole size={20} />}
          title="Change account password"
          onClick={() => setShowPasswordModal(true)}
        />

        <SettingItem icon={<Camera size={18} />} title="Change account image" arrow />

        <p className="mt-7 mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
          Uptodo
        </p>

        <SettingItem icon={<Info size={18} />} title="About US" />
        <SettingItem icon={<HelpCircle size={18} />} title="FAQ" />
        <SettingItem icon={<MessageSquareMore size={18} />} title="Help & Feedback" />
        <SettingItem icon={<ShieldQuestion size={18} />} title="Support US" />

        <button className="mt-5 flex items-center gap-3 text-sm text-red-500"
          onClick={() => {
            localStorage.removeItem('isLoggedIn')
            navigate("/");
          }}
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
      {
        showNameModal && (
          <ChangeNameModal
            currentName={username}
            user = {userinfo}
            setUser={setUserInfo}
            id = {id}
            close={() => setShowNameModal(false)}
            // onSave={(newName) => setUserName(newName)}
          />
        )
      }
      {
        showPasswordModal && (
          <ChangePasswordModal
            close={() => setShowPasswordModal(false)}
          />
        )
      }
      <Footer />
    </div>
  );
}

export default Profile;