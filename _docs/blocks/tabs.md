---
title: Tabs
category: Blocks
order: 1
---

## Examples

<div class="row" style="margin-bottom: 30px;">
	<div class="col-sm-12">
		<ul class="tabs tabs--agents tabs--3">
			<li class="tabs__item">
				<a href="#" class="tabs__content tabs__content--if">
		    		<div class="vertical-align-middle">
			    		<div class="vertical-align-middle__component">
		    				<h3>I'm An Agent</h3>
		    				<small>Individuals and Families</small>
			    		</div>
			    	</div>
			    	<span class="glyphicon glyphicon-triangle-bottom tabs__triangle-bottom tabs__triangle-bottom--if"></span>
		    	</a>
			</li><!--
		 --><li class="tabs__item">
		 		<a href="#" class="tabs__content tabs__content--sb tabs__content--inactive">
			 		<div class="vertical-align-middle">
			    		<div class="vertical-align-middle__component">	 
		    				<h3>I'm An Agent</h3>
		    				<small>Small Business</small>					    							    			
			    		</div> 
			    	</div>	
			    	<span class="glyphicon glyphicon-triangle-bottom tabs__triangle-bottom tabs__triangle-bottom--sb"></span>	
		    	</a>		 		
		 	</li><!--
		 --><li class="tabs__item">
		    	<a href="#" class="tabs__content tabs__content--ba tabs__content--inactive">
					<div class="vertical-align-middle">
			    		<div class="vertical-align-middle__component">
			    			<h3>Become An Agent</h3>
			    		</div>
			    	</div>
			    	<span class="glyphicon glyphicon-triangle-bottom tabs__triangle-bottom tabs__triangle-bottom--ba"></span>
				</a>				 		
		 	</li>
		</ul>
	</div>
</div>

<div class="row">
	<div class="col-sm-12">
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
</div>

<div class="row margin-top-65--desktop" style="margin-bottom: 30px;">
	<div class="col-sm-12">
		<ul class="tabs tabs--header">
	        <li class="tabs__item">
	          <a href="" class="tabs__content tabs__content--if">
	            <span class="sr-only">active tab</span>
	            <div class="vertical-align-middle">
	              <div class="vertical-align-middle__component">
	                ACTIVE TAB
	              </div>
	            </div>
	          </a>
	        </li><!--
	       --><li class="tabs__item ">
	          <a href="{{ site.data.topnav[page.lang].tabs[1].url }}" class="tabs__content tabs__content--sb tabs__content--inactive">
	            <span class="sr-only">inactive tab</span>
	              <div class="vertical-align-middle">
	                <div class="vertical-align-middle__component">
	                  INACTIVE TAB
	                </div>
	              </div>
	            </a>                        
	        </li>
	      </ul>
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
&lt;div class="row" style="margin-bottom: 30px;"&gt;
  &lt;div class="col-sm-12"&gt;
    &lt;ul class="tabs tabs--agents tabs--3"&gt;
      &lt;li class="tabs__item"&gt;
        &lt;a href="#" class="tabs__content tabs__content--if"&gt;
            &lt;div class="vertical-align-middle"&gt;
              &lt;div class="vertical-align-middle__component"&gt;
                &lt;h3&gt;I'm An Agent&lt;/h3&gt;
                &lt;small&gt;Individuals and Families&lt;/small&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;span class="glyphicon glyphicon-triangle-bottom tabs__triangle-bottom tabs__triangle-bottom--if"&gt;&lt;/span&gt;
          &lt;/a&gt;
      &lt;/li&gt;&lt;!--
     --&gt;&lt;li class="tabs__item"&gt;
         &lt;a href="#" class="tabs__content tabs__content--sb tabs__content--inactive"&gt;
           &lt;div class="vertical-align-middle"&gt;
              &lt;div class="vertical-align-middle__component"&gt;   
                &lt;h3&gt;I'm An Agent&lt;/h3&gt;
                &lt;small&gt;Small Business&lt;/small&gt;                                      
              &lt;/div&gt; 
            &lt;/div&gt;  
            &lt;span class="glyphicon glyphicon-triangle-bottom tabs__triangle-bottom tabs__triangle-bottom--sb"&gt;&lt;/span&gt;  
          &lt;/a&gt;         
       &lt;/li&gt;&lt;!--
     --&gt;&lt;li class="tabs__item"&gt;
          &lt;a href="#" class="tabs__content tabs__content--ba tabs__content--inactive"&gt;
          &lt;div class="vertical-align-middle"&gt;
              &lt;div class="vertical-align-middle__component"&gt;
                &lt;h3&gt;Become An Agent&lt;/h3&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;span class="glyphicon glyphicon-triangle-bottom tabs__triangle-bottom tabs__triangle-bottom--ba"&gt;&lt;/span&gt;
        &lt;/a&gt;             
       &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="row"&gt;
  &lt;div class="col-sm-12"&gt;
    &lt;ul class="tabs tabs--header"&gt;
            &lt;li class="tabs__item"&gt;
              &lt;a href="{{ site.data.topnav[page.lang].tabs[0].url }}" class="tabs__content tabs__content--if tabs__content--inactive"&gt;
                &lt;span class="sr-only"&gt;Active&lt;/span&gt;
                &lt;div class="vertical-align-middle"&gt;
                  &lt;div class="vertical-align-middle__component"&gt;
                    SMALL BUSINESS
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/a&gt;
            &lt;/li&gt;&lt;!--
           --&gt;&lt;li class="tabs__item "&gt;
              &lt;a href="{{ site.data.topnav[page.lang].tabs[1].url }}" class="tabs__content tabs__content--sb"&gt;
                &lt;span class="sr-only"&gt;inactive&lt;/span&gt;
                  &lt;div class="vertical-align-middle"&gt;
                    &lt;div class="vertical-align-middle__component"&gt;
                      INDIVIDUALS AND FAMILIES
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/a&gt;                        
            &lt;/li&gt;
          &lt;/ul&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="row margin-top-65--desktop" style="margin-bottom: 30px;"&gt;
  &lt;div class="col-sm-12"&gt;
    &lt;ul class="tabs tabs--header"&gt;
          &lt;li class="tabs__item"&gt;
            &lt;a href="" class="tabs__content tabs__content--if"&gt;
              &lt;span class="sr-only"&gt;active tab&lt;/span&gt;
              &lt;div class="vertical-align-middle"&gt;
                &lt;div class="vertical-align-middle__component"&gt;
                  ACTIVE TAB
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/a&gt;
          &lt;/li&gt;&lt;!--
         --&gt;&lt;li class="tabs__item "&gt;
            &lt;a href="{{ site.data.topnav[page.lang].tabs[1].url }}" class="tabs__content tabs__content--sb tabs__content--inactive"&gt;
              &lt;span class="sr-only"&gt;inactive tab&lt;/span&gt;
                &lt;div class="vertical-align-middle"&gt;
                  &lt;div class="vertical-align-middle__component"&gt;
                    INACTIVE TAB
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/a&gt;                        
          &lt;/li&gt;
        &lt;/ul&gt;
  &lt;/div&gt;
&lt;/div&gt;
			</code>
		</pre>
	</div>
</div>

