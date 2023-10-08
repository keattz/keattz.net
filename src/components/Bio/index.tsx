export default function Bio() {
  return (
    <div className="flex items-center bg-gray-800 rounded-lg p-4 space-x-4 mb-4">
      <img
        alt="Avatar"
        className="rounded-full"
        width={100}
        src="/avatar.jpg"
      />
      <div>Short bio here</div>
    </div>
  );
}
