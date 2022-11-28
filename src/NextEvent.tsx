import content from './content.json';
import Fight from './Fight';
import './Fight.css';
import { SectionProps } from "./interfaces";

const { next_event: event } = content;

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
            {/* <section className='mt-3 d-flex flex-column justify-content-center' id='fighters'>
                <Fight
                    fighter1={{
                        name: 'Damian Stanisławski',
                        imgHref: 'img/fighters/damian_stanislawski.png',
                        club: 'Bytomska Akademia Boksu'
                    }}
                    fighter2={{
                        name: 'Sylwester Zięba',
                        imgHref: 'img/fighters/sylwester_zieba.png',
                        club: 'UKS Śląsk Ruda Śląska'
                    }}
                    category={76}
                    key={1}
                />
                <Fight
                    fighter1={{
                        name: 'Beniamin Stępień',
                        imgHref: 'img/fighters/beniamin_stepien.png',
                        club: '?'
                    }}
                    fighter2={{
                        name: 'Joachim Goj Fester',
                        imgHref: 'img/fighters/joachim_goj_fester.png',
                        club: 'JKB Jawor Team'
                    }}
                    category='+92'
                    key={2}
                />
                <Fight
                    fighter1={{
                        name: 'Niezapowiedziany zawodnik',
                        imgHref: 'person-fill.svg',
                        club: '?'
                    }}
                    fighter2={{
                        name: 'Kamil Rybaczuk',
                        imgHref: 'img/fighters/kamil_rybaczuk.png',
                        club: 'BKS Sokół Gliwice'
                    }}
                    category={86}
                    key={3}
                />
                <Fight
                    fighter1={{
                        name: 'Łukasz Szczepaniak',
                        imgHref: 'img/fighters/lukasz_szczepaniak.png',
                        club: '?'
                    }}
                    fighter2={{
                        name: 'Patryk Polasik',
                        imgHref: 'img/fighters/patryk_polasik.png',
                        club: 'BKS Sokół Gliwice'
                    }}
                    category={86}
                    key={4}
                />
                <Fight
                    fighter1={{
                        name: 'Paweł Wiesner',
                        imgHref: 'img/fighters/pawel_wiesner.png',
                        club: 'Shark Top Team Bytom'
                    }}
                    fighter2={{
                        name: 'Rafał Erwu Wyrobek',
                        imgHref: 'img/fighters/rafal_erwu_wyrobek.png',
                        club: 'Rybnicki Ośrodek Walk'
                    }}
                    category={75}
                    key={5}
                />
            </section> */}
        </section >
    );
}