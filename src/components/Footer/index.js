import { Link } from "react-router-dom";
import Tag from "../Tag";

const tagVlues = [
  "Apple",
  "Orange",
  "Pineapple",
  "Plum",
  "Carrot",
  "Watermelon",
  "Tomato",
  "Potato",
  "Apple",
  "Orange",
  "Pineapple",
  "Plum",
  "Carrot",
  "Watermelon",
  "Tomato",
  "Potato",
  "Apple",
  "Orange",
  "Pineapple",
  "Plum",
  "Carrot",
];

const footerLinks = [
  {
    title: "Get in touch",
    links: [
      { content: "About Us", url: "coming-soon" },
      { content: "Careers", url: "coming-soon" },
      { content: "Press Releases", url: "coming-soon" },
    ],
  },
  {
    title: "Connections",
    links: [
      { content: "About Us", url: "coming-soon" },
      { content: "Careers", url: "coming-soon" },
      { content: "Press Releases", url: "coming-soon" },
    ],
  },
  {
    title: "Earnings",
    links: [
      { content: "About Us", url: "coming-soon" },
      { content: "Careers", url: "coming-soon" },
      { content: "Press Releases", url: "coming-soon" },
    ],
  },
  {
    title: "Account",
    links: [
      { content: "Your account", url: "coming-soon" },
      { content: "Careers", url: "coming-soon" },
      { content: "100% Purchase Protection", url: "coming-soon" },
      { content: "Chat with us", url: "coming-soon" },
      { content: "Help", url: "coming-soon" },
    ],
  },
];

const Footer = ({ tagValues }) => {
  const aStyle =
    "text-C2-default py-1 flex flex-wrap text-center text-sm md:justify-start justify-center hover:underline";
  const h3Style = "font-bold py-2 text-black md:text-justify text-center";

  return (
    <>
      <footer className="flex md:w-11/12 mx-auto w-full">
        <div className="md:px-8 sm:px-5 lg:py-14 py-10 flex w-full flex-col">
          <div className="flex flex-wrap w-full md:justify-around md:items-baseline sm:flex-row pb-6">
            {footerLinks.map((el, index) => (
              <div
                key={index}
                className="flex lg:w-1/4 w-1/2 lg:pb-0 pb-10 justify-center md:justify-start"
              >
                <div className="flex flex-col ">
                  <h3 className={h3Style}>{el.title}</h3>
                  <ul>
                    {el.links.map((link, index) => (
                      <Link key={index} to={link.url}>
                        <p className={aStyle}>{link.content}</p>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col px-5 md:px-0">
            <div className="flex md:justify-start pb-5">
              <h1 className="font-semibold md:text-2xl text-lg text-black">
                Product tags
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full">
              {tagVlues.map((value, index) => (
                <div className="px-1 py-1" key={index}>
                  <Tag
                    value={value}
                    onClick={() => console.log("13213")}
                    displayIcon={false}
                    wrapperClassName="px-3 py-1 rounded-xl bg-C1-E cursor-pointer"
                    textClassName="text-black font-medium"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
