await new Promise<void>(function(resolve, reject) {
	(function recurse() {
		// FROM: https://github.com/KartikTalwar/gmail.js/blob/master/src/gmail.js#L2630
		if (document.querySelector("div[role=main]") !== null) {
			resolve();
		} else {
			setTimeout(recurse, 200);
		}
	})();
});

const extension = document.createElement("div");
extension.classList.add("PWExtension");

extension.innerHTML = `<div class="PWExtensionFrame">
		<div class="PWExtensionFrame_titleBar">
			<img src="chrome-extension://hpfmedbkgaakgagknibnonpkimkibkla/assets/logo_colour_graphite_text.svg" class="PWExtensionTitle_logo">
			<div class="PWExtensionFrame_controlIcons">
				<div id="openWebAppIconContainer" class="PWExtensionFrame_openNewIcon" aria-describedby="ember4" tabindex="0" data-ember-action="" data-ember-action-3="3">
					<i class="md md-open-in-new"></i>
				</div>

				<div class="PWExtensionFrame_closeIcon" data-ember-action="" data-ember-action-5="5">
					<i class="md md-chevron-right"></i>
				</div>
			</div>
		</div>

		<div class="PWExtensionFrame_header ">
			<div id="ember6" class="PWExtensionHeader ember-view">  <img src="chrome-extension://hpfmedbkgaakgagknibnonpkimkibkla/assets/logo_all_graphite.svg" class="PWExtensionHeader_logo">
</div>
		</div>

		<div class="PWExtensionFrame_content ">
			<div id="ember7" class="SignIn ember-view"><div class="SignIn_container has-footer">
<!---->
		<div class="SignIn_title">
			Hello there!
		</div>

		<div class="SignIn_content">
			Say hello to the CRM that works where you work. Add contacts and nurture deals directly from Gmail and Calendar.
		</div>

		<div class="SignIn_buttonBox">
			<button aria-label="Login with Google" role="button" id="ember8" class="SignIn_callToActionButton Btn Btn-brandPrimary ember-view">    Login with Google
</button>
			<a href="#" class="SignIn_secondaryActionLink" data-ember-action="" data-ember-action-9="9">
				Create an Account
			</a>
		</div>

		<div class="SignIn_imageBox">
			<video loop="" autoplay="" src="chrome-extension://hpfmedbkgaakgagknibnonpkimkibkla/assets/CRX-login-animation.mp4"></video>
		</div>

<!---->
<!----></div>

	<div class="SignIn_footer">
		<div class="SignIn_hideOption">
			Click
			<a data-ember-action="" data-ember-action-10="10">here</a> to hide the extension in this account
		</div>
		<div class="SignIn_footerTerms">
			Signing up indicates that you've read and agree to our <a href="https://www.copper.com/tos" target="_blank">terms</a> and have read our <a href="https://www.copper.com/privacy" target="_blank">privacy policy</a>. You can update your preferences <a href="https://get.prosperworks.com/SubscriptionManagement.html" target="_blank">here</a>.
		</div>
	</div>
</div>

		</div>

		<div>
</div>


		<div class="PWExtensionFrame_toggleBubble" data-ember-action="" data-ember-action-11="11">
			<div class="PWExtensionFrame_toggleIcon">
				<i class="copper-icon-logo-graphite"></i>
			</div>
		</div>
	</div>`;

document.body.appendChild(extension);

extension.classList.add("is-expanded");

(document.querySelector("body > div > div.nH > div.nH") as HTMLElement).style.marginRight = "360px";

export { };
