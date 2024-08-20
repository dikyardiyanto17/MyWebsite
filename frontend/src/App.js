import router from "./routes";
import { RouterProvider } from "react-router-dom";
import React from 'react';
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'id=GTM-M3T5BT3W'
}
TagManager.initialize(tagManagerArgs)

function App() {
  window.dataLayer.push({
    event: 'pageview'
  });
  return (
      <RouterProvider router={router} />
  );
}

export default App;
