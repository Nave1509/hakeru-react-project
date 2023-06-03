const Footer = () => {
  return (
    <footer className="border-top pt-3 py-2 text-center">
      <span>
        Real<i className="bi bi-boxes mx-2"></i>App
      </span>
      <span>&copy;</span>
      <span className="mx-2">{new Date().getFullYear()}</span>
    </footer>
  );
};
export default Footer;
