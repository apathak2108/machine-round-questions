import IconDelete from "../assets/deleteIcon.svg";

const DeleteIcon = ({ id, onClick }) => {
  return (
    <img
      src={IconDelete}
      alt="delete-icon"
      height={20}
      onClick={() => onClick(id)}
      style={{ cursor: "pointer" }}
    />
  );
};

export default DeleteIcon;
