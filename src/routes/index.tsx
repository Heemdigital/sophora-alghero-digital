import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  ChevronRight,
  ExternalLink,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  Users,
  Wifi,
  X,
} from "lucide-react";
import { useState } from "react";

import detailAsset from "@/assets/691478948.jpg.asset.json";
import roomIvoryAsset from "@/assets/691479135.jpg.asset.json";
import deskAsset from "@/assets/691480882.jpg.asset.json";
import balconyAsset from "@/assets/691479182_1.jpg.asset.json";
import roomRoseAsset from "@/assets/691470605.jpg.asset.json";
import roomSageAsset from "@/assets/691468144.jpg.asset.json";
import roomRoseWideAsset from "@/assets/691470500.jpg.asset.json";
import roomDetailAsset from "@/assets/691470642.jpg.asset.json";
import bathroomAsset from "@/assets/691472005.jpg.asset.json";
import logoAsset from "@/assets/ChatGPT_Image_Sep_19_2026_04_45_26_PM.png.asset.json";

const WHATSAPP_URL =
  "https://wa.me/393715613206?text=Buongiorno%2C%20vorrei%20richiedere%20informazioni%20sulla%20disponibilit%C3%A0.";

const navItems = [
  ["Home", "#home"],
  ["La Guest House", "#guest-house"],
  ["Camere", "#camere"],
  ["Alghero", "#alghero"],
  ["Gallery", "#gallery"],
  ["Contatti", "#contatti"],
] as const;

