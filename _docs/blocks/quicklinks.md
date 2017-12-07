---
title: Quicklinks
category: Blocks
order: 1
---

## Example

These are the standard "quicklinks" used accross content sections. They will be displayed to the right of your content. The mobile view will hide the quicklinks and appear again by clicking on a yellow button titled "More". The background color of the box title, for example the color for the box of "Medi-Cal" below, will vary according to your section. 

<div class="row margin-top-65--desktop">
	<div class="col-md-4 sidebar">

		<div class="quicklinks">	
			<ul class="quicklinks__list">
				<li class="quicklinks__list-item quicklinks__title hidden-sm hidden-md hidden-lg"><span class="quicklinks__link-text">  Close </span> <span class="glyphicon glyphicon glyphicon-remove quicklinks__glyph"></span></li>

				<li class="quicklinks__list-item quicklinks__title hidden-xs "><span class="quicklinks__text-title">     Medi-Cal   </span> <span class="glyphicon glyphicon-chevron-right quicklinks__glyph"></span></li>

				<li class="quicklinks__list-item "><a class="quicklinks__link" target="_blank" href="https://apply.coveredca.com/apspahbx/login.portal#"><span class="quicklinks__link-text">Sign in to Your Account</span><i class="icon-link pull-right"></i></a></li>			 

				<li class="quicklinks__list-item "><a class="quicklinks__link" href="/apply/"><span class="quicklinks__link-text">Medi-Cal Application</span><i class="icon-link pull-right"></i></a></li>			 

				<li class="quicklinks__list-item "><a class="quicklinks__link" href="/medi-cal/renewing-medi-cal-coverage"><span class="quicklinks__link-text">Renewing MediCal Coverage</span><i class="icon-link pull-right"></i></a></li>			 

				<li class="quicklinks__list-item "><a class="quicklinks__link" href="/medi-cal/families"><span class="quicklinks__link-text">Medi-Cal for Families (and Former Foster Youth)</span><i class="icon-link pull-right"></i></a></li>			 

				<li class="quicklinks__list-item "><a class="quicklinks__link" href="/medi-cal/benefits"><span class="quicklinks__link-text">Medi-Cal Benefits</span><i class="icon-link pull-right"></i></a></li>			 

				<li class="quicklinks__list-item "><a class="quicklinks__link" href="/medi-cal/using-your-coverage"><span class="quicklinks__link-text">Using Your Coverage</span><i class="icon-link pull-right"></i></a></li>			 

				<li class="quicklinks__list-item "><a class="quicklinks__link" target="_blank" href="http://www.dhcs.ca.gov/Pages/default.aspx"><span class="quicklinks__link-text">Department of Health Care Services (DHCS) website</span><i class="icon-link pull-right"></i></a></li>	 
			</ul>
		</div>
	</div>
	<div class="col-md-8">
		<div class="overlay--quicklinks"></div>
		<div class="quicklinks__toggle">
			<div class="btn--quicklinks-toggle"><i class="fa fa-plus-circle fa-2x table-cell-middle" aria-hidden="true"></i><span class="table-cell-middle"> More </span> </div>
		</div> 
	</div>
</div>

<div class="expandable expandable--fa">
	<div class="expandable__trigger">
		<span class="fa fa-plus-circle expandable__glyph"> </span>
		<h3 class="expandable__heading"><a class="expandable__link" href="#" aria-expanded="false">Code Snippet</a></h3>
	</div>
	<div class="expandable__target">
		<pre style="width:100%;overflow: auto;">
			<code class="hljs xml">

&lt;!-- This is the "more" button that the quicklinks collapse into on mobile view only. --&gt;
&lt;div class="col-sm-8"&gt;  
  &lt;div class="overlay--quicklinks"&gt;&lt;/div&gt;
    &lt;div class="quicklinks__toggle"&gt;
      &lt;div class="btn--quicklinks-toggle"&gt;&lt;i class="fa fa-plus-circle fa-2x table-cell-middle" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="table-cell-middle"&gt; More &lt;/span&gt; &lt;/div&gt;
  &lt;/div&gt; 
&lt;/div&gt;

&lt;!-- Make sure to include the "sidebar" class in the col for the quicklinks. This class is used as a javascript hook for the mobile quicklinks view. --&gt;
&lt;div class="col-md-4 sidebar"&gt;
  &lt;div class="quicklinks"&gt;  

    &lt;ul class="quicklinks__list"&gt;
      &lt;li class="quicklinks__list-item quicklinks__title hidden-sm hidden-md hidden-lg"&gt;&lt;span class="quicklinks__link-text"&gt;  Close &lt;/span&gt; &lt;span class="glyphicon glyphicon glyphicon-remove quicklinks__glyph"&gt;&lt;/span&gt;&lt;/li&gt;

      &lt;li class="quicklinks__list-item quicklinks__title hidden-xs "&gt;&lt;span class="quicklinks__text-title"&gt;     Medi-Cal   &lt;/span&gt; &lt;span class="glyphicon glyphicon-chevron-right quicklinks__glyph"&gt;&lt;/span&gt;&lt;/li&gt;

      &lt;li class="quicklinks__list-item "&gt;&lt;a class="quicklinks__link" target="_blank" href="https://apply.coveredca.com/apspahbx/login.portal#"&gt;&lt;span class="quicklinks__link-text"&gt;Sign in to Your Account&lt;/span&gt;&lt;i class="icon-link pull-right"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;       

      &lt;li class="quicklinks__list-item "&gt;&lt;a class="quicklinks__link" href="/apply/"&gt;&lt;span class="quicklinks__link-text"&gt;Medi-Cal Application&lt;/span&gt;&lt;i class="icon-link pull-right"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;       

      &lt;li class="quicklinks__list-item "&gt;&lt;a class="quicklinks__link" href="/medi-cal/renewing-medi-cal-coverage"&gt;&lt;span class="quicklinks__link-text"&gt;Renewing MediCal Coverage/documents-to-confirm-eligibility&lt;/span&gt;&lt;i class="icon-link pull-right"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;       

      &lt;li class="quicklinks__list-item "&gt;&lt;a class="quicklinks__link" href="/medi-cal/families"&gt;&lt;span class="quicklinks__link-text"&gt;Medi-Cal for Families (and Former Foster Youth)&lt;/span&gt;&lt;i class="icon-link pull-right"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;       

      &lt;li class="quicklinks__list-item "&gt;&lt;a class="quicklinks__link" href="/medi-cal/benefits"&gt;&lt;span class="quicklinks__link-text"&gt;Medi-Cal Benefits&lt;/span&gt;&lt;i class="icon-link pull-right"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;       

      &lt;li class="quicklinks__list-item "&gt;&lt;a class="quicklinks__link" href="/medi-cal/using-your-coverage"&gt;&lt;span class="quicklinks__link-text"&gt;Using Your Coverage&lt;/span&gt;&lt;i class="icon-link pull-right"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;       

      &lt;li class="quicklinks__list-item "&gt;&lt;a class="quicklinks__link" target="_blank" href="http://www.dhcs.ca.gov/Pages/default.aspx"&gt;&lt;span class="quicklinks__link-text"&gt;Department of Health Care Services (DHCS) website&lt;/span&gt;&lt;i class="icon-link pull-right"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;   
    &lt;/ul&gt;

  &lt;/div&gt;
&lt;/div&gt;
			</code>
		</pre>
	</div>
</div>

