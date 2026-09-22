// import AboutSection from "../components/About/AboutSection";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function Faq() {
  
    return (
        <div className="main">
            <h1 id="faq-header">Frequently Asked Questions</h1>
            <div className="faq-container">
                <div className="accordion">
                   <div className="accordion-item" id="Doesn't+God+Love+Everyone?">
                        <a className="accordion-link" href="#Doesn't+God+Love+Everyone?">
                            Doesn't God love everyone?
                            <FaPlus className="plus-icon"/>
                            <FaMinus className="minus-icon" />
                        </a>
                        <div className="answer">
                            <p>No. While God loves the vast majority of the people on this planet, the Bible is abundantly clear that God does in fact hate some people. Consider some of the following verses. <span className="bible-verse">Psalm 5:5 The foolish shall not stand in thy sight: thou hatest all workers of iniquity. Psalm 11:5 
The Lord trieth the righteous: but the wicked and him that loveth violence his soul hateth.</span> In Leviticus 20, the same chapter where God prescribes the death penalty for sodomites, God explains that he hated the people that were commiting all the abominations that God prohibited in this chapter. <span className="bible-verse">Leviticus 20:23 And ye shall not walk in the manners of the nation, which I cast out before you: for they committed all these things, and therefore I abhorred them.</span></p>
                        </div>
                    </div> 

                    <div className="accordion-item" id="Aren't+Homosexuals+Born+That+Way?">
                        <a className="accordion-link" href="#Aren't+Homosexuals+Born+That+Way?">
                            Aren't homosexuals "born that way?"
                            <FaPlus className="plus-icon"/>
                            <FaMinus className="minus-icon" />
                        </a>
                        <div className="answer">
                            <p>No. The Bible explains that the way someone can be given over to unnatural sins like homosexuality, beastiality, pedophilia, etc is by first rejecting God. Some people reject God and truth in general so many times that God gives up on them and gives them over to a reprobate mind to do things that don't come naturally. <span className="bible-verse">(Romans 1:20-32)</span> There is zero scientific evidence that shows there is any such thing as a "gay gene", or any other evidence that would prove people are born as a homosexual.</p>
                        </div>
                    </div>

                    <div className="accordion-item" id="question3">
                        <a className="accordion-link" href="#question3">
                            Can a homosexual be saved?
                            <FaPlus className="plus-icon"/>
                            <FaMinus className="minus-icon" />
                        </a>
                        <div className="answer">
                            <p>The only thing stopping a person from getting saved is them putting all their faith and trust in the finished work of Jesus Christ. A reprobate however, is someone who is rejected by God and someone who's heart is hardened to the point where they will never believe. Here's an example of Jesus preaching against some reprobates in the New Testament. <span className="bible-verse">John 12:36-40 While ye have light, believe in the light, that ye may be the children of light. These things spake Jesus, and departed, and did hide himself from them. But though he had done so many miracles before them, yet they believed not on him: That the saying of Esaias the prophet might be fulfilled, which he spake, Lord, who hath believed our report? and to whom hath the arm of the Lord been revealed? Therefore they <strong>could not believe,</strong> because that Esaias said again, He hath blinded their eyes, and hardened their heart; that they should not see with their eyes, nor understand with their heart, and be converted, and I should heal them.</span></p>
                        </div>
                    </div>

                    <div className="accordion-item" id="question5">
                        <a className="accordion-link" href="#question5">
                            What about 1 Corinthians 6?
                            <FaPlus className="plus-icon"/>
                            <FaMinus className="minus-icon" />
                        </a>
                        <div className="answer">
                            <p>The King James Bible uses the phrase "abusers of themselves with mankind", which can be easily understood as a prostitute. This passage does not support the idea that Christians used to be former sodomites.</p>
                        </div>
                    </div>

                    <div className="accordion-item" id="question6">
                        <a className="accordion-link" href="#question6">
                            What can I do to fight back against the LGBT movement?
                            <FaPlus className="plus-icon"/>
                            <FaMinus className="minus-icon" />
                        </a>
                        <div className="answer">
                            <p>You need to speak the truth and join a fundamental Baptist church that believes the Bible on this subject.</p>
                        </div>
                    </div>

                    <div className="accordion-item" id="question7">
                        <a className="accordion-link" href="#question7">
                            Do you condone of violence against the LGBT?
                            <FaPlus className="plus-icon"/>
                            <FaMinus className="minus-icon" />
                        </a>
                        <div className="answer">
                            <p>No. Violence is an unlawful harm or injury to someone that is innocent. The death penatly is a punishment and not an act of violence.</p>
                        </div>
                    </div>

                    <div className="accordion-item" id="question8">
                        <a className="accordion-link" href="#question8">
                            Why do you care about what people do in private?
                            <FaPlus className="plus-icon"/>
                            <FaMinus className="minus-icon" />
                        </a>
                        <div className="answer">
                            <p>This is a meaningless platitude. All moral laws restrict bad behaviour regardless if it is done in private. Other examples include giving alcohol to minors, incest, etc.</p>
                        </div>
                    </div>

                    <div className="accordion-item" id="question9">
                        <a className="accordion-link" href="#question9">
                            I know a homosexual who is saved. Doesn't this discredit your doctrine?
                            <FaPlus className="plus-icon"/>
                            <FaMinus className="minus-icon" />
                        </a>
                        <div className="answer">
                            <p>Almost no homosexuals claim to believe in Jesus as their saviour trusting in faith alone salvation. A small handful of people may repeat this rhetoric but they are either lying, confused, or perhaps were never given over to a reprobate mind. Those who are promoting and desiring a homosexual lifestyle are reprobates and will never choose to believe in Jesus.</p>
                        </div>
                    </div>

                    <div className="accordion-item" id="question10">
                        <a className="accordion-link" href="#question10">
                            Do you believe in conversion therapy?
                            <FaPlus className="plus-icon"/>
                            <FaMinus className="minus-icon" />
                        </a>
                        <div className="answer">
                            <p>No. Someone who has been given over to a reprobate mind cannot be shocked out of it. They should be punished according to the Bible.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}