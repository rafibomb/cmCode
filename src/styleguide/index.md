# Typography

<p class="lead">This design uses San Francisco for headings and paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```

# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-checklist">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

---

## Learn All About Forms

Check out the [Foundation Docs](http://foundation.zurb.com/sites/docs) to learn about how flexible our forms are for creating different layouts. It works perfectly with the grid to meet all your form needs.

---

## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
```

# Checkbox & Radio

Associated files:

- _\_custom-global-variables.scss_
- _\_checkbox.scss_

Associated Custom Variables:

```scss
$checkbox-label-offset: 1.75rem;
$checkbox-size: rem-calc(20);
$checkbox-check-size: rem-calc(15);
$checkbox-border-color: $border-color;
$checkbox-bg: $off-white;
$checkbox-selected-bg: $off-white;
$checkbox-icon: url('../img/icons/checkmark-icon.svg');
```

Checkboxes and Radios are custom styled. Setting them up is super easy:

- The input `type="checkbox"` must be directly followed by a label in the HTML to set up the style.
- To align the checkbox to the top of the label, add the `.checkbox-align-top` class to the label.
- To start the checkbox selected, add the `[checked]` attribute to the input.

---

### Checkbox

<div>
  <input id="newsletterOptin" type="checkbox" checked>
  <label for="newsletterOptin">Please confirm that you agree to receive some rad newsletters via email.</label>
</div>
<br>
<div>
  <input id="newsletterOptin" type="checkbox" checked>
  <label class="checkbox-align-top" for="newsletterOptin">Please confirm that you agree to receive some rad newsletters via email. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illum et provident animi commodi similique explicabo perferendis. Similique rerum ratione itaque, molestiae, sequi molestias aperiam quas minima recusandae ullam incidunt.</label>
</div>

<br>

```html
<input id="newsletterOptin" type="checkbox" checked />
<label for="newsletterOptin"
  >Please confirm that you agree to receive some rad newsletters via
  email.</label
>

<!-- aligned to top -->
<input id="newsletterOptin" type="checkbox" checked />
<label class="checkbox-align-top" for="newsletterOptin"
  >Please confirm that you agree to receive some rad newsletters via email.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illum et
  provident animi commodi similique explicabo perferendis. Similique rerum
  ratione itaque, molestiae, sequi molestias aperiam quas minima recusandae
  ullam incidunt.</label
>
```

---

### Radio

<div>
  <label style="margin-bottom: 0.75rem;">Choose Your Favorite</label>
  <div style="margin-bottom: 0.75rem;">
    <input type="radio" id="huey" name="drone" value="huey" checked>
    <label for="huey">Huey</label>
  </div>
  <div style="margin-bottom: 0.75rem;">
    <input type="radio" id="dewey" name="drone" value="dewey">
    <label for="dewey">Dewey</label>
  </div>
  <div>
    <input type="radio" id="louie" name="drone" value="louie">
    <label for="louie">Louie</label>
  </div>
</div>

<br>

```html
<label>Choose Your Favorite</label>
<div>
  <input type="radio" id="huey" name="drone" value="huey" checked />
  <label for="huey">Huey</label>
</div>
<div>
  <input type="radio" id="dewey" name="drone" value="dewey" />
  <label for="dewey">Dewey</label>
</div>
<div>
  <input type="radio" id="louie" name="drone" value="louie" />
  <label for="louie">Louie</label>
</div>
```

# New Section

4 returns (spaces) between items and start with an h1

```html_example
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
```

# Sass Mixins

These mixins will simplify your CSS, help you build faster, and help create standard styles. The beauty of these mixins is they are there if you need them, and will not output any CSS if you do not use them.

---

### Animate Gradient

This mixin allows you to animate a gradient, which is not possible with a background-img propery.

It creates a psuedo element on your element that overlays the item when called on hover.

**Useage:**

Pass in the starting color, ending color, and transition time.

```scss
.element {
  @include gradient-animation($gray200, $gray900, 0.6s);
}
```

---

### Avatar

Creates a rounded image. Default sizes are `tiny`, `small`, `medium`, `large`.

**Useage:**

```scss
.avatar {
  @include avatar;
}

//pass in options
.avatar {
  @include avatar($size: medium, $radius: 50%);
}
```

---

### Container border

Used to create a consistent border or divider style. You can pass in a default box shadow by setting \$shadow to true.

**Useage:**

```scss
.container {
  @include container-border($shadow: false);
}
```

---

### Flexbox

These flexbox mixins simplify your Sass and also reset margin bottoms of common elements so they can be easily vertically centered.

**Useage:**

```scss
// center direct children vertically and horizontally
.thing {
  @include flex-centerer;
}

// center children vertically and justify horizontally
.thing {
  @include flex-middle-justify;
}

// center children vertically and space around horizontally
.thing {
  @include flex-middle-spaced;
}

// center children vertically and push to end horizontally
.thing {
  @include flex-middle-end;
}

// children are bottom vertically and justify horizontally
.thing {
  @include flex-middle-end;
}
```

---

### Psuedo

