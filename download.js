chrome.contextMenus.create(
{
  "title": "Download This Bad-Boy",
  "contexts":["image"],
  "onclick": genericOnClick
});

function genericOnClick(info, tab) {

  chrome.downloads.download(
  {
    url : info.srcUrl,
    filename: "pics/" + info.srcUrl.substring(info.srcUrl.lastIndexOf("/"))
  });
}