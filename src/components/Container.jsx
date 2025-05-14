import React from 'react';

/**
 * Container component ensures all content is centered, with a maximum width and responsive padding.
 * Use this to wrap page or section content for a clean, professional layout.
 *
 * Example:
 *   <Container>
 *     <h1>Title</h1>
 *     <p>Content...</p>
 *   </Container>
 */
const Container = ({ children }) => (
  <div className="max-w-screen-xl mx-auto px-8 sm:px-10 lg:px-16">
    {children}
  </div>
);

export default Container;
