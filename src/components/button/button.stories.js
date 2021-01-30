import "./button.css";
import buttonText from "./button-text.html";
import buttonLogo from "./button-logo.html";
import buttonHome from "./home-button.html";
import buttonSearch from "./search-button.html";
import buttonStar from "./star-button.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const withText = () => buttonText;
export const withLogo = () => buttonLogo;
export const withHome = () => buttonHome;
export const withSearch = () => buttonSearch;
export const withStar = () => buttonStar;
