import "./Frame_module.css";

const Frame_three = () => {
  return (
    <>
      <div className="iframe">
        <span style={{display: "block"}}></span>
        <iframe
                style={{width:"100%",height:"100%"}}

          src="https://www.aparat.com/video/video/embed/videohash/Mwp4H/vt/frame"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
    </>
  );
};

export default Frame_three;

