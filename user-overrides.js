user_pref("browser.formfill.enable", true);
user_pref("browser.cache.disk.enable", true);
user_pref("dom.security.https_only_mode.upgrade_local", true);
user_pref("browser.download.useDownloadDir", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", false);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);
user_pref("privacy.clearSiteData.cache", false); // [DEFAULT: true]
user_pref("privacy.clearSiteData.formdata", false);
user_pref("privacy.clearHistory.cache", false); // [DEFAULT: true]

/* 0710: enable DNS-over-HTTPS (DoH) [FF60+]
 * 0=default, 2=increased (TRR (Trusted Recursive Resolver) first), 3=max (TRR only), 5=off (no rollout)
 * see "doh-rollout.home-region": USA 2019, Canada 2021, Russia/Ukraine 2022 [3]
 * [SETTING] Privacy & Security>DNS over HTTPS
 * [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
 * [2] https://wiki.mozilla.org/Security/DOH-resolver-policy
 * [3] https://support.mozilla.org/kb/firefox-dns-over-https
 * [4] https://www.eff.org/deeplinks/2020/12/dns-doh-and-odoh-oh-my-year-review-2020 ***/
user_pref("network.trr.mode", 3);

/* 0712: set DoH provider
 * The custom uri is the value shown when you "Choose provider>Custom>"
 * [NOTE] If you USE custom then "network.trr.uri" should be set the same
 * [SETTING] Privacy & Security>DNS over HTTPS>Increased/Max>Choose provider ***/
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query");

/** Disable default topsites */
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.topsites.useRemoteSetting", false);

// Disable new data submission [FF41+]
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 999);
user_pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
user_pref("datareporting.policy.dataSubmissionPolicyNotifiedTime","32503679999000");
user_pref("startup.homepage_override_nimbus_disable_wnp", true);
user_pref("termsofuse.acceptedDate", "32503679999000");
user_pref("termsofuse.acceptedVersion", 999);
user_pref("termsofuse.bypassNotification", true);

user_pref("toolkit.shopping.ohttpConfigURL", "");
user_pref("toolkit.shopping.ohttpRelayURL", "");

// Disable Captive Portal detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]

// -------------------------------------
// Disable Network Connectivity checks [FF65+]
user_pref("network.connectivity-service.enabled", false);

// -------------------------------------
// Disable contentblocking reports
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.manage_devices.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.monitor.preferences_url", "");
user_pref("browser.contentblocking.report.vpn.enabled", false);

// -------------------------------------
// Block unwanted connections
user_pref("app.feedback.baseURL", "");
user_pref("app.feedbackURL", "");
user_pref("app.support.baseURL", "");
user_pref("app.supportURL", "");
user_pref("app.update.channel", "");
user_pref("app.channelURL", "");
user_pref("app.creditsURL", "");
user_pref("app.faqURL", "");
user_pref("app.privacyURL", "");
user_pref("app.releaseNotesURL", "");
user_pref("app.update.autodownload", "never");
user_pref("app.update.url.android", "");
user_pref("app.update.service.enabled", false);
user_pref("app.update.staging.enabled", false);
// -------------------------------------
// Manage other urls and handlers
user_pref("media.decoder-doctor.new-issue-endpoint", "");
user_pref("identity.sync.tokenserver.uri", "");
user_pref("browser.translation.engine", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("browser.uitour.themeOrigin", "");
user_pref("toolkit.datacollection.infoURL", "");
user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");

// -------------------------------------
// Disable SSDP (Simple Service Discovery Protocol)
user_pref("browser.casting.enabled", false);
// -------------------------------------
// Disable tickle time under wifi network
user_pref("network.tickle-wifi.enabled", false);
// -------------------------------------
// Disable connections to Mozilla servers
user_pref("services.settings.server", "");

/* 4501: enable RFP
 * [NOTE] pbmode applies if true and the original pref is false
 * [SETUP-WEB] RFP can cause some website breakage: mainly canvas, use a canvas site exception via the urlbar.
 * RFP also has a few side effects: mainly that timezone is GMT, and websites will prefer light theme ***/
   // user_pref("privacy.resistFingerprinting", true); // [FF41+]
   // user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]
/* 4502: set RFP new window size max rounded values [FF55+]
 * [SETUP-CHROME] sizes round down in hundreds: width to 200s and height to 100s, to fit your screen
 * [1] https://bugzilla.mozilla.org/1330882 ***/
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);

user_pref("network.trr.confirmationNS", "");

// -------------------------------------
// Disable urlbar clipboard suggestions [FF118+]
user_pref("browser.urlbar.clipboard.featureGate", false);

// -------------------------------------
// Disable recent searches [FF120+]
user_pref("browser.urlbar.recentsearches.featureGate", false);

// -------------------------------------
// Disable search and form history
user_pref("browser.formfill.enable", false);

// -------------------------------------
// Disable tab-to-search [FF85+]
user_pref("browser.urlbar.suggest.engines", false);

// -------------------------------------
// Disable merino
user_pref("browser.urlbar.merino.enabled", false);

// -------------------------------------
// Never trim URLs
user_pref("browser.urlbar.trimHttps", false);
user_pref("browser.urlbar.trimURLs", false);

// -------------------------------------
// Disable graphite
user_pref("gfx.font_rendering.graphite.enabled", false);

// -------------------------------------
// Disable Ion and baseline JIT to harden against JS exploits [RESTART]
user_pref("javascript.options.ion", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.wasm_baselinejit", false);
user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]

// -------------------------------------
// Do not disable spectre mitigations for isolated content
user_pref("javascript.options.spectre.disable_for_isolated_content", false);

// -------------------------------------
// Disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

// -------------------------------------
// Disable widevine CDM (Content Decryption Module)
user_pref("media.gmp-widevinecdm.enabled", false);

// -------------------------------------
// Disable all DRM (Digital Rights Management) content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
user_pref("extensions.screenshots.disabled", true); // [FF55+]
user_pref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
user_pref("reader.parse-on-load.enabled", false); // Reader View
user_pref("browser.tabs.firefox-view", false); // Firefox-view
user_pref("browser.firefox-view.virtual-list.enabled", false);

user_pref("browser.vpn_promo.enabled", false);

// credit: https://github.com/black7375/Firefox-UI-Fix
// only sharpen scrolling
user_pref("apz.overscroll.enabled", true);
user_pref("general.smoothScroll", true);
user_pref("mousewheel.min_line_scroll_amount", 5);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4