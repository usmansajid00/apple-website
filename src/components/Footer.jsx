import { footerLinks } from "../constants";

const Footer = () => {
  const latestYear = new Date().getFullYear();
  return (
    <footer className=" py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className=" font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className=" underline text-blue cursor-pointer">
              find an apple store{" "}
            </span>
            or{" "}
            <span className=" underline text-blue cursor-pointer">
              other retailer{" "}
            </span>
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            or call 00080-0141-2324
          </p>
        </div>
        <div className=" bg-neutral-700 my-5 h-[1px] w-full">
          <div className=" flex md:flex-row flex-col md:items-center justify-between">
            <p className="font-semibold text-gray text-xs">
              copyright @ {latestYear} Apple Inc. All Rights Reserved.
            </p>
            <div className=" flex mt-3 cursor-pointer">
              {footerLinks.map((link, index) => (
                <p key={link} className="font-semibold text-gray text-xs">
                  {link}{" "}
                  {index !== footerLinks.length - 1 && (
                    <span className=" mx-2"> | </span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
