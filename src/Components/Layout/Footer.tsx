const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Rico Eriansyah</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
