/*
How to Use:
Create a new bookmark in Chrome:
Right-click the bookmarks bar and choose "Add page..."
Name it something like Go to Open Pages in GitHub
In the URL field, paste the following code:
This opens page in a new Tab
*/

javascript:(function(){
  const match = location.href.match(/^https:\/\/github\.com\/([^\/]+)\/([^\/?#]+)(?:[\/?#]|$)/);
  if (match) {
    const user = match[1];
    const repo = match[2];
    const pagesUrl = `https://${user}.github.io/${repo}`;
    window.open(pagesUrl, "_blank");
  } else {
    alert("This doesn't appear to be a GitHub repository URL.");
  }
})();
