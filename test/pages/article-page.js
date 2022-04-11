import Havigation from "./components/nav";

class HomePage {
  open() {
    return browser.url("https://frontendfront.com");
  }

  get articles() {
    return $$(".stories-list li:not(.ads-hosting)");
  }

  get Nav() {
    return Havigation;
  }
}

export default new HomePage();
