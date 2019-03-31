import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {asyncGallery} from '../redux/actions/galleryActions';
import './Gallery.css';

const Gallery = ({gallery,getGalleryData}) => {
    return (
        <div className='gallery'>
            <button onClick = {getGalleryData}>Get Data</button>
            <div className="gallery__container">
            </div>
        </div>
    );
};

function MSTP (state) {
    return {
        gallery: state.gallery,
    }
}

function MDTP (dispatch) {
    return {
        getGalleryData: function() {
            dispatch(asyncGallery())
        }
    }
}

export default connect(null,MDTP)(Gallery);