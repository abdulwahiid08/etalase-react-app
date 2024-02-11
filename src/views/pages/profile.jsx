import useAuthLoginHook from "../../hooks/useAuthLoginHook";

export const ProfilePage = () => {
  const { Username } = useAuthLoginHook();

  return (
    <div>
      <h1>Profile</h1>
      <h1>Username: {Username}</h1>
    </div>
  );
};
