---
title: Header
category: Blocks
order: 1
---

## Examples

<div class="row margin-top-65--desktop" style="margin-bottom: 100px;">
	<div class="col-sm-12">
		<div class="header">
		  <!-- The top of the navbar - the white part -->
		  <div class="header__layout"> 
		    <div class="header__container container">
		      <div class="header__skip-nav" tabindex="0">
		        <a class="header__skip-nav-link" id="skip" href="#main-content">Header Skip Nav</a>
		      </div> 
		 
		      <!-- logo --> 
		      <div class="header__logo">
				<div class="logo">
				  <a class="logo__link" href="/">Covered California</a>
				</div>
		      </div>    
		       
		      <!-- individual and families & small business tabs -->
		      <!-- Primary Navigation Section -->
		      <section role="navigation" aria-label="primary"> 
		        <div class="header__tabs">
		          <ul class="tabs tabs--header">
		            <li class="tabs__item">
		              <a href="{{ site.data.topnav[page.lang].tabs[0].url }}" class="tabs__content tabs__content--if tabs__content--inactive">
		                <span class="sr-only">Active</span>
		                <div class="vertical-align-middle">
		                  <div class="vertical-align-middle__component">
		                     INDIVIDUALS AND FAMILIES
		                  </div>
		                </div>
		              </a>
		            </li><!--
		           --><li class="tabs__item ">
		              <a href="{{ site.data.topnav[page.lang].tabs[1].url }}" class="tabs__content tabs__content--sb">
		                <span class="sr-only">inactive</span>
		                  <div class="vertical-align-middle">
		                    <div class="vertical-align-middle__component">
		                     SMALL BUSINESS
		                    </div>
		                  </div>
		                </a>                        
		            </li>
		          </ul>
		        </div> 

		        <!-- sign in and language -->
		        <div class="header__utility">
		          <div class="vertical-align-middle">
		            <div class="vertical-align-middle__component">
		               <div class="utility">         
					    <a class="utility__link utility__link--sign-in" href="https://apply.coveredca.com/apspahbx/login.portal" target="_blank">
					      <span class="hidden-sm hidden-md">Account</span> 
					      Sign In
					    </a>
					    <span class="divider">|</span> 
					    <a class="utility__link utility__link--espanol" href=" /espanol/ ">Español</a>          
					  </div>
		            </div>
		          </div>          
		        </div>

		        <!-- search button -->
		        <div class="header__search">
		           <form role="search" class="search-bar form-cse">
		            <label for="search-input" class="search-bar__label hidden">
		             Site Search
		            </label>
		            
		            <input type="search" id="example-search-input" tite="Enter text to search" class="search-bar__input search-bar__input--primary gcse-searchbox search-bar__input" placeholder="Desktop Search" required><!--            
		            --><button class="btn search-bar__btn search-bar__btn--primary" aria-label="Search"><img src="https://www.google.com/uds/css/v2/search_box_icon.png" alt=""></button>
		          </form>
		        </div>
		      </section>

		      <div>
		      	nav goes here
		      </div>
		    </div> 

		  </div><!-- end header__layout -->
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
&lt;div class="header"&gt;
  &lt;!-- The top of the navbar - the white part --&gt;
  &lt;div class="header__layout"&gt; 
    &lt;div class="header__container container"&gt;
      &lt;div class="header__skip-nav" tabindex="0"&gt;
        &lt;a class="header__skip-nav-link" id="skip" href="#main-content"&gt;Header Skip Nav&lt;/a&gt;
      &lt;/div&gt; 
 
      &lt;!-- logo --&gt; 
      &lt;div class="header__logo"&gt;
    &lt;div class="logo"&gt;
      &lt;a class="logo__link" href="/"&gt;Covered California&lt;/a&gt;
    &lt;/div&gt;
      &lt;/div&gt;    
       
      &lt;!-- individual and families &amp; small business tabs --&gt;
      &lt;!-- Primary Navigation Section --&gt;
      &lt;section role="navigation" aria-label="primary"&gt; 
        &lt;div class="header__tabs"&gt;
          &lt;ul class="tabs tabs--header"&gt;
            &lt;li class="tabs__item"&gt;
              &lt;a href="{{ site.data.topnav[page.lang].tabs[0].url }}" class="tabs__content tabs__content--if tabs__content--inactive"&gt;
                &lt;span class="sr-only"&gt;Active&lt;/span&gt;
                &lt;div class="vertical-align-middle"&gt;
                  &lt;div class="vertical-align-middle__component"&gt;
                     INDIVIDUALS AND FAMILIES
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/a&gt;
            &lt;/li&gt;&lt;!--
           --&gt;&lt;li class="tabs__item "&gt;
              &lt;a href="{{ site.data.topnav[page.lang].tabs[1].url }}" class="tabs__content tabs__content--sb"&gt;
                &lt;span class="sr-only"&gt;inactive&lt;/span&gt;
                  &lt;div class="vertical-align-middle"&gt;
                    &lt;div class="vertical-align-middle__component"&gt;
                     SMALL BUSINESS
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/a&gt;                        
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt; 

        &lt;!-- sign in and language --&gt;
        &lt;div class="header__utility"&gt;
          &lt;div class="vertical-align-middle"&gt;
            &lt;div class="vertical-align-middle__component"&gt;
               &lt;div class="utility"&gt;         
          &lt;a class="utility__link utility__link--sign-in" href="https://apply.coveredca.com/apspahbx/login.portal" target="_blank"&gt;
            &lt;span class="hidden-sm hidden-md"&gt;Account&lt;/span&gt; 
            Sign In
          &lt;/a&gt;
          &lt;span class="divider"&gt;|&lt;/span&gt; 
          &lt;a class="utility__link utility__link--espanol" href=" /espanol/ "&gt;Español&lt;/a&gt;          
        &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;          
        &lt;/div&gt;

        &lt;!-- search button --&gt;
        &lt;div class="header__search"&gt;
           &lt;form role="search" class="search-bar form-cse"&gt;
            &lt;label for="search-input" class="search-bar__label hidden"&gt;
             Site Search
            &lt;/label&gt;
            
            &lt;input type="search" id="example-search-input" tite="Enter text to search" class="search-bar__input search-bar__input--primary gcse-searchbox search-bar__input" placeholder="Desktop Search" required&gt;&lt;!--            
            --&gt;&lt;button class="btn search-bar__btn search-bar__btn--primary" aria-label="Search"&gt;&lt;img src="https://www.google.com/uds/css/v2/search_box_icon.png" alt=""&gt;&lt;/button&gt;
          &lt;/form&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      &lt;div&gt;
        nav goes here
      &lt;/div&gt;
    &lt;/div&gt; 

  &lt;/div&gt;&lt;!-- end header__layout --&gt;
&lt;/div&gt;
			</code>
		</pre>
	</div>
</div>

