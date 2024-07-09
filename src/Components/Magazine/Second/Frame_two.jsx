import "./Frame_module.css";

const Frame_two = () => {
  return (
    <>
      <div className="iframe">
        <span style={{ display: "block",width:"100%" }}></span>
        <iframe
          style={{width:"100%" ,height:"100%"}}
          src="https://www.aparat.com/video/video/embed/videohash/Ysaot/vt/frame"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
    </>
  );
};

export default Frame_two;