const roomImages = [
  { src: roomIvoryAsset.url, alt: "Camera luminosa di Sophora Guest House con arredi naturali" },
  { src: roomRoseAsset.url, alt: "Camera di Sophora Guest House con parete rosa cipria" },
  { src: roomSageAsset.url, alt: "Camera di Sophora Guest House con parete verde salvia" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophora Guest House Alghero | Boutique Guest House in Sardegna" },
      {
        name: "description",
        content:
          "Sophora Guest House ad Alghero, Sardegna. Scopri gli ambienti e contattaci direttamente su WhatsApp per richiedere disponibilità.",
      },
      { property: "og:title", content: "Sophora Guest House Alghero" },
      {
        property: "og:description",
        content: "Un'accogliente guest house nel cuore di Alghero, curata, contemporanea e autentica.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BedAndBreakfast",
          name: "Sophora Guest House Alghero",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Alberto La Marmora, 86",
            postalCode: "07041",
            addressLocality: "Alghero",
            addressRegion: "SS",
            addressCountry: "IT",
          },
          telephone: "+39 371 561 3206",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            bestRating: "5",
            reviewCount: "27",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function AvailabilityLink({ className = "", children = "Richiedi disponibilità" }) {
  return (
    <a className={`button button-primary ${className}`} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
      <MessageCircle aria-hidden="true" size={18} />
      <span>{children}</span>
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

function FramedImage({ src, alt, className = "", loading = "lazy" }: { src: string; alt: string; className?: string; loading?: "eager" | "lazy" }) {
  return (
    <div className={`photo-frame ${className}`}>
      <img className="photo-backdrop" src={src} alt="" aria-hidden="true" loading={loading} />
      <img className="photo-original" src={src} alt={alt} loading={loading} />
    </div>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Navigazione principale">
        <a href="#home" className="wordmark" aria-label="Sophora Guest House, torna alla home">
          <span>Sophora</span>
          <small>Guest House · Alghero</small>
        </a>

        <nav className="desktop-nav" aria-label="Sezioni del sito">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <AvailabilityLink className="header-cta" />
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Menu mobile">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <AvailabilityLink />
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image hero-backdrop"
            src={roomRoseWideAsset.url}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
          />
          <img
            className="hero-image hero-original"
            src={roomRoseWideAsset.url}
            alt="Camera accogliente e luminosa di Sophora Guest House Alghero"
            fetchPriority="high"
          />
          <div className="hero-scrim" />
          <div className="hero-content">
            <p className="hero-location"><MapPin size={15} aria-hidden="true" /> Alghero · Sardegna</p>
            <h1 id="hero-title">Il tuo soggiorno<br />ad Alghero.</h1>
            <p className="hero-copy">
              Un'accogliente guest house nel cuore di Alghero, pensata per vivere la città con semplicità,
              comfort e autenticità.
            </p>
            <div className="hero-actions">
              <AvailabilityLink />
              <a className="button button-light" href="#guest-house">
                Scopri la Guest House <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true"><span>01</span><span>Sophora · Alghero</span></div>
        </section>

        <section id="guest-house" className="intro section-pad">
          <div className="intro-copy reveal">
            <SectionLabel>La Guest House</SectionLabel>
            <h2>Benvenuti<br />a Sophora.</h2>
            <p>
              Sophora Guest House nasce per offrire un soggiorno piacevole e rilassante ad Alghero, in un
              ambiente curato e accogliente.
            </p>
            <a className="text-link" href="#camere">Scopri gli spazi <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <figure className="intro-image reveal">
            <FramedImage src={balconyAsset.url} alt="Interno luminoso con accesso al balcone di Sophora Guest House" />
            <figcaption>Dettagli naturali, luce mediterranea.</figcaption>
          </figure>
        </section>

        <section id="camere" className="rooms section-pad">
          <div className="section-heading">
            <div>
              <SectionLabel>Le camere</SectionLabel>
              <h2>Spazi pensati<br />per stare bene.</h2>
            </div>
            <p>Ambienti curati, linee essenziali e una luce che racconta il Mediterraneo.</p>
          </div>

          <div className="room-list">
            {roomImages.map((room, index) => (
              <article className="room-row" key={room.src}>
                <div className="room-photo-wrap">
                  <span className="room-number">0{index + 1}</span>
                  <FramedImage className="room-photo" src={room.src} alt={room.alt} />
                </div>
                <div className="room-info">
                  <p className="placeholder-tag">Contenuto da completare</p>
                  <h3>Nome camera</h3>
                  <p>Breve descrizione della camera da inserire.</p>
                  <dl className="room-specs">
                    <div><dt><Users size={17} /> Ospiti</dt><dd>Da definire</dd></div>
                    <div><dt><BedDouble size={17} /> Letto</dt><dd>Da definire</dd></div>
                    <div><dt><Wifi size={17} /> Dotazioni</dt><dd>Da definire</dd></div>
                  </dl>
                  <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Scopri la camera <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-band" aria-label="Informazioni verificate">
          <div className="trust-intro">
            <SectionLabel>Perché Sophora</SectionLabel>
            <p>Un'ospitalità indipendente ad Alghero.</p>
          </div>
          <ol className="trust-list">
            <li><span>01</span><strong>5.0 su Google</strong></li>
            <li><span>02</span><strong>27 recensioni</strong></li>
            <li><span>03</span><strong>Wi-Fi gratuito</strong></li>
            <li><span>04</span><strong>Alghero, Sardegna</strong></li>
          </ol>
          <p className="rating-note"><Star size={16} fill="currentColor" /> Valutazione Google: 5.0/5 · 27 recensioni</p>
        </section>

        <section id="alghero" className="destination">
          <div className="destination-photo">
            <FramedImage src={bathroomAsset.url} alt="Vista luminosa verso Alghero dagli interni della guest house" />
          </div>
          <div className="destination-content">
            <SectionLabel>La destinazione</SectionLabel>
            <h2>Scopri<br />Alghero.</h2>
            <p>Una base ideale per vivere Alghero, passeggiare per la città e scoprire la Sardegna.</p>
            <ul className="destination-list">
              {['Centro storico', 'Mare', 'Ristoranti', 'Esperienze', 'Sardegna'].map((item, index) => (
                <li key={item}><span>0{index + 1}</span>{item}<ChevronRight size={18} aria-hidden="true" /></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="location section-pad" aria-labelledby="location-title">
          <div className="location-copy">
            <SectionLabel>Dove siamo</SectionLabel>
            <h2 id="location-title">Nel cuore<br />di Alghero.</h2>
            <address>
              Via Alberto La Marmora, 86<br />
              07041 Alghero SS<br />
              Italy
            </address>
            <a
              className="button button-outline"
              href="https://www.google.com/maps/search/?api=1&query=Via%20Alberto%20La%20Marmora%2086%2C%2007041%20Alghero%20SS%2C%20Italy"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={18} aria-hidden="true" /> Come arrivare
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="Mappa di Sophora Guest House Alghero"
              src="https://www.google.com/maps?q=Via%20Alberto%20La%20Marmora%2086%2C%2007041%20Alghero%20SS%2C%20Italy&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section id="gallery" className="gallery section-pad">
          <div className="section-heading gallery-heading">
            <div><SectionLabel>Gallery</SectionLabel><h2>Dentro<br />Sophora.</h2></div>
            <div className="gallery-categories" aria-label="Categorie gallery">
              <span>Guest House</span><span>Camere</span><span>Dettagli</span><span>Alghero</span>
            </div>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-main"><FramedImage src={roomRoseAsset.url} alt="Camera dai toni naturali e rosa di Sophora" /></figure>
            <figure><FramedImage src={detailAsset.url} alt="Targa in legno Sophora Guest House Alghero" /></figure>
            <figure><FramedImage src={deskAsset.url} alt="Scrivania e specchio illuminato nella guest house" /></figure>
            <figure className="gallery-wide"><FramedImage src={roomDetailAsset.url} alt="Dettaglio della camera con vista sulla zona lavoro" /></figure>
            <figure><FramedImage src={bathroomAsset.url} alt="Bagno contemporaneo e luminoso di Sophora" /></figure>
          </div>
        </section>

        <section className="reviews section-pad" aria-labelledby="reviews-title">
          <div className="reviews-score">
            <SectionLabel>Recensioni Google</SectionLabel>
            <div className="score">5.0<span>/5</span></div>
            <p>27 recensioni Google</p>
          </div>
          <div className="reviews-content">
            <h2 id="reviews-title">Chi è stato<br />da noi.</h2>
            <div className="review-grid">
              {[1, 2].map((item) => (
                <article className="review-placeholder" key={item}>
                  <div className="stars" aria-label="Valutazione 5 stelle">★★★★★</div>
                  <blockquote>“Recensione ospite”</blockquote>
                  <p>Testo originale da inserire</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contatti" className="contact">
          <div className="contact-photo">
            <FramedImage src={roomIvoryAsset.url} alt="Atmosfera calma di una camera Sophora Guest House" />
          </div>
          <div className="contact-content">
            <SectionLabel>Il tuo soggiorno</SectionLabel>
            <h2>Il tuo soggiorno<br />ad Alghero<br />inizia qui.</h2>
            <p>Contattaci direttamente per verificare la disponibilità e ricevere maggiori informazioni.</p>
            <div className="contact-actions">
              <AvailabilityLink />
              <a className="button button-outline-light" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" /> Scrivici su WhatsApp
              </a>
            </div>
            <a className="phone-link" href="tel:+393715613206"><Phone size={17} /> +39 371 561 3206</a>
            <div className="booking-note">
              <span>Preferisci prenotare tramite il portale?</span>
              <a href="https://www.booking.com/" target="_blank" rel="noreferrer">
                Prenota su Booking.com <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src={logoAsset.url} alt="Sophora Guest House Alghero" />
          <address>Via Alberto La Marmora, 86<br />07041 Alghero SS · Italy</address>
          <a href="tel:+393715613206">+39 371 561 3206</a>
        </div>
        <nav className="footer-nav" aria-label="Navigazione nel footer">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="footer-action">
          <AvailabilityLink />
          <p>Alghero · Sardegna</p>
        </div>
        <div className="footer-base">
          <span>© 2026 Sophora Guest House Alghero</span>
          <span>Boutique Guest House in Sardegna</span>
        </div>
      </footer>

      <a className="mobile-booking-bar" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        <MessageCircle size={20} aria-hidden="true" /> Richiedi disponibilità
      </a>
    </div>
  );
}