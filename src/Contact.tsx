import { SectionProps } from "./interfaces";

export default function Contact({ id }: SectionProps) {

    const phoneNumber = '+48 511 334 442';
    const email = 'bitwaoslaskboxing@gmail.com';
    const adres = 'ul. Mickiewicza 4 Katowice 40-082';

    return (
        <section id={id}>
            <div>
                <h3>Kontakt</h3>
                <div>
                    <h4 className='fs-5'>Biuro:</h4>
                    <div className='row' style={{ 'height': '1.8em' }}>
                        <p className='col-3 col-md-1'>telefon:&nbsp;</p>
                        <a className='col' href={`tel: ${phoneNumber.replaceAll(' ', '')}`}>{phoneNumber}</a>
                    </div>
                    <div className="row">
                        <p className="col-3 col-md-1">email:</p>
                        <a className="col" href={`mailto: ${email}`}>{email}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}