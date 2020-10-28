import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import logo from "./logo.svg";

const Navbar = () => {
  const { authState, authService } = useOktaAuth();

  const login = async () => authService.login("/");
  const logout = async () => authService.logout("/");

  return (
    <div>
      <div className="am_docs_header_top">
        <svg
          width={54}
          height={26}
          viewBox="0 0 54 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.3978 7.84591C36.4914 6.3022 34.8647 5.38199 33.0474 5.37898H33.0443C31.9767 5.37898 30.9736 5.69676 30.1426 6.27659L31.5297 8.63208C31.6434 8.53117 31.7693 8.44231 31.9015 8.36852C32.2409 8.17574 32.6327 8.07031 33.0459 8.07031C33.8708 8.07031 34.6112 8.489 35.0244 9.19233L44.527 25.3283C44.782 25.759 45.2444 26 45.7175 26C45.9479 26 46.186 25.9428 46.4026 25.8223C47.0586 25.4488 47.2828 24.6264 46.9034 23.9834L37.3978 7.84591Z"
            fill="#00F464"
          />
          <path
            d="M53.2328 23.9804L42.1465 5.1546C40.5581 2.45574 37.8576 0.627378 34.7377 0.134896C31.859 -0.318429 28.9802 0.381894 26.7129 2.06868C27.4441 2.61087 28.1062 3.25395 28.6791 3.9874C30.2998 2.90906 32.2983 2.47833 34.303 2.79159C36.6379 3.15907 38.5811 4.47537 39.7716 6.50102L50.858 25.3268C51.113 25.7575 51.5753 25.9985 52.0485 25.9985C52.2789 25.9985 52.517 25.9413 52.7336 25.8208C53.388 25.4458 53.6138 24.6235 53.2328 23.9804Z"
            fill="#00F464"
          />
          <path
            d="M40.5663 23.9803L29.4815 5.15609C27.5813 1.9286 24.1772 0.00234222 20.3752 0.00234222C16.5748 0.00234222 13.1692 1.9286 11.269 5.15609L0.184195 23.9803C-0.195232 24.6234 0.0305835 25.4457 0.686516 25.8177C1.34245 26.1882 2.18118 25.9683 2.5606 25.3253L13.6454 6.501C15.0494 4.1154 17.5656 2.69066 20.3752 2.69066C23.1848 2.69066 25.701 4.1154 27.1051 6.501L38.1898 25.3253C38.4433 25.756 38.9042 25.9985 39.3788 25.9985C39.6108 25.9985 39.8473 25.9397 40.0639 25.8177C40.7199 25.4457 40.9442 24.6234 40.5663 23.9803Z"
            fill="#00A88A"
          />
          <path
            d="M24.7281 7.84443C23.8188 6.30071 22.1904 5.37901 20.3732 5.37901C18.5559 5.37901 16.9276 6.30071 16.0182 7.84443L6.5172 23.9804C6.13778 24.6235 6.36359 25.4458 7.01952 25.8178C7.23612 25.9398 7.47114 25.9985 7.70464 25.9985C8.1793 25.9985 8.64015 25.7575 8.89361 25.3253L18.3946 9.18934C18.8079 8.48752 19.5483 8.06883 20.3747 8.06883C21.2012 8.06883 21.9416 8.48752 22.3548 9.18934L31.8558 25.3253C32.2337 25.9684 33.0725 26.1883 33.7299 25.8178C34.3859 25.4458 34.6101 24.6235 34.2323 23.9804L24.7281 7.84443Z"
            fill="#00A88A"
          />
          <path
            d="M20.3727 11.206L12.8502 23.9804C12.4708 24.6235 12.6966 25.4458 13.3525 25.8178C13.5691 25.9398 13.8042 25.9985 14.0376 25.9985C14.5123 25.9985 14.9732 25.7576 15.2266 25.3253L20.3727 16.5856L25.5188 25.3253C25.8967 25.9684 26.7354 26.1883 27.3929 25.8178C28.0488 25.4458 28.2731 24.6235 27.8952 23.9804L20.3727 11.206Z"
            fill="#00A88A"
          />
        </svg>
        <div style={{ display: "flex", width: "480px", marginLeft: "auto" }}>
          <div className="am_header_cat">Docs</div>
          <div className="am_header_cat">Status</div>
          <div className="am_header_cat">Open Data</div>
          <div className="am_header_cat">Use Cases</div>

          {authState.isAuthenticated && (
          <div className="am_header_cat">Apps</div>
          )}


          <div>LD</div>
        </div>

        {authState.isAuthenticated && (
          <Menu.Item id="profile-button" as="a" href="/profile">
            Profile
          </Menu.Item>
        )}
        {authState.isAuthenticated && (
          <Menu.Item id="logout-button" as="a" onClick={logout}>
            Logout
          </Menu.Item>
        )}
        {!authState.isPending && !authState.isAuthenticated && (
          <Menu.Item as="a" onClick={login}>
            Login
          </Menu.Item>
        )}
      </div>
      <Menu fixed="top" inverted style={{ display: "none" }}>
        <Container>
          <Menu.Item as="a" header href="/">
            <Image size="mini" src={logo} />
            &nbsp; Okta-React Sample Project
          </Menu.Item>
          {authState.isAuthenticated && (
            <Menu.Item id="profile-button" as="a" href="/profile">
              Profile
            </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="logout-button" as="a" onClick={logout}>
              Logout
            </Menu.Item>
          )}
          {!authState.isPending && !authState.isAuthenticated && (
            <Menu.Item as="a" onClick={login}>
              Login
            </Menu.Item>
          )}
        </Container>
      </Menu>
    </div>
  );
};
export default Navbar;
