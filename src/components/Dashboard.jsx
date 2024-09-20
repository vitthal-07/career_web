import React from 'react';
import Sidebar from './dash-comp/Sidebar';
import Topbar from './dash-comp/Topbar';
import ProfileInfo from './dash-comp/ProfileInfo';
import Scoreboard from './dash-comp/Scoreboard';
import PathwayProgress from './dash-comp/PathwayProgress';
import Community from './dash-comp/Community';
import Notifications from './dash-comp/Notifications';
import MentorInfo from './dash-comp/MentorInfo';
import ProgressTracking from './dash-comp/ProgressTracking';

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfileInfo />
          <Scoreboard />
          <PathwayProgress />
          <Community />
          <Notifications />
          <MentorInfo />
          <ProgressTracking />
        </div>
      </div>
    </div>
  );
}
