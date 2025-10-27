import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Lamp } from "./screens/Lamp";
import { Screen } from "./screens/Screen";
import { Screen4 } from "./screens/Screen4";
import { ScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper } from "./screens/ScreenWrapper";
import { Top } from "./screens/Top";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Top />,
  },
  {
    path: "/topu12504u12442u12540u12471u12441",
    element: <Top />,
  },
  {
    path: "/u32946u25104u12459u12522u12461u12517u12521u12512",
    element: <Screen />,
  },
  {
    path: "/u12424u12367u12354u12427u36074u21839",
    element: <ScreenScreen />,
  },
  {
    path: "/u21463u35611u12398u27969u12428",
    element: <ScreenWrapper />,
  },
  {
    path: "/u35611u24107u32057u20171",
    element: <Screen4 />,
  },
  {
    path: "/lampu12398u32057u20171",
    element: <Lamp />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
