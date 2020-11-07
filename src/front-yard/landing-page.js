//import { useOktaAuth } from "@okta/okta-react";
import React from "react";


const LandingPage = () => {
  //const { authState, authService } = useOktaAuth();
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "1020px",
            margin: "0 auto",
            height: "45px",
            paddingTop: 22,
            borderBottom: "1px solid transparent"
          }}
        >
          <a href="/">
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
          </a>
          <div style={{ display: "flex", width: "300px", marginLeft: "22px" }}>
            <a className="am_header_cat" href="/status">
              <div className="am_header_cat">Status</div>
            </a>
            <div className="am_header_cat">Open Data</div>
            <a className="am_header_cat" href="/use-cases">
              Use Cases
            </a>
          </div>
          <div
            style={{
              width: "90px",
              height: "35px",
              textAlign: "center",
              lineHeight: "1.4",
              fontFamily: "var(--sans)",
              letterSpacing: "-.015em",
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
              marginLeft: "auto",
              fontSize: "var(--fontSizeBase)",
              listStyle: "none",
              boxSizing: "inherit",
              textDecoration: "none",
              WebkitTapHighlightColor: "rgba(0,0,0,0)",
              color: "var(--gray6)",
              fontWeight: 500,
              transition: "color .25s ease,border-color .25s ease",
              padding: ".4rem .8rem .35rem",
              border: "1px solid rgba(0,0,0,.1)",
              borderRadius: "var(--borderRadiusSmall)",
              whiteSpace: "nowrap"
            }}
          >
            {" "}
            Sign in{" "}
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            width: "100%",
            height: "680px",
            background: "rgba(255, 255, 255, 0)",
            padding: "2vw",
            position: "relative"
          }}
        >
          <div
            style={{
              paddingBottom: "44px",
              paddingTop: "44px",
              fontSize: "28px",
              textAlign: "center"
            }}
          >
            Build NextGen Mobility Apps.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0 auto",
              width: "150px"
            }}
          >
            <div
              style={{
                width: "150px",
                height: "42px",
                background: "#00639B",
                borderRadius: "4px",
                color: "white",
                textAlign: "center",
                lineHeight: "42px",
                fontWeight: 500
              }}
            >
              Join the waitlist
            </div>
          </div>
          <svg
            width={1143}
            height={466}
            viewBox="0 0 1143 466"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              bottom: "-25px",
              width: "1020px",
              left: "50%",
              marginLeft: "-510px"
            }}
          >
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={1143}
              height={466}
            >
              <rect width={1143} height={466} fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M111.712 92.1787C111.712 67.8782 131.412 48.1787 155.712 48.1787H1042.44C1066.74 48.1787 1086.44 67.8782 1086.44 92.1787V511.104H111.712V92.1787Z"
                fill="#242424"
              />
              <path
                d="M137.553 105.507C137.553 90.0431 150.089 77.5071 165.553 77.5071H1031.91C1047.38 77.5071 1059.91 90.0431 1059.91 105.507V511.107H137.553V105.507Z"
                fill="white"
              />
              <path
                d="M136 99C136 86.8497 145.85 77 158 77H1038C1050.15 77 1060 86.8497 1060 99V465H136V99Z"
                fill="#2F5AF1"
              />
              <rect x={133} y={77} width={242} height={388} fill="white" />
              <rect
                x="48.1743"
                y="113.114"
                width="274.404"
                height="440.582"
                rx={44}
                fill="#242424"
              />
              <rect
                x="64.9326"
                y="129.872"
                width={242}
                height={434}
                rx={28}
                fill="#00ACE9"
              />
              <path
                d="M119.387 122.89H252.051V133.216C252.051 143.709 243.544 152.216 233.051 152.216H138.387C127.894 152.216 119.387 143.709 119.387 133.216V122.89Z"
                fill="#242424"
              />
              <rect
                x="59.1743"
                y="124.114"
                width="252.404"
                height="418.582"
                rx={33}
                stroke="#242424"
                strokeWidth={22}
              />
            </g>
          </svg>
        </div>
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "#ECF2F2",
            paddingTop: "44px"
          }}
        >
          <svg
            width={370}
            height={222}
            viewBox="0 0 370 222"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", margin: "0 auto" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M124 122H16.0001V155.901C14.6622 158.741 15.925 161.905 19.7886 164.135L59.1076 186.834C64.8473 190.147 74.1531 190.147 79.8927 186.834L119.212 164.135C121.255 162.956 122.571 161.515 123.159 160H124V122Z"
              fill="#1DC062"
            />
            <rect
              x="4.33022"
              width="64.4007"
              height="64.4007"
              rx="9.5"
              transform="matrix(0.866044 -0.499967 0.866044 0.499967 10.5801 124.863)"
              fill="white"
              stroke="#0CB252"
              strokeWidth={5}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M363 34H255V67.9011C253.662 70.7414 254.925 73.9047 258.789 76.1352L298.108 98.834C303.847 102.148 313.153 102.148 318.893 98.834L358.212 76.1351C360.255 74.9557 361.571 73.5154 362.159 72H363V34Z"
              fill="#2F5AF1"
            />
            <rect
              x="4.33022"
              width="64.4007"
              height="64.4007"
              rx="9.5"
              transform="matrix(0.866044 -0.499967 0.866044 0.499967 249.58 36.863)"
              fill="white"
              stroke="#1B42C8"
              strokeWidth={5}
            />
            <path
              d="M5.64258 217.014H2.33789L1.64648 219H0.105469L3.32812 210.469H4.6582L7.88672 219H6.33984L5.64258 217.014ZM2.75391 215.818H5.22656L3.99023 212.279L2.75391 215.818ZM12.041 213.961C11.8535 213.93 11.6602 213.914 11.4609 213.914C10.8086 213.914 10.3691 214.164 10.1426 214.664V219H8.71875V212.66H10.0781L10.1133 213.369C10.457 212.818 10.9336 212.543 11.543 212.543C11.7461 212.543 11.9141 212.57 12.0469 212.625L12.041 213.961ZM16.2598 213.961C16.0723 213.93 15.8789 213.914 15.6797 213.914C15.0273 213.914 14.5879 214.164 14.3613 214.664V219H12.9375V212.66H14.2969L14.332 213.369C14.6758 212.818 15.1523 212.543 15.7617 212.543C15.9648 212.543 16.1328 212.57 16.2656 212.625L16.2598 213.961ZM18.6738 219H17.25V212.66H18.6738V219ZM17.1621 211.014C17.1621 210.795 17.2305 210.613 17.3672 210.469C17.5078 210.324 17.707 210.252 17.9648 210.252C18.2227 210.252 18.4219 210.324 18.5625 210.469C18.7031 210.613 18.7734 210.795 18.7734 211.014C18.7734 211.229 18.7031 211.408 18.5625 211.553C18.4219 211.693 18.2227 211.764 17.9648 211.764C17.707 211.764 17.5078 211.693 17.3672 211.553C17.2305 211.408 17.1621 211.229 17.1621 211.014ZM22.4648 217.195L23.8066 212.66H25.2773L23.0801 219H21.8438L19.6289 212.66H21.1055L22.4648 217.195ZM28.8809 219.117C27.9785 219.117 27.2461 218.834 26.6836 218.268C26.125 217.697 25.8457 216.939 25.8457 215.994V215.818C25.8457 215.186 25.9668 214.621 26.209 214.125C26.4551 213.625 26.7988 213.236 27.2402 212.959C27.6816 212.682 28.1738 212.543 28.7168 212.543C29.5801 212.543 30.2461 212.818 30.7148 213.369C31.1875 213.92 31.4238 214.699 31.4238 215.707V216.281H27.2812C27.3242 216.805 27.498 217.219 27.8027 217.523C28.1113 217.828 28.498 217.98 28.9629 217.98C29.6152 217.98 30.1465 217.717 30.5566 217.189L31.3242 217.922C31.0703 218.301 30.7305 218.596 30.3047 218.807C29.8828 219.014 29.4082 219.117 28.8809 219.117ZM28.7109 213.686C28.3203 213.686 28.0039 213.822 27.7617 214.096C27.5234 214.369 27.3711 214.75 27.3047 215.238H30.0176V215.133C29.9863 214.656 29.8594 214.297 29.6367 214.055C29.4141 213.809 29.1055 213.686 28.7109 213.686ZM40.4355 217.014H37.1309L36.4395 219H34.8984L38.1211 210.469H39.4512L42.6797 219H41.1328L40.4355 217.014ZM37.5469 215.818H40.0195L38.7832 212.279L37.5469 215.818ZM44.5547 212.66L44.5957 213.393C45.0645 212.826 45.6797 212.543 46.4414 212.543C47.7617 212.543 48.4336 213.299 48.457 214.811V219H47.0332V214.893C47.0332 214.49 46.9453 214.193 46.7695 214.002C46.5977 213.807 46.3145 213.709 45.9199 213.709C45.3457 213.709 44.918 213.969 44.6367 214.488V219H43.2129V212.66H44.5547ZM53.7012 219C53.6387 218.879 53.584 218.682 53.5371 218.408C53.084 218.881 52.5293 219.117 51.873 219.117C51.2363 219.117 50.7168 218.936 50.3145 218.572C49.9121 218.209 49.7109 217.76 49.7109 217.225C49.7109 216.549 49.9609 216.031 50.4609 215.672C50.9648 215.309 51.6836 215.127 52.6172 215.127H53.4902V214.711C53.4902 214.383 53.3984 214.121 53.2148 213.926C53.0312 213.727 52.752 213.627 52.377 213.627C52.0527 213.627 51.7871 213.709 51.5801 213.873C51.373 214.033 51.2695 214.238 51.2695 214.488H49.8457C49.8457 214.141 49.9609 213.816 50.1914 213.516C50.4219 213.211 50.7344 212.973 51.1289 212.801C51.5273 212.629 51.9707 212.543 52.459 212.543C53.2012 212.543 53.793 212.73 54.2344 213.105C54.6758 213.477 54.9023 214 54.9141 214.676V217.535C54.9141 218.105 54.9941 218.561 55.1543 218.9V219H53.7012ZM52.1367 217.975C52.418 217.975 52.6816 217.906 52.9277 217.77C53.1777 217.633 53.3652 217.449 53.4902 217.219V216.023H52.7227C52.1953 216.023 51.7988 216.115 51.5332 216.299C51.2676 216.482 51.1348 216.742 51.1348 217.078C51.1348 217.352 51.2246 217.57 51.4043 217.734C51.5879 217.895 51.832 217.975 52.1367 217.975ZM57.9199 219H56.4961V210H57.9199V219ZM61.6934 216.961L62.9824 212.66H64.5L61.9805 219.961C61.5938 221.027 60.9375 221.561 60.0117 221.561C59.8047 221.561 59.5762 221.525 59.3262 221.455V220.354L59.5957 220.371C59.9551 220.371 60.2246 220.305 60.4043 220.172C60.5879 220.043 60.7324 219.824 60.8379 219.516L61.043 218.971L58.8164 212.66H60.3516L61.6934 216.961ZM67.1074 211.119V212.66H68.2266V213.715H67.1074V217.254C67.1074 217.496 67.1543 217.672 67.248 217.781C67.3457 217.887 67.5176 217.939 67.7637 217.939C67.9277 217.939 68.0938 217.92 68.2617 217.881V218.982C67.9375 219.072 67.625 219.117 67.3242 219.117C66.2305 219.117 65.6836 218.514 65.6836 217.307V213.715H64.6406V212.66H65.6836V211.119H67.1074ZM70.834 219H69.4102V212.66H70.834V219ZM69.3223 211.014C69.3223 210.795 69.3906 210.613 69.5273 210.469C69.668 210.324 69.8672 210.252 70.125 210.252C70.3828 210.252 70.582 210.324 70.7227 210.469C70.8633 210.613 70.9336 210.795 70.9336 211.014C70.9336 211.229 70.8633 211.408 70.7227 211.553C70.582 211.693 70.3828 211.764 70.125 211.764C69.8672 211.764 69.668 211.693 69.5273 211.553C69.3906 211.408 69.3223 211.229 69.3223 211.014ZM74.9941 217.98C75.3496 217.98 75.6445 217.877 75.8789 217.67C76.1133 217.463 76.2383 217.207 76.2539 216.902H77.5957C77.5801 217.297 77.457 217.666 77.2266 218.01C76.9961 218.35 76.6836 218.619 76.2891 218.818C75.8945 219.018 75.4688 219.117 75.0117 219.117C74.125 219.117 73.4219 218.83 72.9023 218.256C72.3828 217.682 72.123 216.889 72.123 215.877V215.73C72.123 214.766 72.3809 213.994 72.8965 213.416C73.4121 212.834 74.1152 212.543 75.0059 212.543C75.7598 212.543 76.373 212.764 76.8457 213.205C77.3223 213.643 77.5723 214.219 77.5957 214.934H76.2539C76.2383 214.57 76.1133 214.271 75.8789 214.037C75.6484 213.803 75.3535 213.686 74.9941 213.686C74.5332 213.686 74.1777 213.854 73.9277 214.189C73.6777 214.521 73.5508 215.027 73.5469 215.707V215.936C73.5469 216.623 73.6699 217.137 73.916 217.477C74.166 217.812 74.5254 217.98 74.9941 217.98ZM82.2246 217.277C82.2246 217.023 82.1191 216.83 81.9082 216.697C81.7012 216.564 81.3555 216.447 80.8711 216.346C80.3867 216.244 79.9824 216.115 79.6582 215.959C78.9473 215.615 78.5918 215.117 78.5918 214.465C78.5918 213.918 78.8223 213.461 79.2832 213.094C79.7441 212.727 80.3301 212.543 81.041 212.543C81.7988 212.543 82.4102 212.73 82.875 213.105C83.3438 213.48 83.5781 213.967 83.5781 214.564H82.1543C82.1543 214.291 82.0527 214.064 81.8496 213.885C81.6465 213.701 81.377 213.609 81.041 213.609C80.7285 213.609 80.4727 213.682 80.2734 213.826C80.0781 213.971 79.9805 214.164 79.9805 214.406C79.9805 214.625 80.0723 214.795 80.2559 214.916C80.4395 215.037 80.8105 215.16 81.3691 215.285C81.9277 215.406 82.3652 215.553 82.6816 215.725C83.002 215.893 83.2383 216.096 83.3906 216.334C83.5469 216.572 83.625 216.861 83.625 217.201C83.625 217.771 83.3887 218.234 82.916 218.59C82.4434 218.941 81.8242 219.117 81.0586 219.117C80.5391 219.117 80.0762 219.023 79.6699 218.836C79.2637 218.648 78.9473 218.391 78.7207 218.062C78.4941 217.734 78.3809 217.381 78.3809 217.002H79.7637C79.7832 217.338 79.9102 217.598 80.1445 217.781C80.3789 217.961 80.6895 218.051 81.0762 218.051C81.4512 218.051 81.7363 217.98 81.9316 217.84C82.127 217.695 82.2246 217.508 82.2246 217.277ZM92.9824 215.191H89.4785V217.816H93.5742V219H87.9961V210.469H93.5332V211.664H89.4785V214.02H92.9824V215.191ZM95.9648 212.66L96.0059 213.393C96.4746 212.826 97.0898 212.543 97.8516 212.543C99.1719 212.543 99.8438 213.299 99.8672 214.811V219H98.4434V214.893C98.4434 214.49 98.3555 214.193 98.1797 214.002C98.0078 213.807 97.7246 213.709 97.3301 213.709C96.7559 213.709 96.3281 213.969 96.0469 214.488V219H94.623V212.66H95.9648ZM101.074 215.783C101.074 214.799 101.305 214.014 101.766 213.428C102.23 212.838 102.846 212.543 103.611 212.543C104.334 212.543 104.902 212.795 105.316 213.299L105.381 212.66H106.664V218.807C106.664 219.639 106.404 220.295 105.885 220.775C105.369 221.256 104.672 221.496 103.793 221.496C103.328 221.496 102.873 221.398 102.428 221.203C101.986 221.012 101.65 220.76 101.42 220.447L102.094 219.592C102.531 220.111 103.07 220.371 103.711 220.371C104.184 220.371 104.557 220.242 104.83 219.984C105.104 219.73 105.24 219.355 105.24 218.859V218.432C104.83 218.889 104.283 219.117 103.6 219.117C102.857 219.117 102.25 218.822 101.777 218.232C101.309 217.643 101.074 216.826 101.074 215.783ZM102.492 215.906C102.492 216.543 102.621 217.045 102.879 217.412C103.141 217.775 103.502 217.957 103.963 217.957C104.537 217.957 104.963 217.711 105.24 217.219V214.43C104.971 213.949 104.549 213.709 103.975 213.709C103.506 213.709 103.141 213.895 102.879 214.266C102.621 214.637 102.492 215.184 102.492 215.906ZM109.646 219H108.223V212.66H109.646V219ZM108.135 211.014C108.135 210.795 108.203 210.613 108.34 210.469C108.48 210.324 108.68 210.252 108.938 210.252C109.195 210.252 109.395 210.324 109.535 210.469C109.676 210.613 109.746 210.795 109.746 211.014C109.746 211.229 109.676 211.408 109.535 211.553C109.395 211.693 109.195 211.764 108.938 211.764C108.68 211.764 108.48 211.693 108.34 211.553C108.203 211.408 108.135 211.229 108.135 211.014ZM112.523 212.66L112.564 213.393C113.033 212.826 113.648 212.543 114.41 212.543C115.73 212.543 116.402 213.299 116.426 214.811V219H115.002V214.893C115.002 214.49 114.914 214.193 114.738 214.002C114.566 213.807 114.283 213.709 113.889 213.709C113.314 213.709 112.887 213.969 112.605 214.488V219H111.182V212.66H112.523ZM120.674 219.117C119.771 219.117 119.039 218.834 118.477 218.268C117.918 217.697 117.639 216.939 117.639 215.994V215.818C117.639 215.186 117.76 214.621 118.002 214.125C118.248 213.625 118.592 213.236 119.033 212.959C119.475 212.682 119.967 212.543 120.51 212.543C121.373 212.543 122.039 212.818 122.508 213.369C122.98 213.92 123.217 214.699 123.217 215.707V216.281H119.074C119.117 216.805 119.291 217.219 119.596 217.523C119.904 217.828 120.291 217.98 120.756 217.98C121.408 217.98 121.939 217.717 122.35 217.189L123.117 217.922C122.863 218.301 122.523 218.596 122.098 218.807C121.676 219.014 121.201 219.117 120.674 219.117ZM120.504 213.686C120.113 213.686 119.797 213.822 119.555 214.096C119.316 214.369 119.164 214.75 119.098 215.238H121.811V215.133C121.779 214.656 121.652 214.297 121.43 214.055C121.207 213.809 120.898 213.686 120.504 213.686Z"
              fill="#0D1D53"
            />
            <path
              d="M98 105L224.5 17.5L269.5 43"
              stroke="#536F88"
              strokeOpacity="0.38"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
          </svg>
        </div>
        <div style={{ padding: "22px" }}>
          <div
            style={{
              width: "220px",
              height: "190px",
              background: "rgb(238, 244, 249)",
              borderRadius: "6px",
              paddingTop: "28px"
            }}
          >
            <svg
              width={80}
              height={50}
              viewBox="0 0 80 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "160px",
                height: "80px",
                display: "block",
                margin: "0px auto"
              }}
            >
              <rect
                x="0.5"
                y="26.5"
                width={45}
                height={23}
                rx="1.5"
                stroke="#025B81"
              />
              <rect
                x="0.5"
                y="0.5"
                width={16}
                height={16}
                rx="4.5"
                stroke="#025B81"
              />
              <rect
                x="19.5"
                y="0.5"
                width={16}
                height={6}
                rx={3}
                fill="#025B81"
                stroke="#025B81"
              />
              <rect x={20} y={1} width={5} height={5} rx="2.5" fill="white" />
              <rect
                x="53.25"
                y="2.25"
                width="24.5"
                height="4.5"
                rx="0.75"
                stroke="#025B81"
                strokeWidth="0.5"
              />
              <mask id="path-6-inside-1" fill="white">
                <rect x={54} y={3} width={12} height={3} rx="0.5" />
              </mask>
              <rect
                x={54}
                y={3}
                width={12}
                height={3}
                rx="0.5"
                fill="#025B81"
                stroke="#025B81"
                strokeWidth={2}
                mask="url(#path-6-inside-1)"
              />
              <rect
                x="51.5"
                y="0.5"
                width={28}
                height={49}
                rx="1.5"
                stroke="#025B81"
              />
            </svg>
            <div
              style={{
                textAlign: "center",
                paddingTop: "26px",
                fontSize: "20px",
                color: "rgb(27, 72, 98)",
                fontWeight: 500
              }}
            >
              {" "}
              Design System{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
