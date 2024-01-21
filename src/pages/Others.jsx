import { useFetchGroups } from "../hooks/useFetchGroups";

function Others() {
  const [groups, isLoading] = useFetchGroups("news");

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      {groups.map((group) => (
        <p>
          <a href={group.link}>{group.link}</a>
        </p>
      ))}
    </div>
  );
}

export default Others;
