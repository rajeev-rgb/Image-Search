/* eslint-disable react/prop-types */
import ImageShow from "./ImageShow";
import "./ImageList.css";

const ImageList = ({ image }) => {
  return (
    <div className="image-list">
      {image.map((image) => {
        return <ImageShow image={image} key={image.id} />;
      })}
    </div>
  );
};

export default ImageList;
