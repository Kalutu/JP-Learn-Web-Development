# CSS Selectors

A CSS selector selects the HTML element(s) you want to style.

We can divide CSS selectors into five categories:

- **Simple selectors** - select elements based on name, id, class.
- **Combinator selectors**- select elements based on a specific relationship between them.
- **Attribute selectors** - select elements based on an attribute or attribute value.
- **Pseudo-class selectors** - select elements based on a certain state.
- **Pseudo-elements selectors** - select and style a part of an element.

## Simple Selectors

### Element Selector

The element selector selects HTML elements based on the element name.

```
p {
  text-align: center;
  color: red;
}
```

### id Selector

The id selector uses the id attribute of an HTML element to select a specific element.

The id of an element is unique within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (#) character, followed by the id of the element.

```
#para1 {
  text-align: center;
  color: red;
}
```

**_Note: An id name cannot start with a number!_**

### Class Selector

The class selector selects HTML elements with a specific class attribute.

To select elements with a specific class, write a period (.) character, followed by the class name.

```
.center {
  text-align: center;
  color: red;
}
```

**_Note: A class name cannot start with a number!_**

You can also specify that only specific HTML elements should be affected by a class.

Example

```
p.center {
  text-align: center;
  color: red;
}
```

In this example only <p> elements with class="center" will be red and center-aligned

### Universal Selector

The universal selector (\*) selects all HTML elements on the page.

```
* {
  text-align: center;
  color: blue;
}
```

### Grouping Selector

The grouping selector selects all the HTML elements with the same style definitions.

To group selectors, separate each selector with a comma.

```
h1, h2, p {
  text-align: center;
  color: red;
}
```
