import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{' '}
          <a href="https://github.com/fabziul" target="_blank" rel="noreferrer">
            Fabiano Luiz
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{' '}
            <a
              href="https://instagram.com/devsuperior.ig"
              target="_blank"
              rel="noreferrer"
            >
              @devsuperior.ig
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
