import React from 'react';

const ProductCard = ({ label = "Product Name", description = "View details to order this item.", onClick, probat }) => {
  const styles = {
    container: {
      border: '1px solid #333',
      borderRadius: '8px',
      padding: '24px',
      backgroundColor: '#242424',
      color: '#FFFFFF',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '320px'
    },
    title: {
      color: '#FFFFFF',
      marginTop: '0',
      marginBottom: '12px',
      fontSize: '1.25rem'
    },
    text: {
      marginBottom: '20px',
      lineHeight: '1.5',
      color: '#E0E0E0'
    },
    button: {
      backgroundColor: '#646CFF',
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
        View Product
      </button>
    </div>
  );
};

export default ProductCard;