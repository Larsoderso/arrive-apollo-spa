const CLIENT_ID = process.env.CLIENT_ID || "0oa174wivtGpeG4QS4x7";
const ISSUER =
  process.env.ISSUER || "https://dev-600243.okta.com/oauth2/default";

export default {
  clientId: CLIENT_ID,
  issuer: ISSUER,
  redirectUri: "https://sri4i.csb.app/implicit/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: false
};
