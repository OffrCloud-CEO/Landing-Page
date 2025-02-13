import React from 'react'

const FaqSection = () => {
    return (
        <div className="next-section faq" id='faq'>
            <div className="title in-view">
                <div>Frequently Asked Questions</div>
            </div>
            <div className="hang-pic">
                <img src="https://gineousc.sirv.com/Images/icons/undraw_faq_re_31cw.svg" alt="friendly Pic" />
            </div>
            <div className="p"><span>Everything you need to know about OffrCloud. Can't find the answer you're looking for? Please </span><a href='#contact' className='text-primary'>Contact us</a><span> to get in contact with our friendly team.</span></div>
            <div className="Qs">
                <section>
                    <span>What is a security token?</span>
                    <span>A digital representation of a traditional security on blockchain. It allows businesses to access crypto assets for projects.</span>
                </section>
                <section>
                    <span>Why should I consider creating a security token for my business?</span>
                    <span>Provides increased access to capital, greater transparency & security for investors, & the ability to reach a global audience.</span>
                </section>
                <section>
                    <span>What are the benefits of using your platform?</span>
                    <span>Our platform allows enterprises greater access to capital to fund their business needs. As opposed to high interest loans from banks, leverage retail crypto investors’ capital at a lower interest rate.</span>
                </section>
                <section>
                    <span>What is a debt token?</span>
                    <span>An interest-accruing security token representing the debt owed the token holder by a company.
                        When the company earns profits, it repays the loan to its token holders in accordance with the
                        established loan terms.</span>
                </section>
                <section>
                    <span>How do I get started creating a security token on your platform?</span>
                    <span>Schedule a Live Demo or Contact Us. Our team is available to provide support.</span>
                </section>
                <section>
                    <span>What support do you offer during the creation process?</span>
                    <span>We offer comprehensive support including guidance on token economics, legal compliance, & marketing strategies.</span>
                </section>
                <section>
                    <span>How does your platform help manage token sales & dividends?</span>
                    <span>We provide a user-friendly dashboard to manage token sales & dividend distribution with ease. It includes tools for tracking sales & progress, in addition to dividend metric charts.</span>
                </section>
                <section>
                    <span>What are your fees?</span>
                    <span>Our fees are competitive and transparent based on our suite of services. Contact us for a personalized plan.</span>
                </section>
                <section>
                    <span>What security measures are in place to protect my token & investment?</span>
                    <span>Secure storage of tokens & assets, robust identity verification, & ongoing monitoring of platforms for potential threats or vulnerabilities.</span>
                </section>
            </div>
            <div className="more">
                <div className="img">
                    <img src="https://gineousc.sirv.com/Images/icons/undraw_conversation_re_c26v%20(1).svg" alt="conversation.svg" />
                </div>
                <div className="txt">
                    <span>Still have questions?</span>
                    <span>Can't find the answer you're looking for? Please feel free to Contact us.</span>
                </div>
                <a href='#contact' className="btnx">Get in touch</a>
            </div>
        </div>
    )
}

export default FaqSection