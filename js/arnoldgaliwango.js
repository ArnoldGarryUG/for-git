<script>
(function () {

    const popup = document.getElementById('exitPopup');
    const closeButton = document.getElementById('exitPopupClose');

    if (!popup || !closeButton) return;

    let popupShown = false;
    let hasScrolledDown = false;
    let lastScrollPosition = window.scrollY;

    // Prevent showing again during the same browser session
    const alreadyShown = sessionStorage.getItem('exitPopupShown');

    /*
     * ==========================================
     * SHOW POPUP
     * ==========================================
     */
    function showExitPopup() {

        if (popupShown || alreadyShown) return;

        popupShown = true;

        popup.classList.add('active');
        popup.setAttribute('aria-hidden', 'false');

        // Remember that popup has been shown
        sessionStorage.setItem('exitPopupShown', 'true');

        // Prevent page from scrolling behind popup
        document.body.style.overflow = 'hidden';
    }


    /*
     * ==========================================
     * CLOSE POPUP
     * ==========================================
     */
    function closeExitPopup() {

        popup.classList.remove('active');
        popup.setAttribute('aria-hidden', 'true');

        // Restore page scrolling
        document.body.style.overflow = '';

    }


    /*
     * ==========================================
     * DESKTOP EXIT INTENT
     * ==========================================
     *
     * Trigger when the mouse reaches the
     * top 5 pixels of the browser window.
     *
     * This is primarily for desktop users.
     */
    document.addEventListener('mouseout', function (event) {

        // Ignore users moving between elements
        if (event.relatedTarget !== null) return;

        // Mouse is leaving toward the top
        if (event.clientY <= 5) {

            showExitPopup();

        }

    });


    /*
     * ==========================================
     * MOBILE / TABLET EXIT INTENT
     * ==========================================
     *
     * Mobile devices don't have a mouse cursor,
     * so we approximate exit intent by detecting:
     *
     * 1. Visitor scrolls at least 400px down
     * 2. Visitor then scrolls back toward the top
     * 3. Popup appears when they reach ~150px
     *
     */
    window.addEventListener('scroll', function () {

        const currentScrollPosition = window.scrollY;

        // Visitor has gone sufficiently far down
        if (currentScrollPosition > 400) {
            hasScrolledDown = true;
        }

        // Visitor is scrolling back upward
        const scrollingUp =
            currentScrollPosition < lastScrollPosition;

        // Trigger near the top after they have
        // previously scrolled down
        if (
            hasScrolledDown &&
            scrollingUp &&
            currentScrollPosition < 150
        ) {
            showExitPopup();
        }

        lastScrollPosition = currentScrollPosition;

    }, {
        passive: true
    });


    /*
     * ==========================================
     * CLOSE BUTTON
     * ==========================================
     */
    closeButton.addEventListener('click', function () {

        closeExitPopup();

    });


    /*
     * ==========================================
     * CLICK OUTSIDE POPUP TO CLOSE
     * ==========================================
     */
    popup.addEventListener('click', function (event) {

        if (event.target === popup) {

            closeExitPopup();

        }

    });


    /*
     * ==========================================
     * ESC KEY TO CLOSE
     * ==========================================
     */
    document.addEventListener('keydown', function (event) {

        if (event.key === 'Escape') {

            closeExitPopup();

        }

    });


})();
</script>
