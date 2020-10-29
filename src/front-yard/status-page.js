import { useOktaAuth } from "@okta/okta-react";
import React from "react";


const StatusPage = () => {
  const { authState, authService } = useOktaAuth();

 
  return (
    <div>
Status
    </div>
  );
};
export default StatusPage;
