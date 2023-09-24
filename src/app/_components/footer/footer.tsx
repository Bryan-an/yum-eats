import BrandFacebookIcon from '@/icons/brand-facebook';
import BrandGithubIcon from '@/icons/brand-github';
import BrandInstagramIcon from '@/icons/brand-instagram';
import BrandTwitterIcon from '@/icons/brand-twitter';

export const FooterComponent = () => {
  return (
    <footer className="max-w-[1520px] px-4 py-2 bg-[#24262b] flex justify-center">
      <div className="py-2 px-4 grid lg:grid-cols-2 gap-8 lg:gap-16 text-gray-300">
        <div>
          <h3 className="w-full text-3xl font-bold text-orange-500">YumEats</h3>
          <p className="text-balance mt-4">
            At YumEats, we&apos;re not just a fast-food joint; we&apos;re a
            destination for food lovers seeking a quick, flavorful, and
            satisfying meal. What sets us apart is our commitment to quality
            ingredients, prompt service, and a menu that caters to all tastes.
          </p>
          <div className="flex gap-7 md:w-[75%] mt-6">
            <BrandFacebookIcon />
            <BrandInstagramIcon />
            <BrandTwitterIcon />
            <BrandGithubIcon />
          </div>
        </div>
        <div className="flex gap-16">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">India</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
