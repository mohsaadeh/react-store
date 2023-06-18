import React from 'react';

const Footer = () => {
  const aboutUsContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sagittis semper.';

  const contactInfo = {
    phoneNumber: '+1234567890',
    email: 'info@example.com',
  };

  const socialLinks = [
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/example',
    },
    {
      platform: 'Twitter',
      url: 'https://www.twitter.com/example',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/example',
    },
  ];

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer style={{ backgroundColor: '#f8f8f8', padding: '20px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4>About Us</h4>
            <p>{aboutUsContent}</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>{contactInfo.phoneNumber}</p>
            <p>{contactInfo.email}</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div style={{ display: 'flex' }}>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} style={{ marginRight: '10px' }}>
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>&copy; {getCurrentYear()} Fashion Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
