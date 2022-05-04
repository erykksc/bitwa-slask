import PhotoGallery from 'react-photo-gallery';
import { SectionProps } from "./interfaces";
import { katowice1, zabrze_27_10_2018 } from './GalleryImages';

export default function PreviousEvents({ id }: SectionProps) {
    return (
        <section id={id}>
            <h2>Poprzednie wydarzenia</h2>
            <h3 className='mt-4 text-center'>Katowice</h3>
            <PhotoGallery photos={katowice1} />
            <h3 className='mt-5 text-center'>Zabrze 27.10.2018</h3>
            <PhotoGallery photos={zabrze_27_10_2018} />
        </section>
    );
}