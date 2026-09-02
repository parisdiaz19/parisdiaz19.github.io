import { hero, site } from '../content'

/**
 * Splits text into word spans for the staggered headline reveal.
 * Each word is wrapped in an overflow-hidden `.word` with an inner span
 * that GSAP slides up into view. Whitespace is preserved as text nodes.
 */
function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\s+)/).map((piece, i) => {
        if (piece === '') return null
        if (/^\s+$/.test(piece)) return ' '
        return (
          <span className="word" key={i}>
            <span>{piece}</span>
          </span>
        )
      })}
    </>
  )
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <h1 id="headline">
        <Words text={hero.headlineBefore} />
        <em>
          <Words text={hero.headlineEmphasis} />
        </em>
        <Words text={hero.headlineAfter} />
      </h1>
      <p className="sub" data-hero="">
        {hero.sub}
      </p>
      <p className="meta" data-hero="">
        {site.location}
      </p>
      <div className="links" data-hero="">
        <a className="btn btn-primary" data-magnetic="" href={`mailto:${site.email}`}>
          {hero.primaryCta}
        </a>
        <a className="btn btn-ghost" data-magnetic="" href="#work">
          {hero.secondaryCta}
        </a>
      </div>
    </header>
  )
}
