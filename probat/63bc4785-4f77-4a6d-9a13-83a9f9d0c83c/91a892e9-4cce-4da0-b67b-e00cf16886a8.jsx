import React from 'react';

const ProductCard = ({ label = "Product Name", description = "View details to order this item.", onClick, probat }) => {
  const styles = {
    container: {
      border: '2px solid #764BA2',
      borderRadius: '8px',
      padding: '24px',
      backgroundColor: '#FFFFFF',
      color: '#242424',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '320px',
      boxShadow: '0 4px 6px rgba(118, 75, 162, 0.1)'
    },
    title: {
      color: '#764BA2',
      marginTop: '0',
      marginBottom: '12px',
      fontSize: '1.25rem'
    },
    text: {
      marginBottom: '20px',
      lineHeight: '1.5'
    },
    button: {
      backgroundColor: '#764BA2',
      color: '#FFFFFF',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      width: '100%'
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (probat && probat.trackClick) {
      probat.trackClick();
    }
    if (onClick) onClick();
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{label}</h3>
      <p style={styles.text}>{description}</p>
      <button 
        style={styles.button} 
        onClick={handleClick}
        data-probat-conversion="true"
      >
        Order Now
      </button>
    </div>
  );
};

export default ProductCard;