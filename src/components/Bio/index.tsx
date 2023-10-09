import Card from "@/components/Card";

export default function Bio() {
  return (
    <div className="container max-w-custom mx-auto px-4">
      <Card className="bg-gradient-to-r from-green-700 to-green-950 p-4 shadow-lg">
        <div className="flex gap-4 items-center">
          <img
            alt="Avatar"
            className="rounded-full border-4 border-black"
            width={100}
            src="/avatar.jpg"
          />
          <div className="font-bold text-4xl drop-shadow-lg">
            <span className="text-black">keattz</span>
            {" is loading..."}
          </div>
        </div>
      </Card>
    </div>
  );
}
