# CSS Media Queries

The @media rule, introduced in CSS2, made it possible to define different style rules for different media types.

Media queries in CSS3 extended the CSS2 media types idea: Instead of looking for a type of device, they look at the capability of the device.

Media queries can be used to check many things, such as:

- width and height of the viewport
- orientation of the viewport (landscape or portrait)
- resolution

  Using media queries are a popular technique for delivering a tailored style sheet to desktops, laptops, tablets, and mobile phones (such as iPhone and Android phones).

## CSS Media Types

- all - Used for all media type devices
- print - Used for print preview mode
- screen - Used for computer screens, tablets, smart-phones etc.

## Media Query Syntax

A media query consists of a media type and can contain one or more media features, which resolve to either true or false.

```
@media not|only mediatype and (media feature) and (media feature) {
  CSS-Code;
}
```

The mediatype is optional (if omitted, it will be set to all). However, if you use not or only, you must also specify a mediatype.

The result of the query is true if the specified media type matches the type of device the document is being displayed on and all media features in the media query are true. When a media query is true, the corresponding style sheet or style rules are applied, following the normal cascading rules.

Meaning of the not, only, and and keywords:

- not : This keyword inverts the meaning of an entire media query.

- only : This keyword prevents older browsers that do not support media queries from applying the specified styles. It has no effect on modern browsers.

- and : This keyword combines a media type and one or more media features.

# width and max-width

As mentioned earlier, a block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Setting the width of a block-level element will prevent it from stretching out to the edges of its container. A problem occurs when the browser window is smaller than the width of the element. The browser then adds a horizontal scrollbar to the page.

Using max-width instead, in this situation, will improve the browser's handling of small windows. This is important when making a site usable on small devices

# Project Four

Your task is to utilize your HTML and CSS skills to create a visually captivating website that effectively promotes a product or company. Your website should highlight the product's or company's key features, benefits, and unique selling points in an engaging and informative manner.

Consider incorporating the following elements:

1. **Compelling Visuals:** Use high-quality images, graphics, and videos to capture the viewer's attention and convey the essence of the product or company.

2. **Clear Messaging:** Craft concise and persuasive copy that clearly communicates the value proposition and encourages visitors to take action, such as making a purchase or contacting the company.

3. **User-Friendly Design:** Ensure ease of navigation and accessibility by incorporating intuitive user interface elements and responsive design principles. Aim for a seamless and immersive user experience across different devices and screen sizes.

4. **Brand Identity:** Reflect the brand's personality and values through consistent use of colors, fonts, and imagery. Create a cohesive visual identity that reinforces brand recognition and resonates with the target audience.

Your website should not only be visually appealing but also functional and user-friendly. Pay close attention to details such as page layout, typography, and image placement to create a polished and professional look.

Feel free to unleash your creativity and experiment with different design elements to make your website stand out. Once completed, upload your project to GitHub and deploy it to a live URL for presentation to the class, highlighting its key features and design choices.

For inspiration, you can explore websites like https://janjaprogrammers.com/ or any other websites online.

Good luck, and enjoy the process of creating your masterpiece!
