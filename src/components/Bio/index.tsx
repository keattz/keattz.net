import Card from "@/components/Card";

export default function Bio() {
  return (
    <div className="container max-w-custom mx-auto px-4">
      <Card className="bg-zinc-800 p-4 shadow-lg">
        <div className="flex gap-4 items-center">
          <img
            alt="Avatar"
            className="rounded-full"
            width={100}
            src="/avatar.jpg"
          />
          <div>Short bio here</div>
        </div>
      </Card>
    </div>
  );
}
