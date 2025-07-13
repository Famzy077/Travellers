const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="relative flex items-center justify-center w-48 h-48">
        {/* The spinning circle border */}
        <div className="absolute w-full h-full rounded-full border-4 border-gray-200 border-t-4 border-t-[#E02454] animate-spin"></div>

        {/* The gradient text in the center */}
        <h1 className="text-2xl font-bold px-1 bg-gradient-to-r from-[#E02454] to-[#003865] text-transparent bg-clip-text">
          Smoothflight
        </h1>
      </div>
    </div>
  );
};

export default Preloader;