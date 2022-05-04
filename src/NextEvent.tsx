import Fight from "./Fight";
import { SectionProps } from "./interfaces";

function InfoBox({ title, icon, children }: { title: string, icon?: string, children?: any }) {
    return (
        <div className='col-12 col-md-6 col-lg-3 p-1 d-flex justify-content-center'>
            <div className='d-flex flex-column align-items-center bg-primary rounded' style={{ width: '100%', aspectRatio: '1', maxWidth: '280px' }}>
                <h3 className='pt-4'>{title}</h3>
                {icon &&
                    <i className={icon} style={{ fontSize: '5rem' }} />
                }
                {children}
            </div>
        </div>
    );
}

export default function NextEvent({ id }: SectionProps) {
    const streamHref = 'https://youtube.com';
    return (
        <section id={id}>
            <h2 className='text-center'>Bitwa o Śląsk - Katowice</h2>
            <section className='row pt-2'>
                <InfoBox title='KIEDY' icon='bi-calendar-date' >
                    <p className='pb-3 text-center' style={{ maxWidth: '80%' }}>17 czerwca 2022</p>
                </InfoBox>

                <InfoBox title='GDZIE' icon='bi-geo-alt'>
                    <p className='pb-3 text-center' style={{ maxWidth: '80%' }}>Katowice<br />- więcej informacji wkrótce</p>
                </InfoBox>

                <InfoBox title='KTO' >
                    <a className='bi-person' href='#fighters' style={{ fontSize: '5rem', color: 'white' }}></a>
                    <a className='btn bg-white text-black rounded-pill' href='#fighters'>Zobacz zawodników</a>
                </InfoBox>

                <InfoBox title='STREAM'>
                    <a className='bi-play-circle-fill' href={streamHref} style={{ fontSize: '5rem', color: 'white' }}></a>
                    <a className='btn bg-white text-black rounded-pill' href={streamHref}>Przejdź do streamu</a>
                </InfoBox>
            </section >
            <section className='mt-3 d-flex flex-column justify-content-center' id='fighters'>
                <Fight
                    fighter1={{
                        name: 'ALANIK',
                        imgHref: 'https://storage.famemma.tv/content/31/fight-card/ALANIK_ZAWODNICY_FAME_14.png',
                        weight: 80,
                        height: 180
                    }}
                    fighter2={{
                        name: 'MURAN',
                        imgHref: 'https://storage.famemma.tv/content/31/fight-card/MURAN_ZAWODNICY_FAME_14.png',
                        weight: 81,
                        height: 179
                    }}
                    key='3'
                />
                <Fight
                    fighter1={{
                        name: 'Damian Stanisławski',
                        imgHref: 'https://i.imgur.com/Xz7ixAh.jpg',
                        weight: 80,
                        height: 180
                    }}
                    fighter2={{
                        name: 'Tomasz Goluch',
                        imgHref: 'https://i.imgur.com/cLKKdcq.jpg',
                        weight: 83,
                        height: 179
                    }}
                    key='1'
                />
            </section>
        </section >
    );
}