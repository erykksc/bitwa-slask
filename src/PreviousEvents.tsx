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
    // const [currentPhoto, setCurrentPhoto] = useState(0);
    // const [currentGalleryName, setCurrentGalleryName] = useState('');
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);
    // eslint-disable-next-line
    // const [imageLoaded, setImageLoaded] = useState(false);

    const openLightbox = (event: any, { photo, index }: any, galleryKey: string) => {
        setGalleryState({
            photoIdx: index,
            galleryName: galleryKey,
            viewerOpen: true,
            imageLoaded: false
        })
    };

    let galleriesTags: JSX.Element[] = [];
    Object.keys(galleries).forEach((galleryName, galleryIndex) => {
        galleriesTags.push(
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
    const currentPhoto = galleryState.photoIdx;

    return (
        <section id={id}>
            <h2 className='text-center'>Poprzednie wydarzenia</h2>
            {galleriesTags}
            {galleryState.viewerOpen && (
                <Lightbox
                    mainSrc={gallery[currentPhoto].original}
                    nextSrc={gallery[(currentPhoto + 1) % gallery.length].original}
                    prevSrc={gallery[(currentPhoto + gallery.length - 1) % gallery.length].original}
                    onCloseRequest={() => { setGalleryState({ ...galleryState, viewerOpen: false, imageLoaded: false }) }}
                    onMovePrevRequest={() =>
                        setGalleryState({ ...galleryState, photoIdx: (currentPhoto + gallery.length - 1) % gallery.length })
                    }
                    onMoveNextRequest={() =>
                        setGalleryState({ ...galleryState, photoIdx: (currentPhoto + 1) % gallery.length })

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