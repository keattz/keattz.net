import Bio from "@/components/Bio";
import Card from "@/components/Card";

const socials = [
  {
    text: "Twitter",
    link: "https://twitter.com/__keattz__",
  },
  {
    text: (
      <>
        <span className="text-zinc-400 italic line-through">Twitch</span>{" "}
        YouTube Stream
      </>
    ),
    link: "https://www.youtube.com/@keattz/streams",
  },
  { text: "MyAnimeList", link: "https://myanimelist.net/profile/keattz" },
  {
    text: (
      <>
        <span>keattz</span>&nbsp;
        <span className="text-zinc-400">on Discord</span>
      </>
    ),
  },
  {
    text: (
      <>
        <span>Keatts#1962</span>&nbsp;
        <span className="text-zinc-400">on Battle.net</span>
      </>
    ),
  },
];

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <Bio />
      <Card className="bg-zinc-800 flex flex-col gap-4 p-4 shadow-lg shadow-inner">
        {socials.map((button, i) =>
          button.link ? (
            <a
              className="bg-zinc-700 border-2 border-green-700 text-green-400 duration-300 flex items-center p-4 rounded-lg transition hover:bg-zinc-600"
              href={button.link}
              key={i}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{button.text}</span>
            </a>
          ) : (
            <div
              className="bg-zinc-800 border-2 border-zinc-700 flex items-center p-4 rounded-lg"
              key={i}
            >
              {button.text}
            </div>
          )
        )}
      </Card>
    </div>
  );
}
