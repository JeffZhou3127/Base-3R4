import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import AppLayout from "./AppLayout";
import Homepage from "../views/Homepage";
import Solutions from "../views/Solutions";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Homepage />} />
    <Route path=":solutionTitle" element={<Solutions />} />
  </Route>
));

const App = () => <RouterProvider router={router} />;

export default App;
