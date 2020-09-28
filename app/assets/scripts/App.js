import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";

let mobilemenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
