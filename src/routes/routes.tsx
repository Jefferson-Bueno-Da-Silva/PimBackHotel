import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts";

import Auth from "./Auth";
import PrivateRoutes from "./PrivateRoutes";

export default function Routes() {
  const authContext = useAuth();
  return authContext.isLogged() ? <PrivateRoutes /> : <Auth />;
}
