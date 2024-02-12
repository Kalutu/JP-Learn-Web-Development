# CSS Flexbox

Flexbox, or the Flexible Box Layout, is a layout model in CSS that allows you to design complex layouts more efficiently and with less code.

It is particularly useful for distributing space and aligning items within a container, even when the size of the items is unknown or dynamic.

Flexbox involves a flex container and flex items.

The container is set using `display: flex;` or `display: inline-flex;` if you want the container to behave like an inline element.
All direct children of a flex container become flex items.

## Container Properties

### Flex Direction:

Determines the main axis of the flex container.

Possible values: row, row-reverse, column, column-reverse.

```
.container {
    flex-direction: row; /* Default value */
}
```

### Flex Wrap:

Defines whether the flex items should wrap onto multiple lines.
Values: nowrap (default), wrap, wrap-reverse.

### Flex Flow:

A shorthand property for flex-direction and flex-wrap.

### Justify Content:

Aligns flex items along the main axis of the flex container.
Values: flex-start, flex-end, center, space-between, space-around, space-evenly.

### Align Items:

Aligns flex items along the cross axis of the flex container.
Values: stretch, flex-start, flex-end, center, baseline.

### Align Content:

Aligns flex lines (when there is more than one line) along the cross axis of the flex container.
Values: flex-start, flex-end, center, space-between, space-around, stretch.

## Child Elements (Items) properties

The direct child elements of a flex container automatically becomes flexible (flex) items.

### The order Property

The order property specifies the order of the flex items.

### The flex-grow Property

The flex-grow property specifies how much a flex item will grow relative to the rest of the flex items.

### The flex-shrink Property

The flex-shrink property specifies how much a flex item will shrink relative to the rest of the flex items.

### The flex-basis Property

The flex-basis property specifies the initial length of a flex item.

### The flex Property

The flex property is a shorthand property for the flex-grow, flex-shrink, and flex-basis properties.

### The align-self Property

The align-self property specifies the alignment for the selected item inside the flexible container.

The align-self property overrides the default alignment set by the container's align-items property.
