import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home = () => {

    return(
        <div className="main-content">
            <section id="about">
            <About/>
            </section>
            <section id="services">
            <Services />
            </section>
            <section id="contact">
            <Contact />
            </section>
        </div>
    )
}

export default Home;