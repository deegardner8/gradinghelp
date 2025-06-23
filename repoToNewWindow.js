/*
How to Use:
Create a new bookmark in Chrome:
Right-click the bookmarks bar and choose "Add page..."
Name it something like "Open Pages GitHub Repo"
In the URL field, paste the following code:
This opens repo in a new Window from a GitHub Pages
*/

javascript:(function(){
  const match = location.href.match(/^https:\/\/github\.com\/([^\/]+)\/([^\/?#]+)(?:[\/?#]|$)/);
  if (match) {
    const user = match[1];
    const repo = match[2];
    const pagesUrl = `https://${user}.github.io/${repo}`;
    window.open(pagesUrl, "_blank",
      "width=1000,height=800,resizable,scrollbars"
    );
  } else {
    alert("This doesn't appear to be a GitHub repository URL.");
  }
})();
