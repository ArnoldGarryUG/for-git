<script>
(function () {

    const popup = document.getElementById('exitPopup');
    const closeButton = document.getElementById('exitPopupClose');

    if (!popup || !closeButton) return;

    let popupShown = false;

    /*
     * Don't show the popup again during the same browser session.
     * Remove this if you want it to appear every time.
     */
    const alreadyShown = sessionStorage.getItem('exitPopupShown');

    function showExitPopup() {

        if (popupShown || alreadyShown) return;

        popupShown = true;

        popup.classList.add('active');
        popup.setAttribute('aria-hidden', 'false');

        sessionStorage.setItem('exitPopupShown', 'true');

        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
    }

    function closeExitPopup() {

        popup.classList.remove('active');
        popup.setAttribute('aria-hidden', 'true');

        document.body.style.overflow = '';

    }

    /*
     * DESKTOP EXIT INTENT
     *
     * Trigger when the visitor moves the mouse
     * toward the top of the browser window.
     */
    document.addEventListener('mouseout', function (event) {

        if (
            event.clientY <= 5 &&
            event.relatedTarget === null
        ) {
            showExitPopup();
        }

    });

    /*
     * Close button
     */
    closeButton.addEventListener('click', closeExitPopup);

    /*
     * Close when clicking outside the popup
     */
    popup.addEventListener('click', function (event) {

        if (event.target === popup) {
            closeExitPopup();
        }

    });

    /*
     * Close with ESC key
     */
    document.addEventListener('keydown', function (event) {

        if (event.key === 'Escape') {
            closeExitPopup();
        }

    });

})();
</script>
