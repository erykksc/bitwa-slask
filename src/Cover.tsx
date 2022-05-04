import './Cover.css'
export default function Cover(props: { learnMoreHref?: string }) {
    return (
        <div className="cover-container d-flex w-100 h-100 justify-content-center align-items-center">
            <div className='d-flex flex-column justify-content-center text-center text-white' style={{ 'maxWidth': '40em' }}>
                <h1>BITWA O ŚLĄSK</h1>
                <hr />
                <p className="lead">Gala promująca śląski boks olimpijski i zawodowy oraz wydarzenie sportowe, które ma zaszczepić w ludziach pasję do boksu.</p>
                <div>
                    <a href={props.learnMoreHref ?? '#'} className="btn btn-lg btn-primary">Dowiedz się więcej</a>
                </div>
            </div>
        </div>
    );
};
