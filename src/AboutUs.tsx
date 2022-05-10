import { SectionProps } from "./interfaces";

export default function AboutUs({ id, className }: SectionProps) {
    return (
        <section id={id} className={`page-section row ${className}`}>
            <div className='col-12 col-md-6'>
                <h2>O nas</h2>
                <div style={{ textAlign: 'justify' }}>
                    <p>
                        Z pasji jaką jest boks i setek godzin spędzonych na sali treningowej
                        poszliśmy o krok dalej i postanowiliśmy promować nasza ukochaną
                        dyscyplinę sportową. Biorąc pod uwagę olbrzymie tradycje bokserskie jakie
                        posiada Śląsk narodził się pomysł stworzenia cyklicznej imprezy
                        <strong> "Bitwa o Śląsk"</strong>, gdzie boks olimpijski przeplata się wraz z boksem zawodowym.
                    </p>
                    <p>
                        Dzieki takiemu połączeniu to wydarzenie sportowe nabiera na atrakcyjności zarówno
                        dla samych zawodników jak i kibiców.
                        Nasze gale odbywały się już w takich miastach jak <strong>Katowice, Siemianowice&nbsp;Śląskie,
                            Radzionków, Zabrze, Mysłowice</strong> gdzie mieliśmy przyjemność współpracować z władzami
                        miasta a nasze imprezy są wizytówka boksu w regionie i całym kraju oraz poza granicami.
                        Na nasze imprezy przyjeżdżają się mierzyć zarówno zawodnicy z całej Polski jak również
                        <strong> Ukrainy, Mołdawii czy Rosji</strong>.
                    </p>
                </div>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src='img/ring.png' style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }} alt="Ring" />
            </div>
        </section>
    );
};