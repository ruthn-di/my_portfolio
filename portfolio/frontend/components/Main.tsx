import Hero from "./Hero";
import Education from "./Education";
import Projects from "./Projects";
import Stacks from "./Stacks";
import Contact from "./Contact";
import RevealObserver from "./RevealObserver";


export default function Main() {
    return(
        <>
            <RevealObserver />
            <Hero />
            <Education />
            <Projects />
            <Stacks />
            <Contact />
        </>
    )
}
