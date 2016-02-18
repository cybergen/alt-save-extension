document.onclick = function(event)
{
	var target = event.target || event.srcElement;
	if (target.nodeType == 1 && (target.tagName == "img" || target.tagName == "IMG"))
	{
		chrome.runtime.sendMessage({ src : target.src, alt : event.altKey });
	}
}