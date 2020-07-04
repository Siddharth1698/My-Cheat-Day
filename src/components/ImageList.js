
import React from 'react';


const ImageList = (props) => {
    const images = props.images.map(({label,id, url}) => {
        return <img alt={label} key={id} src={url} />
    });
return (<div className="image-list">{images}</div>);

};

export default ImageList;