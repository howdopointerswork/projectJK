import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import './App.css';


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Discover from "./pages/Discover";
import Learn from "./pages/Learn";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Account from "./pages/Account";
import Activity from "./pages/Activity";
import CheckIn from "./pages/CheckIn";
import Home from "./pages/Home";
import ExploreA from "./pages/ExploreA";
import DiscoverA from "./pages/DiscoverA";
import LearnA from "./pages/LearnA";
import CheckInA from "./pages/CheckInA";
import ProfileA from "./pages/ProfileA";
import AccountA from "./pages/AccountA";
import SettingsA from "./pages/SettingsA";
import NotificationsA from "./pages/NotificationsA";
import LoginA from "./pages/LoginA";


function App() {
  const [count, setCount] = useState(0)

  return (
     

	  <HashRouter basename="/projectJK">
	 
	 
	  	<Routes>
			<Route path="/projectJK" element={<Login />} />
	  		<Route path="/projectJK/dashboard" element={<Dashboard />} />
	  		<Route path="/profile/:id" element={<Profile />} />
	  		<Route path="/explore" element={<Explore />} />
	  		<Route path="/discover" element={<Discover />} />
	  		<Route path="/learn" element={<Learn />} />
	  		<Route path="/settings" element={<Settings />} />
	  		<Route path="/notifications" element={<Notifications />} />
	  		<Route path="/account" element={<Account />} />
			<Route path="/activity" element={<Activity />} />
	  		<Route path="/checkin" element={<CheckIn />} />
	  		<Route path="/home" element={<Home />} />
	  		<Route path="/exploreA" element={<ExploreA />} />
	  		<Route path="/discoverA" element={<DiscoverA />} />
	  		<Route path="/learnA" element={<LearnA />} />
	  		<Route path="/checkinA" element={<CheckInA />} />
	  		<Route path="/profileA" element={<ProfileA />} />
	  		<Route path="/accountA" element={<AccountA />} />
	  		<Route path="/settingsA" element={<SettingsA />} />
	  		<Route path="/notificationsA" element={<NotificationsA />} />
	  		<Route path="/loginA" element={<LoginA />} />

	
	  	</Routes>
	  </HashRouter>
  );
}

export default App;
