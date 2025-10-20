const date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <footer className="foot">Copyright © {year}</footer>
    </div>
  );
}
export default Footer;
