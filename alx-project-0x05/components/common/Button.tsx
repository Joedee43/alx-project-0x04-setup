import React from 'react';

type ButtonProps = {
  buttonLabel?: string;
  buttonBackgroundColor?: string;
}

export default function Button({
  buttonLabel = 'Click Me', 
  buttonBackgroundColor
}: ButtonProps) {

  // Create a style object to apply the background color
  const buttonStyle = {
    backgroundColor: buttonBackgroundColor,
    // Add other desirable styles for a better-looking button
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div>
      <button style={buttonStyle}>
        {buttonLabel}
      </button>
    </div>
  );
}