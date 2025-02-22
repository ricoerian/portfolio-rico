const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-[url(/assets/developer.jpg)] text-white text-center p-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6">Showcasing my work and experience in web development</p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
