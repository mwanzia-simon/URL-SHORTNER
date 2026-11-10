import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import SignUp from "./components/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
