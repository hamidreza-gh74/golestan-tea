const End = () => {
  const div = {
    width: "100%",
    margin: "12px 0px",
    display: "flex",
    justifyContent: "center",
  };
  const span = {
    width: "98%",
    height: "1px",
    margin: "6px 0px",
    backgroundColor: "#bababa",

  };

  return (
    <div style={div}>
      <span style={span}></span>
    </div>
  );
};

export default End;
