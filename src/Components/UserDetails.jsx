import { useParams } from "react-router-dom";
const UserDetails = () => {
  const { id } = useParams();
  return (
    <>
      <section>
        <h1
          style={{
            color: "brown",
            fontSize: 23,
            fontWeight: "lighter",
            margin: "1.5rem",
          }}
        >
          Details about User-{id}
        </h1>
      </section>
    </>
  );
};
export default UserDetails;
