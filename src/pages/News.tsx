// import AboutSection from "../components/About/AboutSection";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import moment from "moment";

export default function News() {
    const articles = [
        {
            Year: '2025',
            Links: [
                {
                    LinkSrc: 'https://www.pressreader.com/usa/the-oklahoman/20250527/281492167241547?srsltid=AfmBOooT4Dz8BHlr_n5dB9_5tXuSO1VOCrWlR_b_ypapHgSjltR6OyTa',
                    DateTime: new Date('May 27, 2025'),
                    Title: "'IT'S TERRIFYING'",
                    Info: 'Oklahoma church being harassed for believing Leviticus 20:13.',
                    Tags: ['Media']
                }
            ]
        },
         {
            Year: '2023',
            Links: [
                {
                    LinkSrc: 'https://www.dallasnews.com/news/faith/2023/07/14/theyre-not-welcome-here-anti-lgbtq-church-moves-to-dallas-county-amid-protests/',
                    DateTime: new Date('July 14, 2023'),
                    Title: "‘They’re not welcome here’: Anti-LGBTQ church moves to Dallas County amid protests",
                    Info: 'Stedfast Baptist Church was forced out of two locations in Tarrant County last year. It recently bought a new home in Cedar Hill.',
                    Tags: ['Media', 'Protests']
                }
            ]
        },
        {
            Year: '2022',
            Links: [
                {
                    LinkSrc: 'https://reason.com/volokh/2022/10/21/churchs-standard-commercial-lease-forbids-offensive-activity-does-that-cover-offensive-sermons/',
                    DateTime: new Date('October 21, 2022'),
                    Title: "Church's Standard Commercial Lease Forbids 'Offensive' 'Activity'; Does That Cover Offensive Sermons",
                    Info: 'Texas church going through eviction lawsuit over preaching against sodomites.',
                    Tags: ['Censorship', 'Legal']
                },
                {
                    LinkSrc: 'https://www.nbcnews.com/nbc-out/out-news/texas-pastor-says-gay-people-shot-back-head-shocking-sermon-rcna32748',
                    DateTime: new Date('June 06, 2022'),
                    Title: "Texas pastor says gay people should be 'shot in the back of the head' in shocking sermon",
                    Info: 'Media melts down after preacher advocates for the legal death penalty for sodomites.',
                    Tags: ['Media', 'Protests']
                },
                {
                    LinkSrc: 'https://www.advocate.com/news/2022/8/15/texas-residents-protest-church-calls-executing-lgbtq-people',
                    DateTime: new Date('August 15, 2022'),
                    Title: 'Texas Residents Protest Church That Calls for Executing LGBTQ+ People',
                    Info: 'Protesters target local new testament church for preaching the truth about the sodomites.',
                    Tags: ['Protests']
                }
            ]
        },
        {
            Year: '2021',
            Links: [
                {
                    LinkSrc: 'https://www.thenewcivilrightsmovement.com/2021/07/i-really-mean-it-texas-pastor-doubles-down-on-kill-the-gays-sermon-youtube-hasnt-removed-his-churchs-channel/',
                    DateTime: new Date('July 1, 2021'),
                    Title: '‘I Really Mean It!’: Texas Pastor Doubles Down on ‘Kill the Gays’ Sermon — YouTube Hasn’t Removed His Church’s Channel',
                    Info: 'The news media demonizes churches for their beliefs and attempts to censor their content.',
                    Tags: ['Censorship']
                }
            ]
        },
        {
            Year: '2016',
            Links: [
                {
                    LinkSrc: 'https://www.nytimes.com/2016/06/28/us/pastors-praise-anti-gay-massacre-in-orlando-prompting-outrage.html',
                    DateTime: new Date('June 28, 2016'),
                    Title: 'Pastors Praise Anti-Gay Massacre in Orlando, Prompting Outrage',
                    Info: 'California church protested after Pastor preaches a sermon called, "The Christian Response to the Orlando Shooting."',
                    Tags: ['Protests']
                }
            ]
        },
        {
            Year: '2015',
            Links: [
                {
                    LinkSrc: 'https://www.texasobserver.org/texas-churches-make-list-of-anti-lgbt-hate-groups/',
                    DateTime: new Date('May 13, 2015'),
                    Title: 'TEXAS CHURCHES MAKE INFAMOUS ANTI-LGBT HATE GROUPS LIST',
                    Info: 'Texas churches targeted by special interest groups to discriminate against their Biblical views.',
                    Tags: ['Media', 'Censorship']
                }
            ]
        },
    ]
    return (
        <div className="main">
            <h1 className="news-page-header">News</h1>
            <div className="news-container">
                {articles.sort(function (a, b) {
                    const date1: any = a.Year;
                    const date2: any = b.Year;

                    return date2 - date1;
                }).map(({ Year, Links }, index) => (
                    <div key={index}>
                        <h2 className="year">{Year === moment(new Date()).format('YYYY') ? 'Recent' : Year}</h2>
                        {
                            Links.sort(function (a, b) {
                                const date1: any = a.DateTime;
                                const date2: any = b.DateTime;

                                return date2 - date1;
                            }).map(({ LinkSrc, DateTime, Title, Info, Tags }, index) => (
                                <div key={index} className="news">
                                    <div className="inner-news">
                                        <span className="news-date">{moment(DateTime).format('MMM DD, YYYY')}</span>
                                        <h3 className="news-title">{Title}</h3>
                                        <span className="news-info">{Info}</span>
                                        <a className="news-link" target="_blank" href={LinkSrc}>{LinkSrc}</a>
                                        <div className="news-tags">
                                            {Tags.map((tag) => (<div key={tag} className={"news-tag news-tag-" + tag}>#{tag}</div>))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}