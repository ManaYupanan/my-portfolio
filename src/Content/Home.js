import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "../Component/Social";
import Contact from "./Contact";

function Home(prop) {
    return (
        <div className="container my-4 navbar-expand-lg Home">


            <div className="row">
                <div className="col-sm"></div>
                <div className="container col-6 ">
                    <img src="/images/profile.jpg" className="imgProfile w-100 p-3 " alt="นายมานะ ยุปานันท์" ></img>
                    <ReactTypingEffect text={['I am Mana Yupanan', 'Welcom to my web']} speed={75} eraseDelay={150} className="typingeffect" />

                </div>
                <div className="col-sm"></div>
            </div>
            <div className="row">
               <div className="col-1">
               <Social/>
               </div>
            </div>



        </div>
    )
}


export default Home;