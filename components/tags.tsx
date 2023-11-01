export default function Tags({ tags }) {
  return (
    <footer className="pb-3 px-3">
      <p className="font-bold">
        Tagged
        {tags.edges.map((tag, index) => (
          <span key={index} className="ml-4 font-normal">
            {tag.node.name}
          </span>
        ))}
      </p>
    </footer>
  );
}
