import { Route, Routes } from "react-router-dom"
import Layout from "./features/Layout"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
