import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./src/screens/Login/Login";
import { useNavigate } from "react-router-dom";
import { Button } from "./src/components/ui/button";


function App() {
  const navigate = useNavigate();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />   {/* Login Page Route */}
      </Routes>
      <Button
        onClick={() => navigate("/login")}
        className="bg-[#61e923] text-black border border-solid border-black rounded-none px-6 py-3 h-auto hover:bg-[#61e923] hover:text-black"
      >
        Login
      </Button>
    </Router>
  );
}

export default App;
