import { useState } from "react";

function FighterImg({ src: imgHref, className }: { src: string, className?: string }) {
    return (
        <div className={`text-center ${className}`}>
            <img className='fighter-img' src={imgHref} alt='Zdjęcie zawodnika' />
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
                <FighterImg className='col ms-2 d-flex justify-content-center fighter-1-bg' src={fighter1.imgHref} />
                <div className='col-2 text-center' style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='img/vs_white.png' style={{ maxWidth: '100%', height: 'auto' }} alt='Zdjęcie "VS"' />
                </div>
                <FighterImg className='col me-2 d-flex justify-content-center fighter-2-bg' src={fighter2.imgHref} />
            </div>

            <div className='row mt-3 justify-content-center' style={{ fontSize: '1.3em' }}>

                <p className='col text-center'>{fighter1.name}</p>
                <div className='col-2' />
                <p className='col text-center'>{fighter2.name}</p>
            </div>

            <div>
                <div className='d-flex text-center flex-column' style={{ width: '95%', margin: 'auto' }}>
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
                            <div className='col mb-1 px-0 d-flex justify-content-center justify-content-md-end'>
                                <p className='mb-0 align-self-center'>{fighter1.club}</p>
                            </div>
                            <div className='col-3 mb-1 text-center px-0 d-flex'>
                                <p className='flex-fill align-self-center mb-0'>Klub</p>
                            </div>
                            <div className='col mb-1 px-0 d-flex justify-content-center justify-content-md-start'>
                                <p className='mb-0 align-self-center'>{fighter2.club}</p>
                            </div>
                        </div>
                        <p className='text-center text-white mb-0 pt-1'>
                            Kategoria wagowa: <b>{category}kg</b>
                        </p>
                    </div>

                </div>
            </div>
            <hr className='mt-2 mb-4' style={{ width: '75%', margin: 'auto' }} />
        </div>
    );
}
