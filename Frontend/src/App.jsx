import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Feed from "./pages/Feed";
import Network from "./pages/Network";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import ProfilePosts from "./pages/ProfilePosts";
import Notifications from "./pages/Notifications";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/network" element={<Network />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/posts" element={<ProfilePosts />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
