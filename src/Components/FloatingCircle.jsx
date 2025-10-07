export const FloatingCircle = () => {
  return (
    <div className="absolute top-0 right-0 w-[580px] h-[580px] rounded-full p-[1px]
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                    animate-zoom-in-zoom-out
                    z-0
                    max-lg:w-[350px] max-lg:h-[350px]
                    max-xs:w-[320px] max-xs:h-[320px]
                    pointer-events-none">
      <div className="w-full h-full rounded-full bg-gray-900 opacity-50"></div>
    </div>
  );
};
