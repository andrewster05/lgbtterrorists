export default function AboutSection({ title, subtitle, body, imgURL, img2URL,index }: { title: string, subtitle: string, body: JSX.Element, imgURL: string, img2URL: string | undefined,index: number }) {
    return (
        <section>
            <div className="content-side">
                <header>
                    <p className="numbers">0{index}</p>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </header>
                {body}
            </div>
            <div className="imageWrapper">
                {console.log(imgURL)}
                <div className={`img${img2URL ? ' has-img2' : ''}`} style={{ color: 'blue', backgroundImage: `url("${imgURL}")` }}></div>
                {img2URL && <div className="img2" style={{ backgroundImage: `url("${img2URL}")` }} />}
            </div>
        </section>
    )
}