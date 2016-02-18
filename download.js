chrome.runtime.onMessage.addListener(function(message)
{
	if (message.src && message.alt)
	{
		downloadImage(message.src);
	}
});

function downloadImage(imgSrc)
{
	chrome.downloads.download(
	{
		url : imgSrc,
		filename: "pics/" + imgSrc.substring(imgSrc.lastIndexOf("/"))
	});
}