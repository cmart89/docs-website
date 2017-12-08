---
title: Sign Up 
category: Blocks
order: 1
---

## Example

The Sign Up Block is used in the footer. This form is linked to <a href="https://www.coveredca.com/js/eloqua.js" target="_blank">Eloqua.js</a>. 

<div class="row margin-top-65--desktop">
	<div class="col-md-4">
		<div class="sign-up">
			<h2 class="sign-up__heading" id="subscribe-notifications">Get Notifications</h2>
			<p class="sign-up__copy">Sign up for email updates to get deadline<br class="hidden-xs hidden-sm"> reminders and other important information.</p>
			<form class="sign-up__form subscription" id="footer-subscribe" name="Form-1475084818691">
				<input type="hidden" name="elqFormName" value="Form-1475084818691">
				<input type="hidden" name="elqSiteId" value="522558593">
				<input type="hidden" name="elqCustomerGUID" value="">
				<input type="hidden" name="elqCookieWrite" value="0">
				<input id="form-footer" type="hidden" name="form" value="Footer">
				<input type="hidden" name="language" value="English">
				<div class="form-inline">
					<label class="sr-only" for="fName">Enter First Name</label>
					<input id="fName" name="fName" class="form-control" placeholder="Enter First Name">
					<label class="sr-only" for="eAddress">Enter Email Address (Required)</label>
					<input id="eAddress" type="email" name="emailAddress" class="form-control" placeholder="Enter Email Address (Required)" required="">
				</div>
				<div>
					<button id="signUp" type="submit" class="btn btn-default btn--sign-up" aria-describedby="subscribe-notifications">SUBSCRIBE</button>
					<a id="privacy-link" class="form-inline__link sign-up__privacy-link" href="/privacy">PRIVACY POLICY</a>
				</div>
			</form>
		</div><br /><br />
	</div>

	<div class="row">
		<div class="col-md-12">
			<div class="expandable expandable--fa">
				<div class="expandable__trigger">
					<span class="fa fa-plus-circle expandable__glyph"> </span>
					<h3 class="expandable__heading"><a class="expandable__link" href="#" aria-expanded="false">Code Snippet</a></h3>
				</div>
				<div class="expandable__target">
					<pre style="width:100%;overflow: auto;">
						<code class="hljs xml">
&lt;div class="col-md-4"&gt;
  &lt;div class="sign-up"&gt;
    &lt;h2 class="sign-up__heading" id="subscribe-notifications"&gt;Get Notifications&lt;/h2&gt;
    &lt;p class="sign-up__copy"&gt;Sign up for email updates to get deadline&lt;br class="hidden-xs hidden-sm"&gt; reminders and other important information.&lt;/p&gt;
    &lt;form class="sign-up__form subscription" id="footer-subscribe" name="Form-1475084818691"&gt;
      &lt;input type="hidden" name="elqFormName" value="Form-1475084818691"&gt;
      &lt;input type="hidden" name="elqSiteId" value="522558593"&gt;
      &lt;input type="hidden" name="elqCustomerGUID" value=""&gt;
      &lt;input type="hidden" name="elqCookieWrite" value="0"&gt;
      &lt;input id="form-footer" type="hidden" name="form" value="Footer"&gt;
      &lt;input type="hidden" name="language" value="English"&gt;
      &lt;div class="form-inline"&gt;
        &lt;label class="sr-only" for="fName"&gt;Enter First Name&lt;/label&gt;
        &lt;input id="fName" name="fName" class="form-control" placeholder="Enter First Name"&gt;
        &lt;label class="sr-only" for="eAddress"&gt;Enter Email Address (Required)&lt;/label&gt;
        &lt;input id="eAddress" type="email" name="emailAddress" class="form-control" placeholder="Enter Email Address (Required)" required=""&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;button id="signUp" type="submit" class="btn btn-default btn--sign-up" aria-describedby="subscribe-notifications"&gt;SUBSCRIBE&lt;/button&gt;
        &lt;a id="privacy-link" class="form-inline__link sign-up__privacy-link" href="/privacy"&gt;PRIVACY POLICY&lt;/a&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
&lt;/div&gt;
						</code>
					</pre>
				</div>
			</div>
		</div>
	</div>
</div>

