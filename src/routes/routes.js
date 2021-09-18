import React, { useState } from "react";
import Auth from "./Auth";

import PrivateRoutes from "./PrivateRoutes";

export default function Routes() {
  const [auth, setAuth] = useState(false);
  return auth ? <PrivateRoutes /> : <Auth />;
}