This helps use Psuedo `::before`, `::after` elements more effectively.

**Useage:**

```scss
// You can change the default after the colon as needed.
.thing {
  &::after {
    @include pseudo($display: block, $pos: absolute, $content: '');
  }
}
```

---

### Push Center

This will apply margin: auto left and right to center a block level element. Using this is better than applying `margin: 0 auto` as it could reduce CSS and unwanted issue when setting bottom margin later.

**Useage:**

```scss
.container {
  @include push-center;
}

// if the element is not already display: block, you can pass in the argument
.container {
  @include push-center($display: block);
}
```

---

### Scrolling

These scrolling mixins help apply the proper overflow style and the necessary iOS scrolling propery.

**Useage:**

```scss
// vertical
.container {
  @include vertical-scroll;
}

// horizontal
.container {
  @include horizontal-scroll;
}
```

You can also hide scollbars on IE/Edge and iOS using this mixin:

**Useage:**

```scss
.container {
  @include hide-scrollbars;
}
```

Scrolling containers with shadows can be achieved using the scrollbox mixin.

**Useage:**

```scss
.scrollbox {
  @include scrollbox(vertical, 200px);
}

.scrollbox-horiz {
  @include scrollbox(horizontal, 200px);
}
```

---

### Sidelines

This mixin creates a pattern for horizontal lines on the sides of an element. _Default variables can be found in the mixins > `_sidelines.scss` file._

Usage as a class:

```html_example
<h2 class="type-sidelines"><span>OR</span></h2>
```

Usage as a mixin:

```scss
// just use it
.type-sidelines {
  @include sidelines;
}

// or pass in options
.type-sidelines {
  $text-padding: $sidelines-text-padding,
  $text-left: $sidelines-text-align-left,
  $line-thickness: $sidelines-line-thickness,
  $line-length: $sidelines-line-length,
  $line-color: $sidelines-line-color,
  $line-style: $sidelines-line-style,
  $double-line: $sidelines-double-line,
  $double-line-spacing: $sidelines-double-line-spacing
}

// or some options
.type-sidelines-dotted {
  @include sidelines($text-left: true, $line-style: dotted);
}
```

---

### Spacing

There are functional CSS spacing classes available for margin-bottom.

By default, there are 4 classes. If you need more, you can change the "through" number in the mixins > `_spacing.scss` file.

Classes:

- margin-bottom: 0; = `.mb0`
- margin-bottom: 1; = `.mb1`
- margin-bottom: 2; = `.mb2`
- margin-bottom: 3; = `.mb3`

---

### SVG Coloring

This mixins makes it easy to apply CSS colors to your SVG's. You will need to pass in a color for this to work.

**Useage:**

```scss
.button:hover {
  @include svg-coloring($color: $primary-color);
}
```

---

### Transition

Using this transition mixin will not only save writing CSS properties by hand but also add some consistency in timing and easing. _Note: you only need to apply the transition on the element itself for it to work in both directions, not the state of the element like :hover._

For better performance, avoid using `all` as the transition property.

Defaults:

```scss
// Default values
$property: all; // all is a fallback but you should define a property for better performance
$duration: 0.2s;
$easing: ease-out; // Browser default is ease otherwise
$delay: null; // Browser default is 0, which is what we want
$defaultProperties: ($property, $duration, $easing, $delay);
```

**Useage:**

```scss
// define arguments
.button {
  @include transition(background-color 0.4s ease);
  background-color: $primary-color;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

// or use the defaults
.button {
  @include transition(background-color);
  background-color: $primary-color;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

// define multiple transitions
.button {
  @include transition(background-color, color);
  background-color: $primary-color;

  &:hover {
    background-color: darken($primary-color, 10%);
    color: darken($white, 10%);
  }
}
```

---

### Truncate

You can truncate text pretty easily with these mixins. There's even a mixin for responsive or multiline.

**Useage:**

```scss
// Pass in a width for this to work.
.truncated-text {
  @include truncate($width, $display: initial);
}

// Pass in a the number of lines to cut this off at.
.truncated-text {
  @include truncate-lines($lines);
}

// Wrap the truncated text in a class with this mixin.
.truncated-text {
  @include truncate-responsive;
}
```

---

### Z Index

Layering order of elements can get unruly quite quickly so this mixin will help bring some order to it.

Store you z-index's in the Sass map. You 'll find it in mixins > `_zindex.scss`. Apply any name you like and assign a z-index value.

```scss
$z-layers: (
  app-sidebar: 11,
  app-frame: 4000,
  modal: 4001,
);
```

**Useage:**

```scss
.some-modal {
  z-index: z(modal);
}
```

---

### Foundation's Built-in Mixins

There are many more Mixins built into Foundation you can access at any time. The beauty of these mixins is they are there if you need them, and will not output any CSS if you do not use them.

Check the Foundation Documentation for more helpful Sass mixins:

- [Sass Mixins used to build Foundation components](https://foundation.zurb.com/sites/docs/sass-mixins.html)
- [Additionl Sass Mixin Utilities](https://foundation.zurb.com/sites/docs/prototyping-utilities.html)
