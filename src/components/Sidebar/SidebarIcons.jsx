import React from 'react';

const SidebarIcons = () => (
  <div className="d-flex justify-content-center">
    <a
      href="https://twitter.com/home"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <box-icon className="icon" type="logo" name="twitter" />
    </a>
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <box-icon type="logo" name="facebook" />
    </a>
    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Google">
      <box-icon type="logo" name="google" />
    </a>
    <a href="https://vimeo.com/" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
      <box-icon type="logo" name="vimeo" />
    </a>
    <a
      href="https://pinterest.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pinterest"
    >
      <box-icon type="logo" name="pinterest-alt" />
    </a>
  </div>
);

export default SidebarIcons;
