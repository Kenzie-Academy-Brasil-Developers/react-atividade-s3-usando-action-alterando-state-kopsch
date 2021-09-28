import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeName } from "../../store/modules/user/action";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => dispatch(changeName(newName));

  const handleName = (e) => setNewName(e.target.value);

  return (
    <div>
      <h3>Name: {newName}</h3>
      <input placeholder="Insira seu nome" onChange={(e) => handleName(e)} />
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
};

export default UserCard;
