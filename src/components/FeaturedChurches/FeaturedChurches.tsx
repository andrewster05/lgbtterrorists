import * as React from "react";
import churchesJSON from "./churches.json";
import { ReactComponent as PhoneIcon } from "@fortawesome/fontawesome-free/svgs/solid/phone.svg"
import { ReactComponent as FacebookIcon } from "@fortawesome/fontawesome-free/svgs/brands/facebook-f.svg"
import { ReactComponent as AddressCardIcon } from "@fortawesome/fontawesome-free/svgs/solid/address-card.svg"
import { ReactComponent as GlobeIcon } from "@fortawesome/fontawesome-free/svgs/solid/globe.svg"

export default function FeaturedChurches(): JSX.Element {
    const churches = churchesJSON.churches;

    return (
        <section className="featured-churches">
            {churches.map(({ name, pictureURL, phone, facebook, address,website }) => (
                <article key={name}>
                    <img src={pictureURL} alt={name} />
                    <div>
                        <h2>{name} Baptist Church{/* No support for non-baptist Churches */}</h2>
                        <address>
                            <a href={`tel:${phone[0]}${phone[1]}${phone[2]}`} target="_blank" rel="noreferrer">
                                <PhoneIcon />
                                <span>({phone[0]})-{phone[1]}-{phone[2]}</span>
                            </a>
                            <a href={`https://facebook.com/${facebook}`} target="_blank" rel="noreferrer">
                                <FacebookIcon />
                                <span>@{facebook}</span>
                            </a>
                            <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address.join(" "))}`} target="_blank" rel="noreferrer">
                                <AddressCardIcon />
                                <pre>{address.join("\n")}</pre>
                            </a>
                            <a href={website} target="_blank" rel="noreferrer">
                                <GlobeIcon />
                                <span>{website}</span>
                            </a>
                        </address>
                    </div>
                </article>
            ))}

        </section>
    )
}