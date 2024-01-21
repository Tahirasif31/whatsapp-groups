import { useFetchGroups } from "../hooks/useFetchGroups";

function Business() {
  const [groups, isLoading] = useFetchGroups("business");

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

export default Business;
