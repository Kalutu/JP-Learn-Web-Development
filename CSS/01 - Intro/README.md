# Intro

- CSS stands for Cascading Style Sheets

- CSS is the language we use to style an HTML document.

- CSS is used to define styles for your web pages.

## Ways to Insert CSS

There are three ways of inserting a style sheet:

- **Inline CSS** - An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

- **Internal CSS** - An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the `<style>` element, inside the head section.

- **External CSS** - With an external style sheet, you can change the look of an entire website by changing just one file! Each HTML page must include a reference to the external style sheet file inside the `<link>` element, inside the head section. An external style sheet can be written in any text editor, and must be saved with a .css extension.

**Note:** _The external .css file should not contain any HTML tags._

## CSS Syntax

```
selector {
    property : value; //declaration 1
    property : value; //declaration 2
}
```

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

### Example

```
p {
  color: red;
  text-align: center;
}
```

- p is a selector in CSS (it points to the HTML element you want to style: `<p>`).
- color is a property, and red is the property value
- text-align is a property, and center is the property value

## Cascading Order

What style will be used when there is more than one style specified for an HTML element?

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

**_So, an inline style has the highest priority, and will override external and internal styles and browser defaults._**

## CSS Comments

CSS comments are not displayed in the browser, but they can help document your source code.

### Syntax

**/\* This is a single-line comment \*/**

/\* This is

a multi-line

comment \*/
