/*
Create a new bookmark in Chrome:
Right-click the bookmarks bar and choose "Add page..."
Name it something like "Go to GitHub From GitHub Pages New Tab"
In the URL field, paste the following code:

*/

javascript:(function(){
  const host = location.hostname;
  const match = host.match(/^([^.]+)\.github\.io$/);
  if (match) {
    window.open("https://github.com/" + match[1], "_blank");
  } else {
    alert("Not a GitHub Pages domain.");
  }
})();
