import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import PhotoGallery from 'react-photo-gallery';
import { galleries } from './GalleryImages';
import { SectionProps } from "./interfaces";


export default function PreviousEvents({ id }: SectionProps) {
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [currentGallery, setCurrentGallery] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const openLightbox = (event: any, { photo, index }: any, gallery: number) => {
        setCurrentPhoto(index);
        setCurrentGallery(gallery);
        setViewerIsOpen(true);
    };

    let galleriesTags: JSX.Element[] = [];
    Object.keys(galleries).forEach((key, i) => {
        const photos = (galleries as any)[key];
        galleriesTags.push(
            <div key={`gallery_${i}_${key}`}>
                <h3 className='mt-4 text-center'>{key}</h3>

                <PhotoGallery
                    photos={photos}
                    onClick={(e, p) => { openLightbox(e, p, i) }}
                />

                {viewerIsOpen && currentGallery === i && (
                    <Lightbox
                        mainSrc={photos[currentPhoto].src}
                        nextSrc={photos[(currentPhoto + 1) % photos.length].src}
                        prevSrc={photos[(currentPhoto + photos.length - 1) % photos.length].src}
                        onCloseRequest={() => { setViewerIsOpen(false); setImageLoaded(false) }}
                        onMovePrevRequest={() =>
                            setCurrentPhoto((currentPhoto + photos.length - 1) % photos.length)
                        }
                        onMoveNextRequest={() =>
                            setCurrentPhoto((currentPhoto + 1) % photos.length)
                        }
                        onImageLoad={() => setImageLoaded(true)}
                        clickOutsideToClose={true}
                        prevLabel='Poprzednie zdjęcie'
                        nextLabel='Następne zdjęcie'
                        closeLabel='Zamknij'
                        imageTitle={key}
                    />
                )}
            </div>
        )
    });

    return (
        <section id={id}>
            <h2 className='text-center'>Poprzednie wydarzenia</h2>
            {galleriesTags}
        </section>
    );
}