/*
Create a new bookmark in Chrome:
Right-click the bookmarks bar and choose "Add page..."
Name it something like "Go to GitHub From GitHub Pages New Window"
In the URL field, paste the following code:

*/

javascript:(function(){
  const match = location.href.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)(\/.*)?$/);
  if (match) {
    const user = match[1];
    const repo = match[2].replace(/\.github\.io$/, ''); // strip if it's a user site
    const pagesUrl = "https://" + user + ".github.io/" + repo;
    window.open(pagesUrl, "_blank",
      "width=1000,height=800,resizable,scrollbars");
  } else {
    alert("Not a GitHub repo URL.");
  }
})();
