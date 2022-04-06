import React from "react";
import { Navigate } from "react-router-dom";

type PrivateRouterProps = {
  children: JSX.Element;
};

const PrivateRouter = (props: PrivateRouterProps) => {
  const isUser = true; //lấy role từ localStorage ra
  if (!isUser) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export default PrivateRouter;
