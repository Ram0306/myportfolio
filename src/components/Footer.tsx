import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white-300 text-teal-900 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-teal-700 text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Based in India, I&apos;m a Fullstack developer passionate about building a modern web application that users love.
          </p>
        </div>

        <div>
          <h2 className="text-teal-700 text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/yogit.mamania.1" className="hover:text-sky-300 transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/im_ramofficial" className=" hover:text-sky-500 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/___iamram/?next=%2F" className=" hover:text-rose-500 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ram-9804931b1/" className="hover:text-sky-700 transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-teal-700 text-lg font-semibold mb-4 ">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: ramkumarmamania.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">©2024 Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
