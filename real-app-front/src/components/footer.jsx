const Footer = () => {
  return (
    <footer className="border-top pt-3 py-2 text-center">
      <span>
        Build Your<i className="bi bi-boxes mx-2"></i>Biz
      </span>
      <span>&copy;</span>
      <span className="mx-2">{new Date().getFullYear()}</span>
    </footer>
  );
};
export default Footer;
