import React from 'react';
import './AuthForm.css'; 
function AuthForm({ children, title, onSubmit }) {
  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}

export default AuthForm;
