import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Blogs, BlogPostPage } from "./pages";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
