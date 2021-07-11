import React from 'react';
import './overview.css'
import { Link } from 'react-router-dom';

function Overview() {
    return (
        <>
            <div className="general-container">
                <main>
                    <section className="glass">
                        <div className="firstsection">
                            <div className="User">
                                <img src="https://cdn.pixabay.com/photo/2015/07/29/00/08/photographer-865295_960_720.jpg" alt="should" />
                                <h3>Omonayin Bamidele</h3>
                                <h6>Photographer</h6>
                            </div>
                            <div className="link" >

                                <Link to="/sign-up" className="hori" style={{ textDecoration: "none" }}>

                                    <img src="images/twitch.png" alt="steam" /><h1>Streams</h1>

                                </Link>

                                <Link to="/sign-up" className="hori" style={{ textDecoration: "none" }}>

                                    <img src="images/upcoming.png" alt="steam" /><h1>Games</h1>

                                </Link>

                                <Link to="/sign-up" className="hori" style={{ textDecoration: "none" }}>

                                    <img src="images/steam.png" alt="steam" /><h1>New</h1>

                                </Link>

                                <Link to="/sign-up" className="hori" style={{ textDecoration: "none" }}>

                                    <img src="images/library.png" alt="steam" /><h1>Library</h1>

                                </Link>


                            </div>

                            <div className="program">
                                <p>Join pro <br />for free games</p>
                                <img src="images/controller.png" alt="" />
                            </div>
                        </div>
                        <div className="Secondsection">
                            <div className="status">
                                <h1>Active game</h1>
                                <form>
                                    <input type="text" name="name" />
                                </form>
                            </div>
                            <div className="cards-container">
                                <div className="cards flexrow">
                                    <img src="images/assassins.png" alt="" />
                                    <div className="desc">
                                        <h1>Assasin Creed Valhala</h1>
                                        <h3>Version</h3>
                                        <div className="progress"></div>
                                    </div>
                                    <h2>60%</h2>
                                </div>
                                <div className="cards flexrow">
                                    <img src="images/sackboy.png" alt="" />
                                    <div className="desc">
                                        <h1>Sackboy A great Adventure</h1>
                                        <h3>Version</h3>
                                        <div className="progress"></div>
                                    </div>

                                    <h2>60%</h2>
                                </div>
                                <div className="cards flexrow">
                                    <img src="images/spiderman.png" alt="" />
                                    <div className="desc">
                                        <h1>Spiderman MilesMorales</h1>
                                        <h3>Version</h3>
                                        <div className="progress"></div>
                                    </div>

                                    <h2>60%</h2>
                                </div>

                            </div>

                        </div>
                    </section>
                </main>

                <div className="circle1">

                </div>

                <div className="circle2">

                </div>

            </div>

        </>
    )
}

export default Overview
