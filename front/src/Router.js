import { BrowserRouter, Routes, Route } from "react-router-dom";
import Note from "./components/note/Note";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/note" element={<Note />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
