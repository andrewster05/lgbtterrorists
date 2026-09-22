import * as React from "react";

export default function CastBannner(): JSX.Element {
    const cast = [
        { role: "Director", name: "Jonathan Shelley" },
        { role: "Executive Producer", name: "Stedfast Baptist Church" },
        { role: "Editor", name: "Ben Naim" },
        { role: "Cinematographer", name: "Dillon Awes" },
        { role: "Featuring", name: "Pastor Steven Anderson" },
        { role: "Featuring", name: "Pastor Roger Jimenez" },
        { role: "Featuring", name: "Pastor Bruce Mejia" },
        { role: "Featuring", name: "Pastor Aaron Thompson" },
       
    ]
    return (
        <div className="cast-banner">
            {cast.map(({ role, name }, i) => (
                <div key={i}>
                    <div>
                        <p className="role">{role}</p>
                        <p className="name">{name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}