# CSS Colors

Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

## CSS Color Names

In CSS, a color can be specified by using a predefined color name:
red, white , tomato

## CSS Text Color

The color property specifies the color of an element.

## CSS Color Values

In CSS, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values.

### CSS RGB Colors

An RGB color value represents RED, GREEN, and BLUE light sources.

In CSS, a color can be specified as an RGB value, using this formula: `rgb(red, green, blue)`

Each parameter (red, green, and blue) defines the intensity of the color between 0 and 255.

For example, rgb(255, 0, 0) is displayed as red, because red is set to its highest value (255) and the others are set to 0.

To display black, set all color parameters to 0, like this: rgb(0, 0, 0).

To display white, set all color parameters to 255, like this: rgb(255, 255, 255).

#### RGBA Value

RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color.

An RGBA color value is specified with: `rgba(red, green, blue, alpha)`

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):

### CSS HEX Colors

A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.

In CSS, a color can be specified using a hexadecimal value in the form: `#rrggbb`

Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).

For example, #ff0000 is displayed as red, because red is set to its highest value (ff) and the others are set to the lowest value (00).

To display black, set all values to 00, like this: #000000.

To display white, set all values to ff, like this: #ffffff.

### 3 Digit HEX Value

Sometimes you will see a 3-digit hex code in the CSS source.

The 3-digit hex code is a shorthand for some 6-digit hex codes.

The 3-digit hex code has the following form: `#rgb`

Where r, g, and b represent the red, green, and blue components with values between 0 and f.

The 3-digit hex code can only be used when both the values (RR, GG, and BB) are the same for each component. So, if we have #ff00cc, it can be written like this: #f0c.

### CSS HSL Colors

HSL stands for hue, saturation, and lightness.

In CSS, a color can be specified using hue, saturation, and lightness (HSL) in the form: `hsl(hue, saturation, lightness)`

Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.

Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color.

Lightness is also a percentage. 0% is black, 50% is neither light or dark, 100% is white

### HSLA Value

HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity for a color.

An HSLA color value is specified with: `hsla(hue, saturation, lightness, alpha)`

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all).

# CSS Gradients

CSS gradients let you display smooth transitions between two or more specified colors.

CSS defines three types of gradients:

- Linear Gradients - goes down/up/left/right/diagonally

- Radial Gradients - defined by their center

- Conic Gradients - rotated around a center point

## CSS Linear Gradients

To create a linear gradient you must define at least two color stops.

Color stops are the colors you want to render smooth transitions among. You can also set a starting point and a direction (or an angle) along with the gradient effect.

#### Syntax

```
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

### Repeating a linear-gradient

The repeating-linear-gradient() function is used to repeat linear gradients

```
#grad {
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
}
```

## CSS Radial Gradients

A radial gradient is defined by its center.

To create a radial gradient you must also define at least two color stops.

#### Syntax

```
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```

By default, shape is ellipse, size is farthest-corner, and position is center.

## Conic Gradients

A conic gradient is a gradient with color transitions rotated around a center point.

To create a conic gradient you must define at least two colors.

#### Syntax

```
background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);
```

By default, angle is 0deg and position is center.

If no degree is specified, the colors will be spread equally around the center point.
