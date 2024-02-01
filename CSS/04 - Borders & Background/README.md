# CSS Borders

The CSS border properties allow you to specify the style, width, and color of an element's border.

### CSS Border Style

The border-style property specifies what kind of border to display.

The following are some values that are allowed:

- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- none - Defines no border

**The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).**

```
border-style: dotted dashed solid double;
```

### CSS Border Width

The border-width property specifies the width of the four borders.

The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:

The border-width property can have from one to four values (for the top border, right border, bottom border, and the left border):

### Border Color

The border-color property is used to set the color of the four borders.

**Note: If border-color is not set, it inherits the color of the element.**

The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border).

### Border - Shorthand Property

The border property is a shorthand property for the following individual border properties:

- border-width
- border-style (required)
- border-color

```
p {
  border: 5px solid red;
}
```

You can also specify all the individual border properties for just one side using border-top, border-right, border-bottom and border-left properties

## Rounded Borders

The border-radius property is used to add rounded borders to an element.

# CSS Backgrounds

The CSS background properties are used to add background effects for elements.

## Opacity

The opacity property specifies the opacity/transparency of an element.

It can take a value from 0.0 - 1.0. The lower value, the more transparent.

**Note: When using the opacity property to add transparency to the background of an element, all of its child elements inherit the same transparency. This can make the text inside a fully transparent element hard to read.**

## CSS background-image

The background-image property specifies an image to use as the background of an element.

By default, the image is repeated so it covers the entire element.

```
body {
  background-image: url("paper.gif");
}
```

**Note: When using a background image, use an image that does not disturb the text.**

## CSS background-repeat

By default, the background-image property repeats an image both horizontally and vertically.

Some images should be repeated only horizontally or vertically, or they will look strange.

If the image above is repeated only horizontally (`background-repeat: repeat-x;`), the background will look better.

To repeat an image vertically, set `background-repeat: repeat-y;`

Showing the background image only once is also specified by the background-repeat property: ` background-repeat: no-repeat;`

## CSS background-position

The background-position property is used to specify the position of the background image.

## CSS background-attachment

The background-attachment property specifies whether the background image should scroll `background-attachment: scroll;` or be fixed (will not scroll with the rest of the page):` background-attachment: fixed;`

## CSS Background Shorthand

To shorten the code, it is also possible to specify all the background properties in one single property. This is called a shorthand property.

When using the shorthand property the order of the property values is:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position

  It does not matter if one of the property values is missing, as long as the other ones are in this order.
