chrome.runtime.onMessage.addListener(function(message)
{
	console.log("Received message: " + message.alt + ", src: " + message.src);
	if (message.src && altHeld)
	{
		downloadImage(message.src);
	}
	else if (message.alt)
	{
		setAlt(message.alt);
	}
});

var altHeld = false;

function setAlt(set)
{
	altHeld = set;
}

function downloadImage(imgSrc)
{
	chrome.downloads.download(
	{
		url : imgSrc,
		filename: "pics/" + imgSrc.substring(imgSrc.lastIndexOf("/"))
	});
}