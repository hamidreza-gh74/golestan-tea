import "./Frame_module.css";

const Frame_one = () => {
  return (
    <>
      <div className="iframe">
      <span style={{ display: "block" }}></span>
        <iframe 
        style={{width:"100%"}}
          src="https://www.aparat.com/video/video/embed/videohash/Ysaot/vt/frame"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      
      </div>
    </>
  );
};

export default Frame_one;


