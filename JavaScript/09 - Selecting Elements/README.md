# Select and Manipulate elements

The Document Object Model (DOM) allows you to interact with HTML elements dynamically using JavaScript. Let's explore how to select and manipulate elements in the DOM:

## Selecting Elements

1. **getElementById**:

   - Selects an element based on its unique `id` attribute.
   - Example:

   ```js
   let headerText = document.getElementById("headerText");
   console.log(headerText);
   ```

2. **getElementsByClassName**:

   - Selects elements based on their shared `class` attribute.
   - Example:

   ```js
   let myNavElements = document.getElementsByClassName("myNav");
   console.log(myNavElements);
   ```

3. **getElementsByTagName**:

   - Selects elements based on their HTML tag name.
   - Example:

   ```js
   let listItems = document.getElementsByTagName("li");
   console.log(listItems);
   ```

## Creating New Elements

1. **createElement**:

   - Creates a new HTML element.
   - Example:

   ```js
   let contactDiv = document.createElement("div");
   contactDiv.innerHTML = "My new div";
   ```

## Replacing Elements

1. **replaceChild**:

   - Replaces an existing element with a new one.
   - Example:

   ```js
   let imgElement = document.createElement("img");
   imgElement.src = "image.png";
   imgElement.style.width = "100%";
   main.replaceChild(imgElement, contactDiv);
   ```

## Adding More Elements

### 1. `appendChild()`

The `appendChild()` method adds a child node (element) to the end of a parent node. It's commonly used to append elements to the end of an existing container:

```javascript
const parentElement = document.getElementById("myContainer");
const newElement = document.createElement("div");
newElement.textContent = "New element added!";
parentElement.appendChild(newElement);
```

In this example, the new `<div>` element is appended to the end of the container with the ID "myContainer".

### 2. `insertBefore()`

The `insertBefore()` method allows you to insert a new element before an existing sibling element. You specify both the new element and the reference element (the one before which the new element should be inserted):

```javascript
const referenceElement = document.getElementById("existingElement");
const newElement = document.createElement("p");
newElement.textContent = "Inserted before the existing element!";
referenceElement.parentNode.insertBefore(newElement, referenceElement);
```

Here, the new `<p>` element is inserted before the existing element with the ID "existingElement".

### 3. `insertAdjacentHTML()`

The `insertAdjacentHTML()` method lets you insert HTML content at different positions relative to an existing element. You specify the position ("beforebegin", "afterbegin", "beforeend", or "afterend") and the HTML content:

```javascript
const targetElement = document.getElementById("target");
targetElement.insertAdjacentHTML("beforeend", "<p>Inserted at the end!</p>");
```

In this case, the new `<p>` element is inserted at the end of the target element.
