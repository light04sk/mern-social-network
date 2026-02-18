import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
