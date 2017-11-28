---
title: Alert
category: Blocks
order: 1
---

## Examples

<div class="row margin-top-65--desktop">

	<div class="col-md-12">
		<div class="alert">
			<p>	
				{% if page.lang == 'en' %}
				Open enrollment has begun and continues through Jan. 31, 2018
				{% else %}
				La inscripción abierta ya inició y continúa hasta el 31 de enero de 2018
				{% endif %} 
			</p>
		</div>
		<div class="alert alert--mobile-only">
			<h3>This one only shows up on mobile</h3>
			<p>	
				{% if page.lang == 'en' %}
				Open enrollment has begun and continues through Jan. 31, 2018
				{% else %}
				La inscripción abierta ya inició y continúa hasta el 31 de enero de 2018
				{% endif %} 
			</p>
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
&lt;div class="alert"&gt;
  &lt;p&gt;  
    {% if page.lang == 'en' %}
    Open enrollment has begun and continues through Jan. 31, 2018
    {% else %}
    La inscripción abierta ya inició y continúa hasta el 31 de enero de 2018
    {% endif %} 
  &lt;/p&gt;
&lt;/div&gt;
&lt;div class="alert alert--mobile-only"&gt;
  &lt;h2&gt;This one only shows up on mobile&lt;/h2&gt;
  &lt;p&gt;  
    {% if page.lang == 'en' %}
    Open enrollment has begun and continues through Jan. 31, 2018
    {% else %}
    La inscripción abierta ya inició y continúa hasta el 31 de enero de 2018
    {% endif %} 
  &lt;/p&gt;
&lt;/div&gt;
			</code>
		</pre>
	</div>
</div>

