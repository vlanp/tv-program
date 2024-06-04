const Unseen = ({ isUnseen }: { isUnseen: boolean }) => {
  return isUnseen ? <p>Inédit</p> : undefined;
};

export default Unseen;
