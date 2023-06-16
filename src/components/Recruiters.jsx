import images from "../assets/images/Recruiters";

export default function Recruiters() {
  return (
    <div className="bg-white py-8 mb-20">
      <h2 className="text-center text-lg font-semibold leading-8 heading">
        Our Recruiters
      </h2>
      <div className="relative w-90% mx-auto flex overflow-x-hidden">
        <div
          className=" flex space-x-4 animate-marquee"
          style={{ width: `${132 * images.length}px` }}
        >
          {images.map((curr, index) => (
            <div
              key={index}
              className=" w-132px h-132px object-contain flex justify-center items-center p-4"
            >
              <img src={curr} alt={`image ${index}`} />
            </div>
          ))}
        </div>
        <div
          className=" flex space-x-4 animate-marquee"
          style={{ width: `${132 * images.length}px` }}
        >
          {images.map((curr, index) => (
            <div
              key={index}
              className=" w-132px h-132px object-contain flex justify-center items-center p-4"
            >
              <img src={curr} alt={`image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
