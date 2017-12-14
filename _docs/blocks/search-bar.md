---
title: Search Bar
category: Blocks
order: 1
---

<style>
	.search-bar{
		display: block;
	}
	.search-bar__label{}
	.search-bar__input{
		display: inline-block;
	}
	.search-bar__btn{
		display: inline-block;
	}
</style>

## Examples

<div class="row">
	<div class="col-sm-3">
        <form role="search" class="search-bar form-cse">
            <label for="search-input" class="search-bar__label hidden">
             Site Search
            </label>
            
            <input type="search" id="example-search-input" tite="Enter text to search" class="search-bar__input search-bar__input--primary gcse-searchbox search-bar__input" placeholder="Desktop Search" required><!--            
            --><button class="btn search-bar__btn search-bar__btn--primary" aria-label="Search"><img src="https://www.google.com/uds/css/v2/search_box_icon.png" alt=""></button>
          </form>
	</div>
	<div class="col-sm-3">
		<form role="search" class="search-bar form-cse">
            <label for="search-input" class="search-bar__label hidden">
             Site Search
            </label>
            
            <input type="search" id="example-search-input-mobile" tite="Enter text to search" class="search-bar__input search-bar__input--primary gcse-searchbox search-bar__input" placeholder="Mobile Search" required><!--
            
            --><button class="btn search-bar__btn search-bar__btn--primary" aria-label="Search"><img src="//www.coveredca.com/images/icons/magnify-primary.svg" alt=""></button>
          </form> 
    </div>
    <div class="col-sm-3">
		<form role="search" class="search-bar form-cse">

			<label for="search-input" class="search-bar__label hidden">Búsqueda del sitio</label>

			<input type="search" id="example-search-input-sb" tite="Ingresar texto para buscar" class="search-bar__input search-bar__input--secondary gcse-searchbox" placeholder="Desktop Small Business Buscar" required><!--

			--><button class="btn search-bar__btn search-bar__btn--secondary" aria-label="Search">
				<img src="https://www.google.com/uds/css/v2/search_box_icon.png" alt="">
				</button>
		</form>
    </div>
    <div class="col-sm-3">
    	<form role="search" class="search-bar form-cse">
                
          <label for="example-search-input-mobile-sb" class="search-bar__label hidden">Búsqueda del sitio</label>
          
          <input type="text" id="search-input-mobile" title="Ingresar texto para buscar" class="search-bar__input search-bar__input--secondary gcse-searchbox" placeholder="Mobile Small Business Buscar" required><!--
          
          --><button type="submit" class="btn search-bar__btn search-bar__btn--secondary" aria-label="Search">
              <img src="//coveredca.com/images/icons/magnify-primary--nevada.svg" alt="Search">
            </button>
        </form>
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
&lt;div class="row"&gt;
  &lt;div class="col-sm-3"&gt;
        &lt;form role="search" class="search-bar form-cse"&gt;
            &lt;label for="search-input" class="search-bar__label hidden"&gt;
             Site Search
            &lt;/label&gt;
            
            &lt;input type="search" id="example-search-input" tite="Enter text to search" class="search-bar__input search-bar__input--primary gcse-searchbox search-bar__input" placeholder="Desktop Search" required&gt;&lt;!--            
            --&gt;&lt;button class="btn search-bar__btn search-bar__btn--primary" aria-label="Search"&gt;&lt;img src="https://www.google.com/uds/css/v2/search_box_icon.png" alt=""&gt;&lt;/button&gt;
          &lt;/form&gt;
  &lt;/div&gt;
  &lt;div class="col-sm-3"&gt;
    &lt;form role="search" class="search-bar form-cse"&gt;
            &lt;label for="search-input" class="search-bar__label hidden"&gt;
             Site Search
            &lt;/label&gt;
            
            &lt;input type="search" id="example-search-input-mobile" tite="Enter text to search" class="search-bar__input search-bar__input--primary gcse-searchbox search-bar__input" placeholder="Mobile Search" required&gt;&lt;!--
            
            --&gt;&lt;button class="btn search-bar__btn search-bar__btn--primary" aria-label="Search"&gt;&lt;img src="//www.coveredca.com/images/icons/magnify-primary.svg" alt=""&gt;&lt;/button&gt;
          &lt;/form&gt; 
    &lt;/div&gt;
    &lt;div class="col-sm-3"&gt;
    &lt;form role="search" class="search-bar form-cse"&gt;

      &lt;label for="search-input" class="search-bar__label hidden"&gt;Búsqueda del sitio&lt;/label&gt;

      &lt;input type="search" id="example-search-input-sb" tite="Ingresar texto para buscar" class="search-bar__input search-bar__input--secondary gcse-searchbox" placeholder="Desktop Small Business Buscar" required&gt;&lt;!--

      --&gt;&lt;button class="btn search-bar__btn search-bar__btn--secondary" aria-label="Search"&gt;
        &lt;img src="https://www.google.com/uds/css/v2/search_box_icon.png" alt=""&gt;
        &lt;/button&gt;
    &lt;/form&gt;
    &lt;/div&gt;
    &lt;div class="col-sm-3"&gt;
      &lt;form role="search" class="search-bar form-cse"&gt;
                
          &lt;label for="example-search-input-mobile-sb" class="search-bar__label hidden"&gt;Búsqueda del sitio&lt;/label&gt;
          
          &lt;input type="text" id="search-input-mobile" title="Ingresar texto para buscar" class="search-bar__input search-bar__input--secondary gcse-searchbox" placeholder="Mobile Small Business Buscar" required&gt;&lt;!--
          
          --&gt;&lt;button type="submit" class="btn search-bar__btn search-bar__btn--secondary" aria-label="Search"&gt;
              &lt;img src="https://coveredca.com/images/icons/magnify-primary--nevada.svg" alt="Search"&gt;
            &lt;/button&gt;
        &lt;/form&gt;
    &lt;/div&gt;
&lt;/div&gt;
			</code>
		</pre>
	</div>
</div>

