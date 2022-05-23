import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import User from "components/User";
import Loading from "components/Loading";
import FullLoading from "components/FullLoading";
import Button from "components/Button";

import * as St from "./Users.styled";

const Users = () => {
  const url = "http://localhost:3030/users";
  const {
    data: users = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch: refetchUsers,
  } = useQuery("users", () => fetch(url).then((response) => response.json()));

  if (isError) return <div>{error.toString()}</div>;

  if (isLoading) return <FullLoading />;

  return (
    <St.UsersContainer>
      <St.HeaderContainer>
        <Button type="button" onClick={refetchUsers} disabled={isFetching}>
          {isFetching ? "Updating..." : "Update"}
        </Button>
      </St.HeaderContainer>

      {users.map((user) => (
        <User
          key={user.id}
          as={Link}
          to={String(user.id)}
          avatar={user.avatar}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      ))}

      {isFetching && <Loading />}
    </St.UsersContainer>
  );
};

export default Users;
