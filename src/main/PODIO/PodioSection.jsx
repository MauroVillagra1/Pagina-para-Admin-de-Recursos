
import Card from '../../components/card/Card';
import './podioSection.css'

const PodioSection = () => {
    return (
        <section className="podioContainer d-flex flex-column">
            <div className='d-flex justify-content-center'>
                <h1 className='titlePodio'>PODIO</h1>
            </div>
           <Card></Card>
        </section>
    );
};

export default PodioSection;