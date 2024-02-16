# CSS Variables

The var() function is used to insert the value of a CSS variable.

CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries.

A good way to use CSS variables is when it comes to the colors of your design. Instead of copy and paste the same colors over and over again, you can place them in variables.

## Syntax of the var() Function

The var() function is used to insert the value of a CSS variable.

The syntax of the var() function is as follows:

`var(--name, value)`

- name - Required. The variable name (must start with two dashes)
- value - Optional. The fallback value (used if the variable is not found)

**Note: The variable name must begin with two dashes (--) and it is case sensitive!**

## How var() Works

First of all: CSS variables can have a global or local scope.

Global variables can be accessed/used through the entire document, while local variables can be used only inside the selector where it is declared.

To create a variable with global scope, declare it inside the :root selector. The :root selector matches the document's root element.

To create a variable with local scope, declare it inside the selector that is going to use it.

Advantages of using var() are:

- makes the code easier to read (more understandable)
- makes it much easier to change the color values

# CSS Math Functions

The CSS math functions allow mathematical expressions to be used as property values. Here, we will explain the calc(), max() and min() functions.

## The calc() Function

The calc() function performs a calculation to be used as the property value.

## The max() Function

The max() function uses the largest value, from a comma-separated list of values, as the property value.

## The min() Function

The min() function uses the smallest value, from a comma-separated list of values, as the property value.

# Project Six

For this week's project, you'll have the exciting opportunity to create your own personal portfolio. Your portfolio is a showcase of your skills, projects, and experiences, and it serves as a professional representation of yourself to potential employers, clients, or collaborators.

Here's a detailed description of the project:

1. **Objective**: The main goal of this project is to design and develop a personal portfolio website that effectively highlights your skills, projects, achievements, and experiences in a visually appealing and professional manner.

2. **Content**: Your portfolio should include sections such as:

   - About Me: A brief introduction about yourself, your background, and your professional journey.
   - Skills: An overview of your technical skills, programming languages, tools, and technologies you're proficient in.
   - Projects: Showcase some of your best projects with descriptions, screenshots, or demos. Highlight your role, contributions, and the technologies used.
   - Experience: List your work experience, internships, freelance projects, or any relevant professional experiences.
   - Education: Mention your academic qualifications, degrees, certifications, and any relevant courses or workshops you've completed.
   - Contact: Provide ways for visitors to reach out to you, such as email, LinkedIn profile, GitHub repository, or a contact form.

3. **Design**: Pay attention to the design and layout of your portfolio to ensure it's visually appealing, easy to navigate, and reflects your personal brand. Consider using a clean and modern design, consistent typography, color scheme, and professional imagery.

4. **Responsiveness**: Make sure your portfolio website is responsive and mobile-friendly, as it should look good and function well across different devices and screen sizes.

5. **Development**: Use HTML and CSS to build your portfolio from scratch.

6. **Deployment**: Once your portfolio is ready, deploy it to a hosting platform like Vercel to make it accessible online. Ensure your domain name is professional and easy to remember.

Overall, this project is an opportunity for you to showcase your skills, creativity, and professionalism as a developer. Take your time, be creative, and have fun building your personal portfolio!
