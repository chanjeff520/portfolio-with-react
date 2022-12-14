/*
https://github.com/chanjeff520/eiga : https://eiga-reviews.herokuapp.com/ 
https://github.com/mattjgatsby/artist-event-and-rec : https://mattjgatsby.github.io/artist-event-and-rec/
https://github.com/chanjeff520/pwa-text-editor : https://shielded-temple-06167.herokuapp.com/ (broken Link)
https://github.com/johnfrom209/Pokemon-Prime : No Link rn
https://github.com/chanjeff520/e-commerce-database : https://drive.google.com/file/d/1j0ZkmlX3HeURuBXR1YpcFJCDX-yVGbgR/view (link to video)
https://github.com/chanjeff520/express-note-taker : https://very-generic-note-taker.herokuapp.com/ (broken Link)
*/
import React from "react";
import eiga from "../images/eiga.png";
import jate from "../images/Jate.png";
import pokemon from "../images/pokemon-prime.png";
import mysql from "../images/mysql.png";
import soundsLike from "../images/sounds-like.png";
import noteTaker from "../images/Note-Taker.gif";

// Portfolio component
export default function Portfolio() { 
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <h1 className="col-start-2 col-span-2 mx-auto my-5 text-4xl">Portfolio</h1>
                <p className="col-start-2 col-span-2 mx-auto text-lg text-center">
                     These are some of the projects I have worked on. If you click on the pictures, it will take you to the selected GitHub Repository.
                     Click on To Deployed Site to see the deployed site. If the link is broken, it means the site is no longer deployed.
                </p>
            </div>
            <div className="grid grid-cols-7 gap-4 mb-20">
                <section className="col-start-2 col-span-5 flex flex-wrap justify-between mx-20">
                    <div className="">
                        <h1 className="border-2 border-blue-900 rounded-xl bg-slate-800 text-white mx-auto text-xl text-center relative top-12"> Eiga Reviews </h1>
                        <a href="https://github.com/chanjeff520/eiga">
                            <img className="border-2 border-blue-900 rounded-xl object-fill h-96 w-96 my-5" src={eiga} alt="Eiga Reviews"/>
                        </a>
                        <a href="https://eiga-reviews.herokuapp.com/"> 
                            <p className="text-center text-white border-2 border-blue-900 bg-slate-800 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                                To Deployed Site
                            </p>
                        </a>
                    </div>
                    <div className="">
                        <h1 className="border-2 border-blue-900 rounded-xl bg-slate-800 text-white mx-auto text-xl text-center relative top-12"> Sounds Like </h1>
                        <a href="https://github.com/mattjgatsby/artist-event-and-rec">
                            <img className="border-2 border-blue-900 rounded-xl object-fill h-96 w-96 my-5" src={soundsLike} alt="Sounds Like ... All Around The World!"/>
                        </a>
                        <a href="https://mattjgatsby.github.io/artist-event-and-rec/"> 
                            <p className="text-center text-white border-2 border-blue-900 bg-slate-800 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                                To Deployed Site
                            </p>
                        </a>
                    </div>
                    <div className="">
                        <h1 className="border-2 border-blue-900 rounded-xl bg-slate-800 text-white mx-auto text-xl text-center relative top-12"> Pokemon Prime </h1>
                        <a href="https://github.com/johnfrom209/Pokemon-Prime">
                            <img className="border-2 border-blue-900 rounded-xl object-fill h-96 w-96 my-5" src={pokemon} alt="Pokemon Prime"/>
                        </a>
                        <a href="https://github.com/johnfrom209/Pokemon-Prime"> 
                            <p className="text-center text-white border-2 border-blue-900 bg-slate-800 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                                No Deployed Link as of Now
                            </p>
                        </a>
                    </div>
                    <div className="">
                        <h1 className="border-2 border-blue-900 rounded-xl bg-slate-800 text-white mx-auto text-xl text-center relative top-12"> Just Another Text Editor </h1>
                        <a href="https://github.com/chanjeff520/pwa-text-editor ">
                            <img className="border-2 border-blue-900 rounded-xl object-fill h-96 w-96 my-5" src={jate} alt="Just Another Text Editor"/>
                        </a>
                        <a href="https://shielded-temple-06167.herokuapp.com/"> 
                            <p className="text-center text-white border-2 border-blue-900 bg-slate-800 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                                Link Broken Due to Heroku
                            </p>
                        </a>
                    </div>
                    <div className="">
                        <h1 className="border-2 border-blue-900 rounded-xl bg-slate-800 text-white mx-auto text-xl text-center relative top-12"> E-commerce Database </h1>
                        <a href="https://github.com/chanjeff520/e-commerce-database">
                            <img className="border-2 border-blue-900 rounded-xl object-fill h-96 w-96 my-5" src={mysql} alt="mysql database"/>
                        </a>
                        <a href="https://drive.google.com/file/d/1j0ZkmlX3HeURuBXR1YpcFJCDX-yVGbgR/view"> 
                            <p className="text-center text-white border-2 border-blue-900 bg-slate-800 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                                To Video Walkthrough
                            </p>
                        </a>
                    </div>
                    <div className="">
                        <h1 className="border-2 border-blue-900 rounded-xl bg-slate-800 text-white mx-auto text-xl text-center relative top-12"> Express Note Taker </h1>
                        <a href="https://github.com/chanjeff520/e-commerce-database">
                            <img className="border-2 border-blue-900 rounded-xl object-fill h-96 w-96 my-5" src={noteTaker} alt="express Note Taker"/>
                        </a>
                        <a href="https://very-generic-note-taker.herokuapp.com/"> 
                            <p className="text-center text-white border-2 border-blue-900 bg-slate-800 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                                Link Broken Due to Heroku
                            </p>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}