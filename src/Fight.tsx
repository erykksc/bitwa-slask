import { useState } from "react";

function FighterImg({ src: imgHref, className }: { src: string, className?: string }) {
    return (
        <div className={`text-center ${className}`}>
            <img src={imgHref} style={{ maxHeight: '40vh', maxWidth: '100%', aspectRatio: 'auto' }} alt='Zdjęcie zawodnika' />
        </div>
    )
}

interface FighterInfo {
    name: string,
    imgHref: string,
    club: string,
}

export default function Fight({ fighter1, fighter2, category }: { fighter1: FighterInfo, fighter2: FighterInfo, category: string | number }) {
    const [expanded, setExpanded] = useState<boolean>(false);

    const iconName = expanded ? 'bi-caret-up-fill' : 'bi-caret-down-fill';

    const moreInfoID = (fighter1.name + fighter2.name).replaceAll(' ', '');
    return (
        <div>
            <div className='row mt-3 justify-content-center'>
                <FighterImg className='col d-flex justify-content-center' src={fighter1.imgHref} />
                <div className='col-2 text-center' style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='img/vs.png' style={{ maxWidth: '100%', height: 'auto' }} alt='Zdjęcie "VS"' />
                </div>
                <FighterImg className='col d-flex justify-content-center' src={fighter2.imgHref} />
            </div>

            <div className='row mt-3 justify-content-center' style={{ fontSize: '1.3em' }}>

                <p className='col text-center'>{fighter1.name}</p>
                <div className='col-2' />
                <p className='col text-center'>{fighter2.name}</p>
            </div>

            <div>
                <div className='d-flex text-center flex-column' style={{ width: '80%', margin: 'auto' }}>
                    <a className={iconName + ' text-decoration-none text-white'}
                        onClick={() => { setExpanded(!expanded) }}
                        data-bs-toggle="collapse"
                        href={`#${moreInfoID}`}
                        role="button"
                        aria-expanded="false"
                        aria-controls={moreInfoID}
                    >
                        {' Więcej info'}
                    </a>
                    <div className="collapse text-muted" id={moreInfoID}>
                        <div className='row pt-1' >
                            {/* <div className='col text-end'>
                                <p className='text-center px-0'>{fighter1.club}</p>
                            </div> */}
                            <p className='col mb-1 text-center text-md-end px-0'>{fighter1.club}</p>
                            <div className='col-3 mb-1 text-center px-0'>
                            <p className='align-middle'>Klub</p>
                            </div>
                            {/* <div className='col text-start'>
                                <p className='text-center px-0'>{fighter2.club}</p>
                            </div> */}
                            <p className='col mb-1 text-center text-md-start px-0'>{fighter2.club}</p>
                        </div>
                        <p className='text-center mb-0 pt-1'>
                            Kategoria wagowa: <b>{category}kg</b>
                        </p>
                    </div>

                </div>
            </div>
            <hr className='mt-2 mb-4' style={{ width: '75%', margin: 'auto' }} />
        </div>
    );
}
