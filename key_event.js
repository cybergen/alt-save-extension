window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

document.onclick = function(event)
{
	var target = event.target || event.srcElement;
	if (target.nodeType == 1 && (target.tagName == "img" || target.tagName == "IMG"))
	{
		chrome.runtime.sendMessage({ src : target.src });
	}
}

function onKeyDown(k)
{
	chrome.runtime.sendMessage({ alt : k.keyCode == 18 });
}

function onKeyUp(k)
{
	chrome.runtime.sendMessage({ alt : false });
}