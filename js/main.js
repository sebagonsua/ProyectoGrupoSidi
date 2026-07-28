(function () {
    "use strict";

    function initNav() {
        var toggle = document.querySelector(".nav-toggle");
        var menu = document.querySelector(".nav__menu");
        if (!toggle || !menu) return;

        toggle.addEventListener("click", function () {
            var isVisible = menu.classList.toggle("nav__menu_visible");
            toggle.setAttribute("aria-expanded", String(isVisible));
        });

        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("nav__menu_visible");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    function initCarousel() {
        var list = document.getElementById("slick-list");
        var track = document.getElementById("track");
        var prevBtn = document.getElementById("button-prev");
        var nextBtn = document.getElementById("button-next");
        if (!list || !track || !prevBtn || !nextBtn) return;

        var slides = track.querySelectorAll(".slick");
        if (!slides.length) return;

        function currentLeft() {
            return track.style.left ? parseFloat(track.style.left) : 0;
        }

        function updateButtons() {
            var left = currentLeft();
            var max = track.offsetWidth - list.offsetWidth;
            prevBtn.disabled = left >= 0;
            nextBtn.disabled = Math.abs(left) >= max - 1;
        }

        prevBtn.addEventListener("click", function () {
            var left = currentLeft();
            var slideWidth = slides[0].offsetWidth;
            if (left < 0) {
                track.style.left = Math.min(0, left + slideWidth) + "px";
            }
            updateButtons();
        });

        nextBtn.addEventListener("click", function () {
            var left = currentLeft();
            var slideWidth = slides[0].offsetWidth;
            var max = track.offsetWidth - list.offsetWidth;
            if (Math.abs(left) < max) {
                track.style.left = (-1 * Math.min(max, Math.abs(left) + slideWidth)) + "px";
            }
            updateButtons();
        });

        window.addEventListener("resize", updateButtons);
        updateButtons();
    }

    function initFooterYear() {
        var yearEl = document.getElementById("year");
        if (yearEl) {
            yearEl.textContent = String(new Date().getFullYear());
        }
    }

    function showFeedback(form, ok, message) {
        var feedback = form.querySelector("#form-feedback");
        if (!feedback) return;
        feedback.textContent = message;
        feedback.setAttribute("data-state", ok ? "ok" : "error");
    }

    function initContactForm() {
        var form = document.getElementById("form-contacto");
        if (!form) return;

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            var nameInput = form.querySelector("#names");
            var emailInput = form.querySelector("#email");
            var messageInput = form.querySelector("#message");

            if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
                showFeedback(form, false, window.sidiI18n.t("form_msg_required"));
                return;
            }

            var submitBtn = form.querySelector("button[type='submit']");
            if (submitBtn) submitBtn.disabled = true;
            showFeedback(form, true, window.sidiI18n.t("form_msg_sending"));

            fetch(form.action, {
                method: "POST",
                headers: { "X-Requested-With": "fetch" },
                body: new FormData(form)
            })
                .then(function (response) {
                    return response.json().then(function (data) {
                        return { okHttp: response.ok, data: data };
                    });
                })
                .then(function (result) {
                    if (result.okHttp && result.data.ok) {
                        showFeedback(form, true, window.sidiI18n.t("form_msg_ok"));
                        form.reset();
                    } else {
                        showFeedback(form, false, window.sidiI18n.t("form_msg_error"));
                    }
                })
                .catch(function () {
                    showFeedback(form, false, window.sidiI18n.t("form_msg_error"));
                })
                .finally(function () {
                    if (submitBtn) submitBtn.disabled = false;
                });
        });
    }

    function checkUrlFeedback() {
        var params = new URLSearchParams(window.location.search);
        var estado = params.get("contacto");
        if (!estado) return;

        var form = document.getElementById("form-contacto");
        if (form) {
            if (estado === "ok") {
                showFeedback(form, true, window.sidiI18n.t("form_msg_ok"));
                form.reset();
            } else if (estado === "error") {
                showFeedback(form, false, window.sidiI18n.t("form_msg_error"));
            }
        }

        params.delete("contacto");
        var query = params.toString();
        var newUrl = window.location.pathname + (query ? "?" + query : "") + "#contacto";
        window.history.replaceState({}, "", newUrl);
    }

    function initHeaderScroll() {
        var header = document.querySelector(".header");
        if (!header) return;

        function update() {
            header.classList.toggle("header--scrolled", window.scrollY > 40);
        }

        window.addEventListener("scroll", update, { passive: true });
        update();
    }

    function initReveal() {
        var items = document.querySelectorAll(".reveal");
        if (!items.length) return;

        if (!("IntersectionObserver" in window)) {
            items.forEach(function (el) { el.classList.add("reveal--visible"); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal--visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        items.forEach(function (el) { observer.observe(el); });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initNav();
        initCarousel();
        initFooterYear();
        initContactForm();
        checkUrlFeedback();
        initHeaderScroll();
        initReveal();
    });
})();
