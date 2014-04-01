proportional
============

Lets HTML elements maintain proportion.

There are [a few pure CSS approaches](#pure-css-approaches) for forcing an element to maintain a certain proportion or ratio.
But all are subject to [sub-pixel rounding errors](#sub-pixel-rounding-errors).
The traditonal way, using a placeholder image, is still the most reliable cross-browser solution.

This repo standardizes the needed HTML/CSS for reusability.


## Install

Via bower as `proportional`.

```sh
bower install --save proportional
```

## Usage

Include the CSS in your page, then use the HTML structure seen in examples below.
Provide an image with the correct proportions &ndash preferrably a small transparent GIF, e.g. one generated from the wonderful [ima.gs](http:/ima.gs) service.


The inner `<div>` will fill the `.proportional` parent element, whose proportion will
mirror the proportions of the nested `<img>`.

Example with a GIF from [ima.gs](ima.gs):

```html
<div class="proportional">
  <div>
    <!-- content here -->
  </div>
  <img src="http://ima.gs/transparent/none/none/3x2.png" />
</div>
```

### Examples

See https://AndersDJohnson.github.io/proportional/example/.


## Reference


### Sub-pixel rounding errors
* http://ejohn.org/blog/sub-pixel-problems-in-css/
* http://www.palantir.net/blog/responsive-design-s-dirty-little-secret

### Pure CSS approaches

Here are a few pure CSS attempts from around the web &ndash;
all subject to sub-pixel rounding errors:

* http://daverupert.com/2012/04/uncle-daves-ol-padded-box/
* http://wemadeyoulook.at/en/blog/proportional-scaling-responsive-boxes-using-just-css/
* http://wellcaffeinated.net/articles/2012/12/10/very-simple-css-only-proportional-resizing-of-elements/
* http://ansciath.tumblr.com/post/7347495869/css-aspect-ratio
* http://absolide.tumblr.com/post/7317210512/full-css-fluid-squares


