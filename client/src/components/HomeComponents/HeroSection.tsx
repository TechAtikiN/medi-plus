import Image from 'next/image';
import heroImage from '../../assets/heroImg.png';

const HeroSection = () => {
  return (
    <div className="m-10  rounded-xl flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-600 to-purple-800 py-16 px-4 md:px-8 lg:px-16">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Live a healthy life with MediPlus
        </h1>
        <p className="text-lg md:text-xl text-white mb-10">
          MediPlus is a platform that helps you to find the best doctors and
          hospitals in your area. It also helps you to predict your disease and
          find the best treatment for it.
        </p>
        <button className="bg-white hover:bg-gray-200 text-purple-800 font-bold px-12 py-3 rounded-md">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 mt-10 sm:ml-16 md:mt-0">
        <Image
          src={heroImage}
          alt="Hero image"
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;