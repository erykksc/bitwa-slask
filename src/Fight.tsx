import { useState } from "react";

function Fighter({ imgHref, name }: { name: string, imgHref: string }) {
    return (
        <div>
            <img src={imgHref} style={{ maxWidth: '100%' }} />
            <p className=' text-center mt-2 fs-5 mb-0'>{name}</p>
        </div>
    )
}

interface FighterInfo {
    name: string,
    imgHref: string,
    height: number,
    weight: number,
}

export default function Fight({ fighter1, fighter2 }: { fighter1: FighterInfo, fighter2: FighterInfo }) {
    const [expanded, setExpanded] = useState<boolean>(false);

    const iconName = expanded ? 'bi-caret-up-fill' : 'bi-caret-down-fill';

    const moreInfoID = (fighter1.name + fighter2.name).replaceAll(' ', '');
    return (
        <div className='row mt-3 justify-content-center'>
            <div className='col-5 d-flex justify-content-end'>
                <Fighter imgHref={fighter1.imgHref} name={fighter1.name} />
            </div>
            <div className='p-0  col-2 d-flex justify-content-center align-items-center'>
                <img src='img/vs.png' style={{ maxWidth: '70%' }} />
            </div>
            <div className='col-5 d-flex justify-content-start'>
                <Fighter imgHref={fighter2.imgHref} name={fighter2.name} />
            </div>


            <div className='d-flex text-center flex-column' style={{ width: '80%' }}>
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
                    <div className='row mt-2' >
                        <p className='col mb-0'>{fighter1.height}</p>
                        <p className='col mb-0 text-nowrap'>wzrost (cm)</p>
                        <p className='col mb-0'>{fighter2.height}</p>
                    </div>
                    <div className='row pt-1' >
                        <p className='col mb-0'>{fighter1.weight}</p>
                        <p className='col mb-0 text-no-wrap'>waga (kg)</p>
                        <p className='col mb-0'>{fighter2.weight}</p>
                    </div>
                </div>

            </div>
            <hr className='mt-2' style={{ width: '60%' }} />
        </div>
    );
}
