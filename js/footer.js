/* ClimbStack — Shared footer component.
 * Usage: add <div id="site-footer"></div> before the closing </body>.
 */
(function () {
    'use strict';

    var currentYear = new Date().getFullYear();

    /* ── social links ─────────────────────────────────────── */
    var socials = [
        { id: 'GITHUB',   href: 'https://github.com/ClimbStack',           icon: 'fa-github',   label: 'ClimbStack GitHub Organization' },
    ];

    function socialLinksHTML() {
        var html = '';
        for (var i = 0; i < socials.length; i++) {
            var s = socials[i];
            var rel = s.rel || 'noopener noreferrer';
            html +=
                '<a target="_blank" href="' + s.href + '" class="text-light social-icon-footer" aria-label="' + s.label + '" rel="' + rel + '">' +
                    '<i class="fab ' + s.icon + ' fa-lg"></i>' +
                '</a>\n';
        }
        return html;
    }

    /* ── full footer HTML ──────────────────────────────────── */
    var footerHTML =
        '<footer class="py-5 bg-dark text-white">' +
            '<div class="container">' +
                '<div class="row align-items-center">' +
                    /* Column 1 — Brand & tagline */
                    '<div class="col-md-4 text-center text-md-start mb-4 mb-md-0">' +
                        '<p class="h5 mb-3 fw-bold">ClimbStack</p>' +
                        '<p class="text-white-50 small mb-0" data-i18n="footer_tagline">A local-first productivity engine that maps your goals as mountains and blocks your time.</p>' +
                    '</div>' +
                    /* Column 2 — GitHub CTA */
                    '<div class="col-md-4 text-center mb-4 mb-md-0">' +
                        '<p class="mb-3 small text-uppercase fw-bold ls-1" data-i18n="footer_ttl">Get involved</p>' +
                        '<a href="https://github.com/ClimbStack/climbstack-app" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-sm px-4">' +
                            '<i class="fab fa-github me-2"></i>Source Code' +
                        '</a>' +
                    '</div>' +
                    /* Column 3 — Social icons */
                    '<div class="col-md-4 text-center text-md-end">' +
                        '<div class="social-links d-flex justify-content-center justify-content-md-end align-items-center gap-3 flex-wrap">' +
                            socialLinksHTML() +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<hr class="my-4 border-secondary opacity-25">' +
                /* Copyright bar */
                '<div class="row">' +
                    '<div class="col-12 text-center text-white-50 small">' +
                        '<p class="mb-0">&copy; ' + currentYear + ' ClimbStack. All rights reserved. ' +
                            '<a href="./privacy.html" class="text-white-50 text-decoration-underline" rel="noopener noreferrer">Privacy Policy</a>' +
                        '</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</footer>';

    /* ── inject ─────────────────────────────────────────────── */
    var target = document.getElementById('site-footer');
    if (target) {
        target.outerHTML = footerHTML;
    }
})();
