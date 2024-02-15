# CSS Icons

Icons can easily be added to your HTML page, by using an icon library.

The simplest way to add an icon to your HTML page, is with an icon library, such as Font Awesome.

Add the name of the specified icon class to any inline HTML element (like '<i>' or '<span>').

All the icons in the icon libraries below, are scalable vectors that can be customized with CSS (size, color, shadow, etc.)

- Font Awesome Icons
- Bootstrap Icons
- Google Icons

# CSS Units

CSS has several different units for expressing a length.

Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.

Length is a number followed by a length unit, such as 10px, 2em, etc.

**Note: A whitespace cannot appear between the number and the unit. However, if the value is 0, the unit can be omitted.**

For some CSS properties, negative lengths are allowed.

There are two types of length units: absolute and relative.

## Absolute Lengths

The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.

Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.

**Unit** - **Description**

cm - centimeters

mm - millimeters

in - inches (1in = 96px = 2.54cm)

px - pixels (1px = 1/96th of 1in)

pt - points (1pt = 1/72 of 1in)

pc - picas (1pc = 12 pt)

**Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.**

## Relative Lengths

Relative length units specify a length relative to another length property. Relative length units scale better between different rendering mediums.

**Unit** - **Description**

em - Relative to the font-size of the element (2em means 2 times the size of the current font)

ex - Relative to the x-height of the current font (rarely used)

ch - Relative to width of the "0" (zero)

rem - Relative to font-size of the root element

vw - Relative to 1% of the width of the viewport

vh - Relative to 1% of the height of the viewport

vmin - Relative to 1% of viewport's smaller dimension

vmax - Relative to 1% of viewport's larger dimension

% - Relative to the parent element

**Tip: The em and rem units are practical in creating perfectly scalable layout!**
**Viewport is the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.**
