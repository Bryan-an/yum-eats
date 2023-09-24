export const NewsLetterComponent = () => {
  return (
    <div className="max-w-[1520px] m-auto text-white px-6 py-6 bg-[#24262b]">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2>Need advice on how to improve your flow?</h2>
          <p>Sign Up to join our newsletter and stay up to date.</p>
        </div>
        <div className="mt-3 lg:mt-0">
          <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-4">
            <input
              type="email"
              placeholder="user@email.com"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-[#00df9a] text-white rounded-md font-semibold w-[200px] py-3 px-6 border-none">
              Notify me
            </button>
          </div>
          <p className="mt-3">
            We are concerned about the security of your data, read{' '}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};
