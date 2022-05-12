import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import PhotoGallery from 'react-photo-gallery';
import { galleries } from './GalleryImages';
import { SectionProps } from "./interfaces";


export default function PreviousEvents({ id }: SectionProps) {
    const [galleryState, setGalleryState] = useState({
        photoIdx: 0,
        galleryName: '',
        viewerOpen: false,
        imageLoaded: false
    })

    const openLightbox = (event: any, { photo, index }: any, galleryKey: string) => {
        setGalleryState({
            photoIdx: index,
            galleryName: galleryKey,
            viewerOpen: true,
            imageLoaded: false
        })
    };

    let gridGalleries: JSX.Element[] = [];
    Object.keys(galleries).forEach((galleryName, galleryIndex) => {
        gridGalleries.push(
            <div key={`gallery_${galleryIndex}_${galleryName}`}>
                <h3 className='mt-4 text-center'>{galleryName}</h3>

                <PhotoGallery
                    photos={galleries[galleryName]}
                    onClick={(event, photo) => { openLightbox(event, photo, galleryName) }}
                />
            </div>
        )
    });

    const gallery = galleries[galleryState.galleryName];
    const curImgIdx = gallery ? galleryState.photoIdx : 0;
    const nextImgIdx = gallery ? (curImgIdx + 1) % gallery.length : 0;
    const prevImgIdx = gallery ? (curImgIdx + gallery.length - 1) % gallery.length : 0;

    return (
        <section id={id}>
            <h2 className='text-center'>Poprzednie wydarzenia</h2>

            {gridGalleries}

            {galleryState.viewerOpen && (
                <Lightbox
                    mainSrc={gallery[curImgIdx].original}
                    nextSrc={gallery[nextImgIdx].original}
                    prevSrc={gallery[prevImgIdx].original}
                    onCloseRequest={() => { setGalleryState({ ...galleryState, viewerOpen: false, imageLoaded: false }) }}
                    onMovePrevRequest={() =>
                        setGalleryState({ ...galleryState, photoIdx: prevImgIdx })
                    }
                    onMoveNextRequest={() =>
                        setGalleryState({ ...galleryState, photoIdx: nextImgIdx })
                    }
                    clickOutsideToClose={true}
                    prevLabel='Poprzednie zdjęcie'
                    nextLabel='Następne zdjęcie'
                    closeLabel='Zamknij'
                    imageTitle={galleryState.galleryName}
                    onImageLoad={() => setGalleryState({ ...galleryState, imageLoaded: true })}
                />
            )}
        </section>
    );
}