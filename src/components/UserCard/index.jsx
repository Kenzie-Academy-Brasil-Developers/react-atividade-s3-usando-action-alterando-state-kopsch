import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeName } from "../../store/modules/user/action";

const UserCard = () => {
  const [newName, setNewName] = useState("");
  const name = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(changeName(newName));

  const handleName = (e) => setNewName(e.target.value);

  return (
    <div>
      <h3>Name: {name.name}</h3>
      <input placeholder="Insira seu nome" onChange={(e) => handleName(e)} />
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
};

export default UserCard;
