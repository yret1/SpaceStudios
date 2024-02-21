import img1 from "../assets/img1.avif"
import img2 from "../assets/img2.avif"
import img3 from "../assets/img3.avif"
import img4 from "../assets/img4.avif"
import img5 from "../assets/img5.avif"
import img6 from "../assets/img6.avif"
import img7 from "../assets/img7.avif"
import img8 from "../assets/img8.avif"
import img9 from "../assets/img9.avif"
import img10 from "../assets/img10.avif"
import img11 from "../assets/img11.avif"
import img12 from "../assets/img12.avif"

import { useRef, useEffect } from "react"


const Recents = () => {


    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img1, img2, img3]


    const imagesRef = useRef([])


    useEffect(() => {
        const handleScroll = () => {
            const screenSize = window.innerWidth;
            if (screenSize < 768){
                imagesRef.current.forEach((img) => {
                    const speed = -0.4; // Center column slower, outer columns faster
                    const yOffset = window.scrollY * speed;
                    img.style.transform = `translateY(${yOffset}px)`;
                });
            }
            else if (screenSize < 1200){
                imagesRef.current.forEach((img, index) => {
                    const speed = index % 2 ? -0.3 : -0.6; // Center column slower, outer columns faster
                    const yOffset = window.scrollY * speed;
                    img.style.transform = `translateY(${yOffset}px)`;
                });
            }else if(screenSize > 1200){
                imagesRef.current.forEach((img, index) => {
                    const speed = index % 3 === 1 ? -0.3 : -0.5; // Center column slower, outer columns faster
                    const yOffset = window.scrollY * speed;
                    img.style.transform = `translateY(${yOffset}px)`;
                });

            }
          
            
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array means this effect runs once on mount



    return (
        <section className="bg-neutral-50 h-screen w-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center overflow-hidden">

            {images.map((image, index) => {
                return (
                    <div 
                    key={index}
                    ref={el => imagesRef.current[index] = el}
                    className="w-80 h-80 sm:h-96 sm:w-96 m-4 rounded bg-cover bg-center shadow-md shadow-black" style={{backgroundImage: `url(${image})`}}></div>
                )
            })};



                  
        </section>
    )
    
}




export default Recents;