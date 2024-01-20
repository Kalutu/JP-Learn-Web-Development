# Lists

HTML lists allow web developers to group a set of related items in lists.

#### An unordered HTML list:

An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.
The list items will be marked with bullets (small black circles) by default

```
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

#### An ordered HTML list:

An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.
The list items will be marked with numbers by default

```
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

#### Description Lists

HTML also supports description lists.
A description list is a list of terms, with a description of each term.
The `<dl>` tag defines the description list, the `<dt>` tag defines the term (name), and the <dd> tag describes each term

```
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

## HTML Structure

- All HTML documents must start with a document type declaration: `<!DOCTYPE html>`
- The HTML document itself begins with `<html>` and ends with `</html>`
- The visible part of the HTML document is between `<body>` and `</body>.`

### The <!DOCTYPE> Declaration

The `<!DOCTYPE>` declaration represents the document type, and helps browsers to display web pages correctly.
It must only appear once, at the top of the page (before any HTML tags).
The `<!DOCTYPE>` declaration is not case sensitive.
The `<!DOCTYPE>` declaration for HTML5 is:

```
<!DOCTYPE html>
```

### Project Structure

```
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

  </body>
</html>
```

### Title

```html
<head>
  <title>My Website Title</title>
</head>
```

### Character Set

```html
<head>
  <meta charset="UTF-8" />
</head>
```

### Viewport Meta Tag (for Responsive Design)

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

### Favicon

```html
<head>
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
</head>
```

### Inline Styles

```html
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```

### Header tag

Represents the header of a section or page in HTML5.
Typically used to include introductory content, such as headings, logos, navigation menus, or other elements at the top of a document or section.
Should be used within the <body> of an HTML document.
Can contain various elements, including headings, navigation elements, logos, and other relevant content.

```
<header>
    <h1>Website Title</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
```

### Footer tag

Represents the footer of a section or page in HTML5.
Typically used to include information like copyright notices, links to privacy policies, and other content at the bottom of a document or section.
Should be used within the <body> of an HTML document.
Can contain various elements, such as paragraphs, links, copyright information, or any relevant content.

```
<footer>
    <p>&copy; 2023 Your Website. All rights reserved.</p>
    <p><a href="/privacy-policy">Privacy Policy</a></p>
</footer>
```
