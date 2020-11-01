//import { useOktaAuth } from "@okta/okta-react";
import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from "react-vis";

const StatusPage = () => {
  //const { authState, authService } = useOktaAuth();

 
  return (
<div style={{paddingLeft: '2vw', paddingRight: '2vw', paddingTop: '24px', paddingBottom: '22px', fontSize: '22px'}}><div>Status</div>
  <div style={{background: '#FFFFFF', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', borderRadius: '7px', width: '780px', height: '240px', margin: '0 auto', marginBottom: '22px', padding: 12}}>
  <XYPlot width={700} height={180} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]} />
          <VerticalBarSeries data={[{x: 1, y: 12}, {x: 2, y: 2}, {x: 3, y: 11}]} />
        </XYPlot>

  </div>
  <div style={{width: '780px', height: '85px', background: 'rgba(249, 249, 249, 0)', display: 'flex', flexDirection: 'row', margin: '0px auto'}}><div style={{padding: '12px'}}><svg width={44} height={52} viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12.5V38.5L22 51.5V38.5L11 32.5V19.5L0 12.5Z" fill="#1E91B0" /><path d="M44 12.5V38.5L22 51.5V38.5L33 32.5V19.5L44 12.5Z" fill="#239CBD" /><path d="M22 26.5L11 32.5L22 38.5L33 32.5L22 26.5Z" fill="#1A7A94" /><path d="M11 19.5L0 12.5L22 0L44 12.5L33 19.5L22 13L11 19.5Z" fill="#5DBAD3" /><path d="M22 13L11 19.5V32.5L22 26.5V13Z" fill="#1C7188" /><path d="M22 13V26.5L33 32.5V19.5L22 13Z" fill="#288DA8" /></svg></div><div style={{lineHeight: '68px', paddingLeft: '48px', fontWeight: 500, fontSize: '18px'}}>Core Service </div><div style={{width: '20px', height: '40px', background: 'rgb(104, 247, 154)', marginLeft: 'auto', marginTop: '12px'}} /></div>
  <div style={{width: '780px', height: '85px', background: 'rgba(249, 249, 249, 0)', display: 'flex', flexDirection: 'row', margin: '0px auto'}}><div style={{padding: '12px'}}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Ebene_1" x="0px" y="0px" viewBox="0 0 100 100" style={{height: '44px'}} xmlSpace="preserve">
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st0{fill:#00A88A;}\n\t.st1{fill:#00F464;}\n" }} />
        <path className="st0" d="M47.2,82.3h5.6c1-1,25.5-23,25.5-50.4C78.2,17.7,65.8,6.2,50,6.2S21.7,17.8,21.7,31.9  C21.7,59.2,46.2,81.3,47.2,82.3z M50,14.6c11,0,19.9,7.8,19.9,17.3C69.9,50.4,56,67,50,73.3C44,67,30.1,50.4,30.1,31.9  C30.1,22.3,39,14.6,50,14.6z" />
        <path className="st1" d="M63.4,34.5c0-7.4-6-13.4-13.4-13.4s-13.4,6-13.4,13.4c0,7.4,6,13.4,13.4,13.4C57.4,47.9,63.4,41.9,63.4,34.5z   M44.9,34.5c0-2.8,2.3-5.1,5.1-5.1c2.8,0,5.1,2.3,5.1,5.1c0,2.8-2.3,5.1-5.1,5.1c0,0,0,0,0,0C47.2,39.6,44.9,37.3,44.9,34.5  C44.9,34.5,44.9,34.5,44.9,34.5z" />
        <rect x="14.6" y="87.5" className="st0" width="70.8" height="8.3" />
      </svg></div><div style={{lineHeight: '68px', paddingLeft: '48px', fontWeight: 500, fontSize: '18px'}}>Here &amp; Now</div><div style={{width: '20px', height: '40px', background: 'rgb(104, 247, 154)', marginLeft: 'auto', marginTop: '12px'}} /></div><div style={{width: '780px', height: '85px', background: 'rgba(249, 249, 249, 0)', display: 'flex', flexDirection: 'row', margin: '0px auto'}}><div style={{padding: '12px'}}><svg width={44} height={44} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={13} cy={12} r="6.5" fill="white" stroke="#00A88A" />
        <circle cx="1.5" cy="10.5" r={1} fill="white" stroke="#00F464" />
        <circle cx="18.5" cy="1.5" r={1} fill="white" stroke="#00F464" />
        <circle cx="18.5" cy="22.5" r={1} fill="white" stroke="#00F464" />
        <circle cx="6.5" cy="1.5" r={1} fill="white" stroke="#68F79A" />
        <circle cx="7.5" cy="22.5" r={1} fill="white" stroke="#68F79A" />
        <circle cx="24.5" cy="10.5" r={1} fill="white" stroke="#68F79A" />
      </svg>
    </div><div style={{lineHeight: '68px', paddingLeft: '48px', fontWeight: 500, fontSize: '18px'}}>Developer Platform</div><div style={{width: '20px', height: '40px', background: 'rgb(104, 247, 154)', marginLeft: 'auto', marginTop: '12px'}} /></div></div>
  );
};
export default StatusPage;
