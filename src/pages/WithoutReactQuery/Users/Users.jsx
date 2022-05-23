import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import User from "components/User";
import FullLoading from "components/FullLoading";
import Button from "components/Button";
import { useFetch } from "hooks/useFetch";

import * as St from "./Users.styled";

const Users = () => {
  const url = "http://localhost:3030/users";

  const {
    data: users = [],
    isLoading,
    error,
    refetch: fetchUsers,
  } = useFetch(url);

  if (error) return <div>{error}</div>;

  if (isLoading) return <FullLoading />;

  return (
    <St.UsersContainer>
      <St.HeaderContainer>
        <Button type="button" onClick={fetchUsers}>
          Update
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
    </St.UsersContainer>
  );
};

export default Users;
