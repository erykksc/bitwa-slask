import { SectionProps } from "./interfaces";

export default function AboutUs({ id, className }: SectionProps): JSX.Element {
    return (
        <section id={id} className={`page-section row ${className}`}>
            <div className='col-12 col-md-6'>
                <h2>O nas</h2>
                <p style={{ textAlign: 'justify' }}>Quis laboris sunt officia Lorem esse occaecat eu do voluptate. Anim excepteur sit amet nisi ullamco labore qui. Veniam elit deserunt anim ad incididunt aliquip ut aliquip qui aute mollit non laborum. Irure occaecat aliquip ea magna ex eu officia do excepteur officia. Cupidatat duis aliqua labore tempor. Ipsum officia nostrud velit enim magna elit. Quis consectetur veniam eiusmod eu officia ea laborum eu fugiat proident.Lorem aliqua nulla deserunt id adipisicing Lorem do voluptate adipisicing velit eiusmod culpa id irure. Sunt officia in dolore est. Officia officia veniam esse commodo incididunt velit commodo tempor exercitation non. Cupidatat aute nisi tempor pariatur id cupidatat reprehenderit velit ipsum anim laborum dolor Lorem laboris. Fugiat nulla laborum Lorem veniam duis. Aliquip qui minim incididunt tempor exercitation reprehenderit. In fugiat adipisicing in eu proident ea sit officia aliqua cupidatat sunt nisi.</p>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <img src='img/ring.png' style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }} alt="Ring"/>
            </div>
        </section>
    );
};