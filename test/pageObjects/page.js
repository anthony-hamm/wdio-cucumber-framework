
export default class Page {

  // reusable methods

  // open URL
  open (path) {
    browser.url(path);
  }

  // verify element is clickable, scroll until it's visible and then click
  customClick(webLocator) {
    webLocator.waitForClickable();
    webLocator.scrollIntoView();
    webLocator.click();
  }

  // clear input field, then fill with text
  insertText (webLocator, text) {
    webLocator.clearValue();
    webLocator.setValue(text);
  }

}