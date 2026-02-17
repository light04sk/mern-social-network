import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
