import { SectionProps } from "./interfaces";

export default function SocialMedia({ id }: SectionProps) {
    return (
        <section id={id} className='d-flex justify-content-center'>
            <div className='d-flex flex-row'>
                <a href='https://facebook.com/bitwaoslask' className='mx-1 d-flex justify-content-center align-items-center rounded' style={{ height: '90px', aspectRatio: '1', maxWidth: '100px', background: '#4267B2' }}>
                    <i className='bi-facebook' style={{ fontSize: '3rem', color: 'white' }} />
                </a>
                <a href='https://www.instagram.com/bitwa_o_slask_boxing' className='mx-1 instagram-bg d-flex justify-content-center align-items-center rounded' style={{ height: '90px', aspectRatio: '1', maxWidth: '100px' }}>
                    <i className='bi-instagram' style={{ fontSize: '3rem', color: 'white' }} />
                </a>
                <a href='https://www.tiktok.com/@bitwa_o_slask_boxing' className='mx-1 d-flex justify-content-center align-items-center bg-black rounded' style={{ height: '90px', aspectRatio: '1', maxWidth: '100px' }}>
                    <img src='img/tik-tok-cut.png' style={{ width: '54%' }} alt='ikona tik-toka' />
                </a>
                <a href='https://www.youtube.com/results?search_query=bitwa+o+slask+box' className='mx-1 d-flex justify-content-center align-items-center rounded' style={{ height: '90px', aspectRatio: '1', maxWidth: '100px', background:'#D82a3b' }}>
                    <i className='bi-youtube' style={{ fontSize: '3rem', color: 'white' }} />
                </a>
            </div>
        </section>
    );
}
