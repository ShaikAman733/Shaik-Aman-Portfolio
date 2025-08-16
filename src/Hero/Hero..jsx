import ChangingText from './changingtext';
import './Hero.css';
import profile from '/assets/profile.jpg';
import resume from '/assets/Shaik.Resume.pdf';


function Hero() {
    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = aboutSection.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="Home">
            <div className="heroSection">
                <div className="box">
                    <div className="content">
                        <img className='developerimg' src={profile} alt="Shaik Aman" />
                    </div>
                </div>
                <h1 className='author'>Shaik Aman</h1>
                <div className='changingtext'><ChangingText /></div>
                <p className='intro'>"Passionate about MERN, Python & data analysis."</p>
                <div className='btns'>
                    <button className='btn-more' onClick={handleScrollToAbout}>
                        More About me
                    </button>
                    <button
                        className="btn-more"
                        onClick={() => window.open(resume, "_blank")}>
                        View Resume
                    </button>

                </div>
            </div>
        </section>
    );
}

export default Hero;
