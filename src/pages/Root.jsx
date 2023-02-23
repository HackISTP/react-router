import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";

export default function Root() {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
}
