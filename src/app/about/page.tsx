import Bio from "@/components/Bio";

const socials = [
  {
    text: "Twitter",
    link: "https://twitter.com/__keattz__",
  },
  {
    text: (
      <>
        <span className="text-gray-400 italic line-through">Twitch</span>{" "}
        YouTube Stream
      </>
    ),
    link: "https://www.youtube.com/@keattz/streams",
  },
  { text: "MyAnimeList", link: "https://myanimelist.net/profile/keattz" },
  { text: "keattz on Discord" },
  { text: "Keatts#1962 on Battle.net" },
];

export default function About() {
  return (
    <>
      <Bio />
      <div className="flex flex-col bg-gray-800 rounded-lg p-4 gap-4">
        {socials.map((button, index) =>
          button.link ? (
            <a
              className="bg-gray-700 duration-300 flex items-center p-4 rounded-lg transition hover:bg-gray-600"
              href={button.link}
              key={index}
              rel="noopener noreferrer"
              target="_blank"
            >
              {button.image && (
                <img src={button.image} alt={button.text} className="w-6 h-6" />
              )}
              <span>{button.text}</span>
            </a>
          ) : (
            <div className="bg-gray-800 border-2 border-gray-700 flex items-center p-4 rounded-lg">
              {button.text}
            </div>
          )
        )}
      </div>
    </>
  );
}
