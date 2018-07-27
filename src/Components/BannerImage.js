import React from 'react';

const BannerImage = ({image}) => {
    return (
        <div className="grid-x">
            <div className="cell medium-12 large-12">
                <img src={image} alt="big!" className="image-pad"/>
            </div>
        </div>
    );
};

export default BannerImage;