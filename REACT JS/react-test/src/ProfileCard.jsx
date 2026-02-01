const ProfileCard = (props) => {
  return (
    <div className="p-6 border-2 border-red-400 rounded-xl text-center m-5">
      <p>Hi im {props.name}</p>
      <p>I am {props.age}</p>
      <p>Im a {props.role}</p>
    </div>
  );
};

export default ProfileCard;
