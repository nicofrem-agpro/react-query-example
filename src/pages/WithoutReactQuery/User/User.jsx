import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import UserComponent from "components/User";
import FullLoading from "components/FullLoading";
import Button from "components/Button";

import * as St from "./User.styled";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const fetchUser = useCallback(async () => {
    const url = `http://localhost:3030/users/${id}`;

    try {
      setIsLoading(true);
      const data = await fetch(url).then((response) => response.json());
      setUser(data);
      setError(undefined);
    } catch (error) {
      setError(error.toString());
    }

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (error) return <div>{error}</div>;

  if (isLoading) return <FullLoading />;

  return (
    <St.UsersContainer>
      <St.HeaderContainer>
        <Button type="button" onClick={fetchUser}>
          Update
        </Button>
      </St.HeaderContainer>

      <UserComponent
        avatar={user.avatar}
        name={user.name}
        email={user.email}
        phone={user.phone}
        description={user.description}
      />
    </St.UsersContainer>
  );
};

export default User;
