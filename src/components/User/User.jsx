import * as St from "./User.styled";

const User = ({ avatar, name, email, phone, description, ...props }) => {
  return (
    <St.UserContainer {...props}>
      <St.Avatar src={avatar} alt={name} />
      <St.Name>{name}</St.Name>
      <St.InfoContainer>
        <St.ExtraInfo>{email}</St.ExtraInfo>
        <St.ExtraInfo>{phone}</St.ExtraInfo>
        <St.ExtraInfo>{description}</St.ExtraInfo>
      </St.InfoContainer>
    </St.UserContainer>
  );
};

export default User;
