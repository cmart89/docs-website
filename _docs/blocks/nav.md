---
title: Nav
category: Blocks
order: 1
---

## Examples
<div class="row margin-top-65--desktop" style="margin-bottom: 30px;">
	<div class="col-sm-12" style="padding: 0;">
		<div class="nav">
		    <div class="nav__container container">        
		      <div class="nav__mobile">
		        <!-- mobile view only - the logo -->
		        <div class="nav__cca-logo">
		         	Mobile Logo goes here
		        </div>

		        <!-- mobile view only - the toggle button -->         
		        <div class="nav__menu-toggle">
		          <button type="button" class="menu-toggle navbar-toggle collapsed">
		            <span class="sr-only">Toggle navigation</span>
		            <span class="menu-toggle__span menu-toggle__span--first icon-bar"></span>
		            <span class="menu-toggle__span menu-toggle__span--second icon-bar"></span>
		            <span class="menu-toggle__span menu-toggle__span--last icon-bar"></span>
		          </button>
		          <span class="menu-toggle__label">Menu</span> 
		        </div>

		        <!-- mobile view only - the sign in and language links -->
		        <div class="nav__mobile-utility"> 
		          <div class="nav__divider">        
		            <a href="#" class="nav__mobile-utility-link"><i class="icon--pencil"></i><span class="nav__mobile-utility-link-text">Utility 1</span></a>
		          </div><!--
		          --><div class="nav__divider nav__divider--last">            
		            <a href="#" class="nav__mobile-utility-link"><i class="icon--earth"></i><span class="nav__mobile-utility-link-text">Utitlity 2</span></a>
		          </div>
		        </div> 
		      </div> <!-- end nav__mobile -->         

		      <!-- desktop and mobile view - the actual navbar - css should vary in desktop and mobile -->
		      <!-- Secondary Navigation Section -->
		      <div class="nav__navbar" role="navigation" aria-label="secondary">
		        <!-- mobile dropdown search -->
		        <div class="nav__search-bar">
		          <form role="search" class="search-bar form-cse">
		            <label for="search-input" class="search-bar__label hidden">
		              Site Search
		            </label>
		            
		            <input type="search" id="sample-search-input" tite="Enter text to search" class="search-bar__input search-bar__input--primary gcse-searchbox search-bar__input" placeholder="Search" required><!--
		            
		            --><button class="btn search-bar__btn search-bar__btn--primary" aria-label="Search"><img src="//www.coveredca.com/images/icons/magnify-primary.svg" alt=""></button>
		          </form> 
		        </div> 
		        <div class="overlay"></div> 
		        <div class="navbar">            
		          <a href="" class="navbar__menu-title navbar__menu-title--no-top-border"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>Menu Title</a>
		          <ul class="navbar__menu navbar__menu--primary navbar__menu--align-tablet">                    
		            <li class="navbar__menu-item">
		              <a class="navbar__menu-link" href="#" aria-expanded="false"><i class="fa fa-plus-circle" aria-hidden="true"></i>
		              	Menu Item
		                <span class="sr-only">Lets visually impaired users that this page element is collapsible</span>
		                <i class="fa fa-chevron-down fa-chevron-down--dropdown" aria-hidden="true"></i>
		              </a>
		              <div class="navbar__dropdown navbar__dropdown--full-width" aria-hidden="true">
		                <div class="mega-dropdown">
		                  <div class="mega-dropdown__back-btn">
		                    <span class="nav-title--first-level">First Level</span>
		                    <span class="mega-dropdown__glyph"><i class="fa fa-times-circle" aria-hidden="true"></i>Back</span>
		                  </div>
		                  <div class="mega-dropdown__pair">
		                    <p class="mega-dropdown__menu-title">
		                    	<i class="fa fa-plus-circle" aria-hidden="true"></i><span class="mega-dropdown__menu-title-content">Menu Description</span></p>
		                    <ul class="mega-dropdown__menu">  
		                      <li class="mega-dropdown__menu-item">
		                        <a class="mega-dropdown__menu-link" href=""><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">More menu item</span></a>
		                      </li>
		                      <li class="mega-dropdown__menu-item">
		                        <a class="mega-dropdown__menu-link" href=""><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">More menu item</span></a>
		                      </li>
		                      <li class="mega-dropdown__menu-item">
		                        <a class="mega-dropdown__menu-link" href=""><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">More menu item</span></a>
		                      </li>
		                      <li class="mega-dropdown__menu-item">
		                        <a class="mega-dropdown__menu-link" href=""><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">More menu item</span></a>
		                      </li>
		                    </ul>
		                  </div>
		                  <div class="mega-dropdown__pair">
		                    <p class="mega-dropdown__menu-title">
		                    	<i class="fa fa-plus-circle" aria-hidden="true"></i><span class="mega-dropdown__menu-title-content">Another Description</span></p>
		                    <ul class="mega-dropdown__menu"> 

		                      <li class="mega-dropdown__menu-item"><a class="mega-dropdown__menu-link" href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">Another menu link</span></a></li>
		                      <li class="mega-dropdown__menu-item"><a class="mega-dropdown__menu-link" href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">Another menu link</span></a></li>
		                      <li class="mega-dropdown__menu-item"><a class="mega-dropdown__menu-link" href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">Another menu link</span></a></li>

		                    </ul>
		                    <p class="mega-dropdown__menu-title"><i class="fa fa-plus-circle" aria-hidden="true"></i><span class="mega-dropdown__menu-title-content">When Can I Enroll?</span></p>
		                    <ul class="mega-dropdown__menu">

		                      <li class="mega-dropdown__menu-item"><a href="#" class="mega-dropdown__menu-link"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">Open Enrollment</span></a></li>

		                      <li class="mega-dropdown__menu-item"><a href="#" class="mega-dropdown__menu-link"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">Special Enrollment</span></a></li>

		                      <li class="mega-dropdown__menu-item"><a href="#" class="mega-dropdown__menu-link"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">Medi-Cal Enrollment</span></a></li>

		                    </ul>
		                  </div>
		                  <div class="mega-dropdown__pair">
		                    <p class="mega-dropdown__menu-title"><i class="fa fa-plus-circle" aria-hidden="true"></i><span class="mega-dropdown__menu-title-content">How Do I Apply?</span></p>
		                    <ul class="mega-dropdown__menu">
		                      
		                      <li class="mega-dropdown__menu-item"><a href="#" class="mega-dropdown__menu-link"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">Shop and Compare</span></a></li>
		                      <li class="mega-dropdown__menu-item"><a href="#" class="mega-dropdown__menu-link"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">Shop and Compare</span></a></li>
		                      <li class="mega-dropdown__menu-item"><a href="#" class="mega-dropdown__menu-link"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><span class="display-inline-block width-80">Shop and Compare</span></a></li>

		                    </ul> 
		                    <a class="mega-dropdown__browse-section-btn mega-dropdown__browse-section-btn--top-space" href="#"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>Browse All Topics</a>
		                  </div>
		                </div>
		              </div>  
		            </li>	
		           </ul>	       
		          </div>
		        </div>
		      </div>
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
&lt;div class="nav"&gt;
	&lt;div class="nav__container container"&gt;        
	  &lt;div class="nav__mobile"&gt;
	    &lt;!-- mobile view only - the logo --&gt;
	    &lt;div class="nav__cca-logo"&gt;
	       Mobile Logo goes here
	    &lt;/div&gt;

	    &lt;!-- mobile view only - the toggle button --&gt;         
	    &lt;div class="nav__menu-toggle"&gt;
	      &lt;button type="button" class="menu-toggle navbar-toggle collapsed"&gt;
	        &lt;span class="sr-only"&gt;Toggle navigation&lt;/span&gt;
	        &lt;span class="menu-toggle__span menu-toggle__span--first icon-bar"&gt;&lt;/span&gt;
	        &lt;span class="menu-toggle__span menu-toggle__span--second icon-bar"&gt;&lt;/span&gt;
	        &lt;span class="menu-toggle__span menu-toggle__span--last icon-bar"&gt;&lt;/span&gt;
	      &lt;/button&gt;
	      &lt;span class="menu-toggle__label"&gt;Menu&lt;/span&gt; 
	    &lt;/div&gt;

	    &lt;!-- mobile view only - the sign in and language links --&gt;
	    &lt;div class="nav__mobile-utility"&gt; 
	      &lt;div class="nav__divider"&gt;        
	        &lt;a href="#" class="nav__mobile-utility-link"&gt;&lt;i class="icon--pencil"&gt;&lt;/i&gt;&lt;span class="nav__mobile-utility-link-text"&gt;Utility 1&lt;/span&gt;&lt;/a&gt;
	      &lt;/div&gt;&lt;!--
	      --&gt;&lt;div class="nav__divider nav__divider--last"&gt;            
	        &lt;a href="#" class="nav__mobile-utility-link"&gt;&lt;i class="icon--earth"&gt;&lt;/i&gt;&lt;span class="nav__mobile-utility-link-text"&gt;Utitlity 2&lt;/span&gt;&lt;/a&gt;
	      &lt;/div&gt;
	    &lt;/div&gt; 
	  &lt;/div&gt; &lt;!-- end nav__mobile --&gt;         

	  &lt;!-- desktop and mobile view - the actual navbar - css should vary in desktop and mobile --&gt;
	  &lt;!-- Secondary Navigation Section --&gt;
	  &lt;div class="nav__navbar" role="navigation" aria-label="secondary"&gt;
	    &lt;!-- mobile dropdown search --&gt;
	    &lt;div class="nav__search-bar"&gt;
	      &lt;form role="search" class="search-bar form-cse"&gt;
	        &lt;label for="search-input" class="search-bar__label hidden"&gt;
	          Site Search
	        &lt;/label&gt;
	        
	        &lt;input type="search" id="sample-search-input" tite="Enter text to search" class="search-bar__input search-bar__input--primary gcse-searchbox search-bar__input" placeholder="Search" required&gt;&lt;!--
	        
	        --&gt;&lt;button class="btn search-bar__btn search-bar__btn--primary" aria-label="Search"&gt;&lt;img src="//www.coveredca.com/images/icons/magnify-primary.svg" alt=""&gt;&lt;/button&gt;
	      &lt;/form&gt; 
	    &lt;/div&gt; 
	    &lt;div class="overlay"&gt;&lt;/div&gt; 
	    &lt;div class="navbar"&gt;            
	      &lt;a href="" class="navbar__menu-title navbar__menu-title--no-top-border"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;Menu Title&lt;/a&gt;
	      &lt;ul class="navbar__menu navbar__menu--primary navbar__menu--align-tablet"&gt;                    
	        &lt;li class="navbar__menu-item"&gt;
	          &lt;a class="navbar__menu-link" href="#" aria-expanded="false"&gt;&lt;i class="fa fa-plus-circle" aria-hidden="true"&gt;&lt;/i&gt;
	            Menu Item
	            &lt;span class="sr-only"&gt;Lets visually impaired users that this page element is collapsible&lt;/span&gt;
	            &lt;i class="fa fa-chevron-down fa-chevron-down--dropdown" aria-hidden="true"&gt;&lt;/i&gt;
	          &lt;/a&gt;
	          &lt;div class="navbar__dropdown navbar__dropdown--full-width" aria-hidden="true"&gt;
	            &lt;div class="mega-dropdown"&gt;
	              &lt;div class="mega-dropdown__back-btn"&gt;
	                &lt;span class="nav-title--first-level"&gt;First Level&lt;/span&gt;
	                &lt;span class="mega-dropdown__glyph"&gt;&lt;i class="fa fa-times-circle" aria-hidden="true"&gt;&lt;/i&gt;Back&lt;/span&gt;
	              &lt;/div&gt;
	              &lt;div class="mega-dropdown__pair"&gt;
	                &lt;p class="mega-dropdown__menu-title"&gt;
	                  &lt;i class="fa fa-plus-circle" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="mega-dropdown__menu-title-content"&gt;Menu Description&lt;/span&gt;&lt;/p&gt;
	                &lt;ul class="mega-dropdown__menu"&gt;  
	                  &lt;li class="mega-dropdown__menu-item"&gt;
	                    &lt;a class="mega-dropdown__menu-link" href=""&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;More menu item&lt;/span&gt;&lt;/a&gt;
	                  &lt;/li&gt;
	                  &lt;li class="mega-dropdown__menu-item"&gt;
	                    &lt;a class="mega-dropdown__menu-link" href=""&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;More menu item&lt;/span&gt;&lt;/a&gt;
	                  &lt;/li&gt;
	                  &lt;li class="mega-dropdown__menu-item"&gt;
	                    &lt;a class="mega-dropdown__menu-link" href=""&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;More menu item&lt;/span&gt;&lt;/a&gt;
	                  &lt;/li&gt;
	                  &lt;li class="mega-dropdown__menu-item"&gt;
	                    &lt;a class="mega-dropdown__menu-link" href=""&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;More menu item&lt;/span&gt;&lt;/a&gt;
	                  &lt;/li&gt;
	                &lt;/ul&gt;
	              &lt;/div&gt;
	              &lt;div class="mega-dropdown__pair"&gt;
	                &lt;p class="mega-dropdown__menu-title"&gt;
	                  &lt;i class="fa fa-plus-circle" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="mega-dropdown__menu-title-content"&gt;Another Description&lt;/span&gt;&lt;/p&gt;
	                &lt;ul class="mega-dropdown__menu"&gt; 

	                  &lt;li class="mega-dropdown__menu-item"&gt;&lt;a class="mega-dropdown__menu-link" href="#"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;Another menu link&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	                  &lt;li class="mega-dropdown__menu-item"&gt;&lt;a class="mega-dropdown__menu-link" href="#"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;Another menu link&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	                  &lt;li class="mega-dropdown__menu-item"&gt;&lt;a class="mega-dropdown__menu-link" href="#"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;Another menu link&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

	                &lt;/ul&gt;
	                &lt;p class="mega-dropdown__menu-title"&gt;&lt;i class="fa fa-plus-circle" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="mega-dropdown__menu-title-content"&gt;When Can I Enroll?&lt;/span&gt;&lt;/p&gt;
	                &lt;ul class="mega-dropdown__menu"&gt;

	                  &lt;li class="mega-dropdown__menu-item"&gt;&lt;a href="#" class="mega-dropdown__menu-link"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;Open Enrollment&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

	                  &lt;li class="mega-dropdown__menu-item"&gt;&lt;a href="#" class="mega-dropdown__menu-link"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;Special Enrollment&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

	                  &lt;li class="mega-dropdown__menu-item"&gt;&lt;a href="#" class="mega-dropdown__menu-link"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;Medi-Cal Enrollment&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

	                &lt;/ul&gt;
	              &lt;/div&gt;
	              &lt;div class="mega-dropdown__pair"&gt;
	                &lt;p class="mega-dropdown__menu-title"&gt;&lt;i class="fa fa-plus-circle" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="mega-dropdown__menu-title-content"&gt;How Do I Apply?&lt;/span&gt;&lt;/p&gt;
	                &lt;ul class="mega-dropdown__menu"&gt;
	                  
	                  &lt;li class="mega-dropdown__menu-item"&gt;&lt;a href="#" class="mega-dropdown__menu-link"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;Shop and Compare&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	                  &lt;li class="mega-dropdown__menu-item"&gt;&lt;a href="#" class="mega-dropdown__menu-link"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;Shop and Compare&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
	                  &lt;li class="mega-dropdown__menu-item"&gt;&lt;a href="#" class="mega-dropdown__menu-link"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;&lt;span class="display-inline-block width-80"&gt;Shop and Compare&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;

	                &lt;/ul&gt; 
	                &lt;a class="mega-dropdown__browse-section-btn mega-dropdown__browse-section-btn--top-space" href="#"&gt;&lt;i class="fa fa-chevron-circle-right" aria-hidden="true"&gt;&lt;/i&gt;Browse All Topics&lt;/a&gt;
	              &lt;/div&gt;
	            &lt;/div&gt;
	          &lt;/div&gt;  
	        &lt;/li&gt;  
	       &lt;/ul&gt;         
	      &lt;/div&gt;
	    &lt;/div&gt;
	  &lt;/div&gt;
	&lt;/div&gt;
			</code>
		</pre>
	</div>
</div>

