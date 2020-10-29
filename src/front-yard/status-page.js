//import { useOktaAuth } from "@okta/okta-react";
import React from "react";


const StatusPage = () => {
  //const { authState, authService } = useOktaAuth();

 
  return (
    <div>
Status


<div style={{width: '780px', height: '85px', background: '#f9f9f900', display: 'flex', flexDirection: 'row', margin: '0 auto'}}>
    <div style={{padding: '12px'}}><svg width={44} height={52} viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.5V38.5L22 51.5V38.5L11 32.5V19.5L0 12.5Z" fill="#1E91B0" />
        <path d="M44 12.5V38.5L22 51.5V38.5L33 32.5V19.5L44 12.5Z" fill="#239CBD" />
        <path d="M22 26.5L11 32.5L22 38.5L33 32.5L22 26.5Z" fill="#1A7A94" />
        <path d="M11 19.5L0 12.5L22 0L44 12.5L33 19.5L22 13L11 19.5Z" fill="#5DBAD3" />
        <path d="M22 13L11 19.5V32.5L22 26.5V13Z" fill="#1C7188" />
        <path d="M22 13V26.5L33 32.5V19.5L22 13Z" fill="#288DA8" />
      </svg>
    </div>
    <div style={{lineHeight: '68px', paddingLeft: '48px', fontWeight: 500, fontSize: '18px'}}>
      Core Service </div>
    <div style={{width: '20px', height: '40px', background: '#68F79A', marginLeft: 'auto', marginTop: '12px'}} /></div>
    
    </div>
  );
};
export default StatusPage;
