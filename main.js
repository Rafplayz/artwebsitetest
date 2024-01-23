document.querySelectorAll(".art").forEach(el => {
  el.addEventListener("mouseup", onClickArt)
})

let isImageBeingDisplayed = false;

const fullscreenArtElement = document.querySelector("#fulldisplay")
if(!fullscreenArtElement) throw new Error("fullscreen art element not found")
fullscreenArtElement.addEventListener("mouseup", onClickFullscreenArt)

// when an art tile is clicked
function onClickArt(event) {
  debuglog("clicked", event);
  debuglog("src:", event.target.src);
  setFullscreenArt(event.target.src);
  toggleFullscreenArtShown(true);

}

// when the full screen art is clicked
function onClickFullscreenArt(event) {
  debuglog("clicked", event)
  if(isImageBeingDisplayed) toggleFullscreenArtShown();
}

/**
 * toggle if the full screen art is shown or not
 * @param {boolean} [state] true = display, false = hide; optional
 */
function toggleFullscreenArtShown(state) {
  if(state !== undefined) {
    // toggle on
    if(state) {
      fullscreenArtElement.style.display = "block"
    }

    // toggle off
    else {
      fullscreenArtElement.style.display = "none"
    }
  }
  // toggle off
  if(isImageBeingDisplayed) {
    debuglog("toggling off full screen art");
    fullscreenArtElement.style.display = "none";
    isImageBeingDisplayed = false;
  }
  // toggle on
  else {
    debuglog("toggling on full screen art")
    fullscreenArtElement.style.display = "block";
    isImageBeingDisplayed = true;
  }
}
function setFullscreenArt(src) {
  debuglog("setting full screen art to src", src)
  let imageElement = document.querySelector("img.innerFullscreen");
  debuglog("imageElement: ", imageElement)
  imageElement.src = src;
}

function debuglog(...args) {
  console.log("[DEBUG]", ...args)
}