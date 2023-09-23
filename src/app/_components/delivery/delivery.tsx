export const DeliveryComponent = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="w-full mx-auto grid md:grid-cols-2 md:gap-5">
        <img
          className="w-[550px] mx-auto my-4 object-contain"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt="Quick delivery image"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on-demand
          </p>
          <p className="mt-1 text-balance">
            Introducing QuickWave, the revolutionary quick delivery app that
            brings limitless convenience right to your fingertips. With our
            cutting-edge technology and unparalleled network of delivery
            partners, we&apos;ve redefined the way you access your essentials,
            all while saving you precious time.
          </p>
          <button className="bg-[#00df9a] text-white w-[200px] rounded-md font-semibold mt-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
