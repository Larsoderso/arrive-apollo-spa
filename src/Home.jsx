import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { authState } = useOktaAuth();

  return (
    authState.isAuthenticated == true && (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "2vw",
            paddingRight: "2vw"
          }}
        >
          <div className="am_docs_sidebar">
            <div className="am_docs_sidebar_inner">
              <div
                className="am_docs_dropdown"
                tabIndex={0}
                id="dk0-combobox"
                aria-live="assertive"
                aria-owns="dk0-listbox"
                role="combobox"
              >
                API version 0.3 (latest)
              </div>

              <div className="am_docs_sbar_header">Overview</div>

              <div className="am_docs_sbar_header">Routes</div>
              <ul>
                <li>Intermodal</li>
                <li>Shuttle</li>
              </ul>
              <div className="am_docs_sbar_header">Pooling</div>
              <div className="am_docs_sbar_header">Ticketing</div>
              <ul>
                <li>QR code</li>
                <li>NFC</li>
              </ul>
              <div className="am_docs_sbar_header">Customer Identity</div>
              <div className="am_docs_sbar_header">Payments</div>
              <div className="am_docs_sbar_header">Mobility Apps</div>
            </div>
          </div>
          <div
            style={{
              width: "500px",
              height: "800px",
              background: "white",
              paddingLeft: "24PX"
            }}
          >
            <div className="am_docs_sidebar_inner">
              <div className="am_docs_sbar_header">Intermodal Routes</div>

              <div className="am_docs_endpoint_manager">
                <div className="am_docs_endpoint_manager_left">POST</div>
                <div className="am_docs_endpoint_manager_right">
                  https://core.arrive-mobility.com/atlas/cgn/48.777111/9.180770/48.804989/9.215460/16-22-2020/10:30
                </div>
              </div>

              <div className="am_docs_gen_title">Parameters</div>
              <div className="am_docs_gen_title">Request</div>
              <div className="am_docs_gen_title">Response</div>
            </div>
          </div>
          <div
            style={{
              width: "500px",
              height: "800px",
              background: "#2E343B",
              marginLeft: "auto",
              display: "none"
            }}
          ></div>
        </div>
      </div>
    )
  );
};

export default Home;
