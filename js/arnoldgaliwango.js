<script>

const overlay = document.getElementById('exitOverlay');
  const closeBtn = document.getElementById('exitPopupClose');
  let hasShown = false; // only show once per visit

  function showExitPopup() {
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

  // Exit-intent detection: mouse leaves the top of the viewport (toward tabs/address bar)
  document.addEventListener('mouseout', function (e) {
    if (!hasShown && e.clientY <= 0 && !e.relatedTarget) {
      showExitPopup();
    }
  });

  // Optional: also trigger on mobile when user is inactive for a while,
  // since exit-intent via mouse doesn't work on touch devices.
  // Uncomment to enable a timed fallback (e.g. 30 seconds):
  
  setTimeout(function () {
    if (!hasShown) showExitPopup();
  }, 30000);
  

</script>
