import './Cover.css'
import content from './content.json';

const { next_event } = content;

export default function Cover(props: {}) {
    return (
        <div className="cover-container d-flex w-100 h-100 justify-content-center align-items-center">
            <div className='d-flex flex-column justify-content-center text-center text-white' style={{ 'maxWidth': '40em' }}>
                <h1>BITWA O ŚLĄSK</h1>
                <hr />
                <p className="lead">Gala promująca śląski boks olimpijski i zawodowy oraz wydarzenie sportowe, które ma zaszczepić w ludziach pasję do boksu.</p>
                <div className='pt-2'>
                    <a href={next_event.stream_url ?? '#'} className="btn btn-lg btn-primary">Oglądaj Transmisję</a>
                </div>
            </div>
        </div>
    );
};
