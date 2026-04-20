import { BrowserRouter, Routes, Route } from "react-router-dom";

// Standard layout and central router configuration
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  />
        
        <Route path="*" element={
          <div className="flex min-h-screen items-center justify-center bg-brand-bg text-brand-navy">
            Page Not Found (404)
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
