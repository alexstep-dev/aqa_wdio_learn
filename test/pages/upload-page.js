class UploadPage {
  open() {
    return browser.url("http://localhost:3000");
  }

  setBreakPointMD() {
    switch (browser.capabilities.browserName) {
      case "firefox": {
        return browser.setWindowSize(1036, 768);
      }
      case "chrome": {
        return browser.setWindowSize(1040, 768);
      }
    }
  }
}

export default new UploadPage();
