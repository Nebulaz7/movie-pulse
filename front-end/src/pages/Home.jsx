import { Navbar } from '../components/Navbar/Navbar'
import { Featured } from '../components/Featured/Featured'
import { Categories } from '../components/Categories/Categories'
import { Latest } from '../components/Latest/Latest'
import { Trending } from '../components/Trending/Trending'
import { Footer } from '../components/Footer/Footer'
export default function Home(){
    return (
        <>
        <section className='home'>
            <Navbar/>
            <Featured/>
            <Categories/>
            <Latest/>
            <Trending/>
            <Footer/>
        </section>
        </>
    )
}