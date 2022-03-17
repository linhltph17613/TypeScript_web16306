import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      WebsiteLayout
      <Outlet />
    </div>
  );
};
export default WebsiteLayout;
