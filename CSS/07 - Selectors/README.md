# CSS Combinators

A combinator is something that explains the relationship between the selectors.

## Descendant Selectors

The descendant selector matches all elements that are descendants of a specified element.

The following example selects all `<p>` elements inside `<div>` elements:

```
div p {
  background-color: yellow;
}
```

## Child Selector (>)

The child selector selects all elements that are the children of a specified element.

The following example selects all `<p>` elements that are children of a `<div>` element:

```
div > p {
  background-color: yellow;
}
```

## Adjacent Sibling Selector (+)

The adjacent sibling selector is used to select an element that is directly after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects the first <p> element that are placed immediately after <div> elements:

```
div + p {
  background-color: yellow;
}
```

## General Sibling Selector (~)

The general sibling selector selects all elements that are next siblings of a specified element.

The following example selects all `<p>` elements that are next siblings of `<div>` elements:

```
div ~ p {
  background-color: yellow;
}
```

# Attribute Selectors

## CSS [attribute] Selector

The [attribute] selector is used to select elements with a specified attribute.

The following example selects all <a> elements with a target attribute:

```
a[target] {
  background-color: yellow;
}
```

## CSS [attribute="value"] Selector

The [attribute="value"] selector is used to select elements with a specified attribute and value.

The following example selects all <a> elements with a target="\_blank" attribute:

```
a[target="_blank"] {
  background-color: yellow;
}
```

**Research more on attribute selectors**

## Pseudo-class selectors

Select elements based on a certain state
A pseudo-class is used to define a special state of an element.

For example, it can be used to:

- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus

```
selector:pseudo-class {
  property: value;
}
```

## Pseudo-elements selectors

Select and style a part of an element
A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

- Style the first letter, or line, of an element
- Insert content before, or after, the content of an element

```
selector::pseudo-element {
  property: value;
}
```

### The ::first-line Pseudo-element

The ::first-line pseudo-element is used to add a special style to the first line of a text.

The following example formats the first line of the text in all `<p>`` elements:

```
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```

**Note: The ::first-line pseudo-element can only be applied to block-level elements.**

### The ::before Pseudo-element

The ::before pseudo-element can be used to insert some content before the content of an element.

The following example inserts an image before the content of each `<h1>` element:

```
h1::before {
  content: url(smiley.gif);
}
```

### The ::after Pseudo-element

The ::after pseudo-element can be used to insert some content after the content of an element.

The following example inserts an image after the content of each `<h1>` element:

```
h1::after {
  content: url(smiley.gif);
}
```

### The ::marker Pseudo-element

The ::marker pseudo-element selects the markers of list items.

The following example styles the markers of list items:

```
::marker {
  color: red;
  font-size: 23px;
}
```
