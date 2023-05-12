import React from 'react'

const FaqSection = () => {
    return (
        <div className="next-section faq" id='faq'>
            <div className="title in-view">
                <div>Frequently Asked Questions?</div>
            </div>
            <div className="hang-pic">
                <img src="https://gineousc.sirv.com/Images/icons/undraw_faq_re_31cw.svg" alt="friendly Pic" />
            </div>
            <div className="p">Everything you need to know about OffrCloud. Can't find the answer you're looking for? Please Contact us to get in contact with our <i>friendly team</i>.</div>
            <div className="Qs">
                <section>
                    <span>What is a security token?</span>
                    <span>A digital representation of a traditional security issued and traded on blockchain. Allows businesses to raise capital and offer investors a share in profits or assets.</span>
                </section>
                <section>
                    <span>Why should I consider creating a security token for my business?</span>
                    <span>Provides increased access to capital, greater transparency and security for investors, and the ability to reach a global audience.</span>
                </section>
                <section>
                    <span>What are the benefits of using your platform?</span>
                    <span>“Our platform allows enterprises greater access to capital to fund their business’s individual
                        needs. As opposed to high interest loans from banks, leverage retail investors’ capital at a lower
                        interest rate”.</span>
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
                    <span>Comprehensive support including guidance on token economics, legal compliance, and marketing strategies.</span>
                </section>
                <section>
                    <span>How does your platform help manage token sales and dividends?</span>
                    <span>User-friendly dashboard for managing token sales and dividends, including tools for tracking sales progress and distributing dividends.</span>
                </section>
                <section>
                    <span>What are your fees?</span>
                    <span>Competitive and transparent, based on specific services required. Contact us for a personalized quote.</span>
                </section>
                <section>
                    <span>What security measures are in place to protect my token and investment?</span>
                    <span>Secure storage of tokens and funds, robust identity verification, and ongoing monitoring of the platform for potential threats or vulnerabilities.</span>
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