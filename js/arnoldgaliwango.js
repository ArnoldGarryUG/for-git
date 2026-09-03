  const overlay = document.getElementById('exitOverlay');
  const closeBtn = document.getElementById('exitPopupClose');
  const popupImage = document.getElementById('exitPopupImage');
  let hasShown = false; // only show once per visit

  // --- Image sources ---
  const DESKTOP_IMAGE = 'https://i.ibb.co/vvLgH5mj/maintainence-desktop.jpg';        // shown on wider screens
  const MOBILE_IMAGE  = 'https://i.ibb.co/BVjp4L5X/maintainence-mobile.jpg'; // shown on narrow screens (replace with your mobile image filename)
  const MOBILE_BREAKPOINT = 768; // px - screens at or below this width count as "mobile"

  function isMobileWidth() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  function setPopupImage() {
    popupImage.src = isMobileWidth() ? MOBILE_IMAGE : DESKTOP_IMAGE;
  }

  function showExitPopup() {
    setPopupImage(); // pick the right image at the moment it's shown
    overlay.classList.add('active');
    document.body.classList.add('popup-open');
    hasShown = true;
  }

  function hideExitPopup() {
    overlay.classList.remove('active');
    document.body.classList.remove('popup-open');
  }

  // Close on button click
  closeBtn.addEventListener('click', hideExitPopup);

  // Close on clicking the dark background (outside the image)
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) hideExitPopup();
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hideExitPopup();
  });

  // --- Desktop trigger: mouse leaves the top of the viewport ---
  document.addEventListener('mouseout', function (e) {
    if (!hasShown && !isMobileWidth() && e.clientY <= 0 && !e.relatedTarget) {
      showExitPopup();
    }
  });

  // --- Mobile trigger: no reliable "leaving" signal on touch devices,
  // so show after a short period of inactivity instead ---
  const MOBILE_DELAY_MS = 5000; // 15 seconds - adjust as needed
  if (isMobileWidth()) {
    setTimeout(function () {
      if (!hasShown) showExitPopup();
    }, MOBILE_DELAY_MS);
  }
