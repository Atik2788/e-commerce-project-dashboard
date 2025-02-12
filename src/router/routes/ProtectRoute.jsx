import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ route, children }) => {
  // console.log(route.role);
  const { role, userInfo } = useSelector((state) => state.auth);

  if (role) {
    if (route.role) {
        if (userInfo) {
            if (userInfo.role === route.role) {
              if (route.status) {
                if (route.status === userInfo.status) {
                  return <Suspense fallback={null}>{children}</Suspense>;
                } else {
                  if (userInfo.status === "pending") {
                    return <Navigate to="/seller/account-pending" replace />;
                  } else {
                    return <Navigate to="/seller/account-deactive" replace />;
                  }
                }
              } else {
                if (route.visibility) {
                    // Here all route.visibility mapping and find which visibility is matching with userinfo.status, like active, pending, deactive etc. if "userInfo === pending" then user only showing "route.visibility === pending".
                  if (route.visibility.some((r) => r === userInfo.status)) { 
                    return <Suspense fallback={null}>{children}</Suspense>;
                  } else {
                    return <Navigate to="/seller/account-pending" replace />;
                  }
                } else {
                  return <Suspense fallback={null}>{children}</Suspense>;
                }
              }
            } else {
              return <Navigate to="/unauthorized" replace />;
            }
          }
    } else {
       if (route.ability === 'seller') {
        return <Suspense fallback={null}>{children}</Suspense>;
       } 
    }

  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectRoute;
