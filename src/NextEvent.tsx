import content from './content.json';
import Fight from './Fight';
import './Fight.css';
import { SectionProps } from './interfaces';

const { next_event: event, fights } = content;

function InfoBox({ title, icon, children }: { title: string, icon: string, children?: any }) {
    return (
        <div className='col-12 col-md-6 col-lg-3 pt-1' style={{ maxWidth: '80%' }}>
            <div className='bg-primary rounded'>
                <h3 className='text-center py-2'>{title}</h3>
                <i className={`d-flex justify-content-center ${icon}`} style={{ fontSize: '5rem' }} />

                <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100px' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function NextEvent({ id }: SectionProps) {
    return (
        <section id={id}>
            <h2 className='text-center'>{event.name}</h2>
            <div className='text-center pb-4'>
                <video width="100%" height="auto" controls autoPlay muted loop preload='metadata'>
                    <source src="videos/trailer.mp4" type="video/mp4" />
                    Twoja przeglądarka nie wspiera video
                </video>
                <div className='pt-4' />
                <img style={{ maxWidth: '100%', maxHeight: '90vh' }} src='img/plakat.jpg' alt='Plakat najbliższego wydarzenia' />
            </div>
            <section className='row justify-content-center pt-2'>
                <InfoBox title='KIEDY' icon='bi-calendar-check' >
                    <p className='text-center'>{event.date}<br />{event.time}</p>
                </InfoBox>

                <InfoBox title='GDZIE' icon='bi-geo-alt'>
                    <a className='text-center text-white' href={event.location_url}>
                        {event.location_name}<br />
                        {event.location_address}
                    </a>
                </InfoBox>

                <InfoBox title='KTO' icon='bi-person'>
                    <a className='px-4 btn bg-white text-black rounded-pill' href='#fighters'>Zobacz zawodników</a>
                </InfoBox>

                <InfoBox title='STREAM' icon='bi-play-circle'>
                    <a className='px-4 btn bg-white text-black rounded-pill' href={event.stream_url}>Przejdź do streamu</a>
                </InfoBox>
            </section >
            <section className='mt-3 d-flex flex-column justify-content-center' id='fighters'>
                <h3 className='text-center'>Walka wieczoru</h3>
                <img src='img/fighters/ludwik-vs-rafal.jpg' alt='zdjęcie Ludwik Drożdżyński vs Rafał Jackiewicz' />
                <hr className='my-4' style={{ width: '75%', margin: 'auto' }} />

                {fights.map((v, i) =>
                    <Fight
                        fighter1={v['fighter-1']}
                        fighter2={v['fighter-2']}
                        category=''
                        key={i}
                    />
                )}
            </section>
        </section >
    );
}