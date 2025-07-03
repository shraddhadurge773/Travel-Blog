import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.paragraph}>
        Hi there! I'm Shraddha, and I'm so glad you're here.
      </p>
      <p style={styles.paragraph}>
        Travel has always been more than just a hobby for me—it's a way of life.
        Every destination I’ve visited has left a mark on my heart, and through this website,
        I want to help you feel that same magic. Whether it’s watching the sunrise in Bali,
        exploring the hidden streets of Rome, or sipping chai in a quiet Himalayan village,
        I believe every place has a story worth experiencing.
      </p>
      <p style={styles.paragraph}>
        I started this travel blog to share my personal journeys, tips, and real experiences—
        not just the glossy side of travel, but the honest moments that make it truly special.
        You'll find destination guides, travel inspiration, cultural insights, and hopefully,
        the push you need to take that next trip you’ve been dreaming about.
      </p>
      <p style={styles.paragraph}>
        This isn’t just a website—it’s a small piece of my journey, and I hope it becomes part of yours too.
      </p>
      <p style={styles.signature}>
        With love,<br />
        <strong>Shraddha</strong>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '40px 30px',
    backgroundColor: '#fdfdfd',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    fontFamily: `'Segoe UI', 'Georgia', serif`,
    color: '#333',
    lineHeight: '1.8'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '30px',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '20px'
  },
  signature: {
    marginTop: '40px',
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#444',
    textAlign: 'right'
  }
};

export default About;
