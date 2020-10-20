import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import JSONPretty from "react-json-pretty";

const Home = () => {
  const { authState } = useOktaAuth();
  const dataToPrint = {
    meta: {
      version: 1,
      name: "flabbatest",
      date: "2020-05-05",
      api_key: "447E-8F40-FCACE2C356"
    },
    params: {
      annual_income: 220000,
      cash: 22000,
      credit_score: 760,
      customer_name: "Jack Kerouac",
      email: "jk@example.com"
    },
    result: {
      cash: 50000,
      principal_and_interest: 1960.08
    }
  };
  return (
    authState.isAuthenticated === true && (
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
                aria-controls=""
                aria-expanded="false"
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

              <ul>
                <li>Single Sign On</li>
                <li>Self Sovereign Identity</li>
              </ul>
              <div className="am_docs_sbar_header">Payments</div>
              <div className="am_docs_sbar_header">Mobility Apps</div>
              <ul>
                <li>Intermodal</li>
                <li>Shuttle</li>
                <li>Shuttle Driver</li>
              </ul>

              <div className="am_docs_sbar_header">Covid-19</div>
              <ul>
                <li>Cities</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              maxWidth: "800px",
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

              <table>
                <tr>
                  <td>City</td>
                  <td>1.2345</td>
                  <td>Placeholder</td>
                </tr>
              </table>

              <div className="am_docs_gen_title">Parameters</div>

              <table>
                <tr>
                  <td>Longitude</td>
                  <td>1.2345</td>
                  <td>Placeholder</td>
                </tr>
                <tr>
                  <td>Latitude</td>
                  <td>1.2345</td>
                  <td>Placeholder</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>1.2345</td>
                  <td>Placeholder</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>1.2345</td>
                  <td>Placeholder</td>
                </tr>
              </table>
              <div className="am_docs_gen_title">Request</div>

              <JSONPretty
                className="am_docs_json_display"
                id="json-pretty"
                data={dataToPrint}
              ></JSONPretty>

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
