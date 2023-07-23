import { useContext } from "react";
import profile from "../../assets/placeholder.jpg";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center gap-5">
      {/* <img src={user && user.photoURL ? user.photoURL : profile} className="rounded-full w-40" alt="profile" />
      <p>{user.displayName}</p> */}
    </div>
  );
};

export default Profile;
