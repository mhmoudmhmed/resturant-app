const Button = (props: any) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.value);
    }
  };
  return (
    <button onClick={handleClick} className="tag-wrapper">
      {props.children}
    </button>
  );
};

export default Button;
