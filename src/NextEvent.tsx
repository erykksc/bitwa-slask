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
    const streamHref = 'https://fb.me/e/4Wb5VjPA4';
    return (
        <section id={id}>
            <h2 className='text-center'>Bitwa o Śląsk Katowice 17.06.2022</h2>
            <section className='row pt-2'>
                <InfoBox title='KIEDY' icon='bi-calendar-check' >
                    <p className='pb-3 text-center' style={{ maxWidth: '80%' }}>17 czerwca 2022<br/>Godzina 18:00</p>
                </InfoBox>

                <InfoBox title='GDZIE' icon='bi-geo-alt'>
                    <a className='pb-3 text-center text-white' style={{ maxWidth: '90%' }} href='https://goo.gl/maps/Le3g81uDam7bnsnSA'>
                        Miejski Dom Kultury "Bogucice-Zawodzie" Ul. Markiefki 44, Katowice
                    </a>
                </InfoBox>

                <InfoBox title='KTO' >
                    <a href='#fighters'>
                        <i className='bi-person' style={{ fontSize: '5rem', color: 'white' }} />
                    </a>
                    <a className='btn bg-white text-black rounded-pill' href='#fighters'>Zobacz zawodników</a>
                </InfoBox>

                <InfoBox title='STREAM'>
                    <a href={streamHref}>
                        <i className='bi-play-circle' style={{ fontSize: '5rem', color: 'white' }} />
                    </a>
                    <a className='btn bg-white text-black rounded-pill' href={streamHref}>Przejdź do streamu</a>
                </InfoBox>
            </section >
            <section className='mt-3 d-flex flex-column justify-content-center' id='fighters'>
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
                        club: 'Bytomska Akademia Boksu'
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
                        name: 'Niezapowiedziany zawodnik 1',
                        imgHref: 'person-fill.svg',
                        club: '?'
                    }}
                    fighter2={{
                        name: 'Kamil Rybaczuk',
                        imgHref: 'img/fighters/kamil_rybaczuk.png',
                        club: 'Sokół Gliwice'
                    }}
                    category={86}
                    key={3}
                />
                <Fight
                    fighter1={{
                        name: 'Niezapowiedziany zawodnik 2',
                        imgHref: 'person-fill.svg',
                        club: '?'
                    }}
                    fighter2={{
                        name: 'Patryk Polasik',
                        imgHref: 'img/fighters/patryk_polasik.png',
                        club: 'Sokół Gliwice'
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
            </section>
        </section >
    );
}