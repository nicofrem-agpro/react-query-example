import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import UserComponent from "components/User";
import Loading from "components/Loading";
import FullLoading from "components/FullLoading";
import Button from "components/Button";

import * as St from "./User.styled";

const User = () => {
  const { id } = useParams();

  const url = `http://localhost:3030/users/${id}`;
  const {
    data: user = {},
    isLoading,
    isFetching,
    isError,
    error,
    refetch: refetchUser,
  } = useQuery(["users", id], () =>
    fetch(url).then((response) => response.json())
  );

  if (isError) return <div>{error.toString()}</div>;

  if (isLoading) return <FullLoading />;

  return (
    <St.UsersContainer>
      <St.HeaderContainer>
        <Button type="button" onClick={refetchUser} disabled={isFetching}>
          {isFetching ? "Updating..." : "Update"}
        </Button>
      </St.HeaderContainer>

      <UserComponent
        avatar={user.avatar}
        name={user.name}
        email={user.email}
        phone={user.phone}
        description={user.description}
      />

      {isFetching && <Loading />}
    </St.UsersContainer>
  );
};

export default User;
