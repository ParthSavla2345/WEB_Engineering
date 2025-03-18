// src/components/CSSExample.js
import React from 'react';
import './CSSExample.css'; // External CSS file

function CSSExample() {
  return (
    <div className="css-example-container">
      <h2 className="main-heading">How to Use External CSS in React</h2>
      <p className="intro-text">
        React allows you to import CSS files into your components to style them. This helps in maintaining styles across the application
        while keeping the components modular and organized.
      </p>

      <section className="content-section">
        <h3 className="section-heading">What is External CSS?</h3>
        <p className="content-text">
          External CSS refers to a separate CSS file that contains the styles used in your components. It helps in separating the styles
          from the structure, making the code cleaner and more maintainable. You can link your CSS file to a React component by
          importing it into the component.
        </p>
      </section>

      <section className="content-section">
        <h3 className="section-heading">Example of External CSS Usage in React</h3>
        <p className="content-text">
          In the following example, we will show how to import and use an external CSS file in a React component:
        </p>
      </section>

      <section className="content-section">
        <h3 className="section-heading">Why Use External CSS?</h3>
        <p className="content-text">
          Using external CSS offers several benefits, such as:
          <ul>
            <li>Separation of concerns: Keeps styles separate from logic.</li>
            <li>Reusability: You can use the same styles in multiple components.</li>
            <li>Better maintainability: Easier to update and modify styles in one place.</li>
          </ul>
        </p>
      </section>

      <section className="content-section">
        <h3 className="section-heading">React and CSS Best Practices</h3>
        <p className="content-text">
          Here are some best practices when using CSS in React:
          <ul>
            <li>Use CSS Modules for component-level scoping.</li>
            <li>Use meaningful class names for better readability.</li>
            <li>Keep styles organized, and consider separating CSS for different sections of your app.</li>
          </ul>
        </p>
      </section>

      <footer className="footer">
        <p>Learn more about React at <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">reactjs.org</a></p>
      </footer>
    </div>
  );
}

export default CSSExample;
