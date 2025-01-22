import { socials } from "../constants";
const Footer = () => {
  return (
    <footer className=" text-lg py-10">
      <div className="container mx-auto text-center ">
        <div>
          <h1 className="text-center text-4xl font-bold mb-5">
            Connect with me.
          </h1>
          <div className="flex justify-center space-x-6">
            {socials.map((social, id) => (
              <a
                key={id}
                href={social.url}
                target="_blank"
                className="text-white font-bold  hover:text-gray-300 hover:underline transition duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
