import React from 'react';

const adminOnly = Component =>
  function adminOnlyComponent({ user: { isAdmin }, ...props }) {
    if (isAdmin) {
      return <Component {...props} />;
    }
    return null;
  };

export default adminOnly;