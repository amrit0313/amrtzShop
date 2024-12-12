import Modal from "./modal";

const LogoutModal = (props) => {
  return (
    <Modal onCancel={props.onCancel}>
      <p>wanna Logout?</p>
      <div style={{ display: "flex" }}>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 30px",
            marginRight: "20px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          onClick={props.onYes}
        >
          <span>Yes</span>
        </button>
        <button
          style={{
            backgroundColor: "aliceblue",
            color: "black",
            padding: "10px 30px",
            marginRight: "20px",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          onClick={props.onCancel}
        >
          <span>No</span>
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
