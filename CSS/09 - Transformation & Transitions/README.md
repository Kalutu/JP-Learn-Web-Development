# CSS Transforms

## CSS 2D Transforms

CSS transforms allow you to move, rotate, scale, and skew elements.

With the CSS `transform` property you can use the following 2D transformation methods:

- translate() - moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).

- rotate() - rotates an element clockwise or counter-clockwise according to a given degree. Using negative values will rotate the element counter-clockwise.

- scale() - increases or decreases the size of an element (according to the parameters given for the width and height).

- scaleX() - increases or decreases the width of an element.

- scaleY() - increases or decreases the height of an element.

- skewX() - skews an element along the X-axis by the given angle.

- skewY() - skews an element along the Y-axis by the given angle.

- skew() - skews an element along the X and Y-axis by the given angles.

- matrix() - method combines all the 2D transform methods into one. It takes six parameters, containing mathematic functions, which allows you to rotate, scale, move (translate), and skew elements. The parameters are as follow: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())

## CSS 3D Transforms

With the CSS transform property you can use the following 3D transformation methods:

- rotateX() - rotates an element around its X-axis at a given degree.
- rotateY() - rotates an element around its Y-axis at a given degree.
- rotateZ() - rotates an element around its Z-axis at a given degree.

# CSS Transitions

CSS transitions allows you to change property values smoothly, over a given duration.

To create a transition effect, you must specify two things:

- the CSS property you want to add an effect to
- the duration of the effect

  **Note: If the duration part is not specified, the transition will have no effect, because the default value is 0.**

## Specify the Speed Curve of the Transition

The `transition-timing-function` property specifies the speed curve of the transition effect.

The transition-timing-function property can have the following values:

- ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
- linear - specifies a transition effect with the same speed from start to end
- ease-in - specifies a transition effect with a slow start
- ease-out - specifies a transition effect with a slow end
- ease-in-out - specifies a transition effect with a slow start and end
- cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

## Delay the Transition Effect

The `transition-delay` property specifies a delay (in seconds) for the transition effect.

## transition-duration

Specifies how many seconds or milliseconds a transition effect takes to complete

## transition-property

Specifies the name of the CSS property the transition effect is for
