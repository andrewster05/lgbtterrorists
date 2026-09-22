import AboutSection from "../components/About/AboutSection";

export default function About() {
    const sections = [
        {
            title: "THE FILM",
            subtitle: "LGBT TERRORISTS EXPOSED",
            body: (
                <>
                    <p>
                        This documentary focuses on the historical perspective of sodomy and the consequences it has on society. The United States has dramatically shifted its view from the death penalty to drag queen story hour, while the Bible has remained unchanged. The Rapid decline of morality in our country is due to a severe lack of knowledge and fear of the LORD. We need Christians to be stedfast against this evil agenda by not being ashamed of Christ's words. (Mark 8:38)
                    </p>

                    <p>
                        This film demonstrates that being a sodomite was illegal and strictly punished in North America since well before the founding of the United States. Since the 1500's with the early settlers, to well past the signing of our Declaration of Independence, all the way into the early 2000's, this film proves that homosexuality has consistently been a criminal offense in America.
                    </p>
                    <p>
                        This documentary also investigates the tactics that the news outlets, movies, TV shows, and other forms of media have employed to brainwash an entire generation of people into believing lies. This film dispells several myths about the LGBT. We've all heard the monotonous platitudes, "Love is love". "They're just born that way". "They just want to get married". "Love wins". Were the founding fathers and Christians wrong about homosexuality? Or has apathy by Christians allowed the the devil to bring many under the Sodomite Deception?
                    </p>
                </>
            ),
            imgURL: "/img/about/blinded.png",
            img2URL: "/img/about/cityofsodom.png"
        },
        {
            title: "The Facts",
            subtitle: "TIMELINE OF LAWS REGARDING HOMOSEXUALITY AND SODOMY",
            body: (
                <>
                    <p>
                        <strong>1500's</strong> <i>- Laws Against Sodomy in Colonial America</i>
                    </p>
                    <p>
                        1533, The Buggery Act, enacted by King Henry 8th, condemned convicted sodomites to death. This law remained unchanged until 1861.
                    </p>

                    <p>
                        <strong>1600's</strong> <i>- Laws Against Sodomy in Colonial America</i>
                    </p>
                    <p>
                        1612, The Laws of the Colony of Virginia says in section 9, "No man shall commit the horrible, and detestable sins of Sodomy upon pain of death..."
                    </p>
                
                    <p>
                        <strong>1700's</strong> <i>- Laws Against Sodomy in Colonial America</i>
                    </p>
                    <p>
                        1776, The University of Nebraska published, "In 1776, male homosexuals in the original 13 colonies were universally subject to the death penalty."
                    </p>
                    <p>
                        <strong>1800's</strong> <i>- Laws Against Sodomy in the United States of America</i>
                    </p>
                    <p>
                        1868, Florida Law made sodomy a felony stating, "Whoever commits the abominable and detestable crime against nature, either with mankind or with beast, shall be punished by imprisonment in the State prison not exceeding twenty years."
                    </p>
                    <p>
                        <strong>1900's</strong> <i>- Enforcement Against Sodomy in the United States of America</i>
                    </p>
                    <p>
                        1903, New York City Police raided the Ariston Bath House, arresting 60 sodomites.
                    </p>
                    <p>1961, Los Angeles Police Department creates documentary called, "Boys Beware", warning the public about the predatory tactics of sodomites.</p>
                    <p>
                        <strong>2000's</strong> <i>- The Legalization of Sodomy</i>
                    </p>
                    <p>
                        2003, Supreme Court Case Lawrence v Texas decriminalized homosexuality nationwide. This ruling prevents states from making new laws against sodomy, and renders the laws currently on the books unenforceable.
                    </p>
                </>
            ),
            imgURL: '/img/about/lot.png',
        }
    ]
    return (
        <div className="about">
            {sections.map(({ title, subtitle, body, imgURL,img2URL }, index) => (
                <AboutSection title={title} subtitle={subtitle} body={body} imgURL={imgURL} img2URL={img2URL} key={index} index={index+1} />
            ))}
        </div>
    )
}