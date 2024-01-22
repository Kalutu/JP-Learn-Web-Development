# HTML Text Formatting

HTML contains several elements for defining text with a special meaning.

## HTML Formatting Elements

Formatting elements were designed to display special types of text:

- `<b>` - Bold text
- `<strong>` - Important text
- `<i>` - Italic text
- `<em>` - Emphasized text
- `<mark>` - Marked text
- `<small>` - Smaller text
- `<del>` - Deleted text
- `<ins>` - Inserted text
- `<sub>` - Subscript text
- `<sup>` - Superscript text

### HTML `<b>` and `<strong>` Elements

The HTML `<b>` element defines bold text, without any extra importance.

The HTML `<strong>` element defines text with strong importance. The content inside is typically displayed in bold.

### HTML `<i>` and `<em>` Elements

The HTML `<i>` element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.

**Tip: The `<i>` tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.**

The HTML `<em>` element defines emphasized text. The content inside is typically displayed in italic.

**Tip: A screen reader will pronounce the words in `<em>` with an emphasis, using verbal stress.**

### HTML `<small>` Element

The HTML `<small>` element defines smaller text.

### HTML `<mark>` Element

The HTML `<mark>` element defines text that should be marked or highlighted:

### HTML `<del>` Element

The HTML `<del>` element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.

### HTML `<ins>` Element

The HTML `<ins>` element defines a text that has been inserted into a document. Browsers will usually underline inserted text:

### HTML `<sub>` Element

The HTML `<sub>` element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O.

### HTML `<sup>` Element

The HTML `<sup>` element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1].

### HTML `<kbd>` For Keyboard Input

The HTML `<kbd>` element is used to define keyboard input. The content inside is displayed in the browser's default monospace font

### HTML `<code>` For Computer Code

The HTML `<code>` element is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.

Notice that the `<code>` element does not preserve extra whitespace and line-breaks.

To fix this, you can put the `<code>` element inside a `<pre>` element.
