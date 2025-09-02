export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="text-center space-y-8 px-4">
        {/* Main Hello World Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="space-y-3">
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Welcome to your modern web application
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Built with Next.js, Tailwind CSS, and modern web technologies. 
            This is where your digital journey begins.
          </p>
        </div>

        {/* Interactive Elements */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-full hover:from-red-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
          
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Footer Text */}
        <div className="mt-16">
          <p className="text-sm text-gray-400">
            Powered by Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  );
}