import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import My from "./pages/my";
import Posts from "./pages/posts";
import View from "./pages/view";
import NotPage from "./pages/404";

const App: React.FC = () => {
  const element = useRoutes([
    {
      path: "/home",
      element: <Home />,
      children: [
        { index: true, element: <View /> },
        { path: "/home/:posts", element: <Posts /> },
      ],
    },
    { path: "/about", element: <About /> },
    { path: "/my", element: <My /> },
    { index: true, element: <Navigate to="/home" /> },
    { path: "/*", element: <NotPage /> },
  ]);
  return element;
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/home" element={<Home />}>
  //         <Route index element={<View />} />
  //         <Route path="/home/:posts" element={<Posts />} />
  //       </Route>
  //       <Route path="/about" element={<About />} />
  //       <Route path="/my" element={<My />} />
  //       <Route index element={<Navigate to="/home" />} />
  //       <Route path="*" element={<NotPage />} />
  //     </Routes>
  //   </Router>
  // );
};

export default App;
