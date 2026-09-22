// import AboutSection from "../components/About/AboutSection";
// import { FaPlus } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa";

export default function Bible() {
    const verses = [
        {
            Book: 'Genesis',
            BookNumber: 1,
            Chapter: 13,
            VerseNumber: 13,
            VerseContent: 'But the men of Sodom were wicked and sinners before the Lord exceedingly.'
        },
        {
            Book: 'Genesis',
            BookNumber: 1,
            Chapter: 19,
            VerseNumber: 24,
            VerseContent: 'Then the Lord rained upon Sodom and upon Gomorrah brimstone and fire from the Lord out of heaven;'
        },
        {
            Book: 'Leviticus',
            BookNumber: 3,
            Chapter: 18,
            VerseNumber: 22,
            VerseContent: 'Thou shalt not lie with mankind, as with womankind: it is abomination.'
        },
        {
            Book: 'Leviticus',
            BookNumber: 3,
            Chapter: 20,
            VerseNumber: 13,
            VerseContent: 'If a man also lie with mankind, as he lieth with a woman, both of them have committed an abomination: they shall surely be put to death; their blood shall be upon them.'
        },
        {
            Book: 'Deuteronomy',
            BookNumber: 5,
            Chapter: 23,
            VerseNumber: 17 + '-18',
            VerseContent: 'There shall be no whore of the daughters of Israel, nor a sodomite of the sons of Israel. Thou shalt not bring the hire of a whore, or the price of a dog, into the house of the Lord thy God for any vow: for even both these are abomination unto the Lord thy God.'
        },
        {
            Book: '1 Kings',
            BookNumber: 11,
            Chapter: 14,
            VerseNumber: 24,
            VerseContent: 'And there were also sodomites in the land: and they did according to all the abominations of the nations which the Lord cast out before the children of Israel.'
        },
        {
            Book: '1 Kings',
            BookNumber: 11,
            Chapter: 15,
            VerseNumber: 11 + '-12',
            VerseContent: 'And Asa did that which was right in the eyes of the Lord, as did David his father. And he took away the sodomites out of the land, and removed all the idols that his fathers had made.'
        },
        {
            Book: '1 Kings',
            BookNumber: 11,
            Chapter: 22,
            VerseNumber: 46,
            VerseContent: 'And the remnant of the sodomites, which remained in the days of his father Asa, he took out of the land.'
        },
        {
            Book: 'Ezekiel',
            BookNumber: 26,
            Chapter: 16,
            VerseNumber: 49,
            VerseContent: 'Behold, this was the iniquity of thy sister Sodom, pride, fulness of bread, and abundance of idleness was in her and in her daughters, neither did she strengthen the hand of the poor and needy.'
        },
        {
            Book: 'Romans',
            BookNumber: 45,
            Chapter: 1,
            VerseNumber: 27 + '-32',
            VerseContent: 'And likewise also the men, leaving the natural use of the woman, burned in their lust one toward another; men with men working that which is unseemly, and receiving in themselves that recompence of their error which was meet. And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient; Being filled with all unrighteousness, fornication, wickedness, covetousness, maliciousness; full of envy, murder, debate, deceit, malignity; whisperers, Backbiters, haters of God, despiteful, proud, boasters, inventors of evil things, disobedient to parents, Without understanding, covenantbreakers, without natural affection, implacable, unmerciful: Who knowing the judgment of God, that they which commit such things are worthy of death, not only do the same, but have pleasure in them that do them.'
        },
        {
            Book: '2 Peter',
            BookNumber: 61,
            Chapter: 2,
            VerseNumber: 6 + '-9',
            VerseContent: 'And turning the cities of Sodom and Gomorrha into ashes condemned them with an overthrow, making them an ensample unto those that after should live ungodly; And delivered just Lot, vexed with the filthy conversation of the wicked: (For that righteous man dwelling among them, in seeing and hearing, vexed his righteous soul from day to day with their unlawful deeds;) The Lord knoweth how to deliver the godly out of temptations, and to reserve the unjust unto the day of judgment to be punished:'
        },
        {
            Book: 'Jude',
            BookNumber: 65,
            Chapter: 1,
            VerseNumber: 7,
            VerseContent: 'Even as Sodom and Gomorrha, and the cities about them in like manner, giving themselves over to fornication, and going after strange flesh, are set forth for an example, suffering the vengeance of eternal fire.'
        },
    ]
    return (
        <div className="main">
            <h1>bible</h1>
            {verses.map(
                ({ Book, BookNumber, Chapter, VerseNumber, VerseContent }, index) => (
                    <div key={index} className="verse-container">
                        <div className="verse-reference">{Book} {Chapter}:{VerseNumber}</div>
                        <div className="verse-content">{VerseContent}</div>
                    </div>
                )
            )
            }
        </div >
    )
}