
export default function Footer() {

    return (
        <section className="footerContainer">
                    <div className="section-3">
                        <div className="section-3-container-collab">
                            <img src="./Collab.png" alt="Collab" />
                            <p className="collab-p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                                faucibus facilisis sem eget sed amet consectetur tincidunt mauris.
                            </p>
                            <div className="collab-follow">
                                <b>Follow us on:</b>
                            </div>
                            <div>
                                <img src="/#" alt="" />
                                <img src="/#" alt="" />
                                <img src="/#" alt="" />
                                <img src="/#" alt="" />
                            </div>
                        </div>

                        <div className="section-3-container">
                            <div className="section-3-container-links">
                                <div className="footer-information-item">
                                    <b>Company</b>
                                    <ul>
                                        <li><a href="/#">About</a></li>
                                        <li><a href="/#">Product</a></li>
                                        <li><a href="/#">Team</a></li>
                                    </ul>
                                </div>
                                <div className="footer-information-item">
                                    <b>Resources</b>
                                    <ul>
                                        <li><a href="/#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="footer-information-item">
                                    <b>Legal</b>
                                    <ul>
                                        <li><a href="/#">Terms of Service</a></li>
                                        <li><a href="/#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <span><b>Contact Us at:</b></span>
                            <span className="contact-text">phanikondru@gmail.com</span>
                        </div>
                    </div>
                </section>

    )
}