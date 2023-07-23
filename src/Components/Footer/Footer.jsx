import logo from '/123.png'

const Footer = () => {
  return (
    <footer className="footer p-10 fixed w-full bg-gradient-to-r from-blue-900 from-10% via-sky-900 via-30% to-sky-800 to-90% z-10 shadow-sm text-white bottom-0">
  <div>
  <img className='h-24 w-24' src={logo} alt="" />
    <p><span className='text-red-600 font-bold'>College</span><span className='font-bold text-yellow-300'>Hub</span><br/>Providing best booking colleges </p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Admission</a> 
    <a className="link link-hover">Colleges</a> 
    <a className="link link-hover">Booking</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Facebook</a> 
    <a className="link link-hover">Colleges</a> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  );
};

export default Footer;
