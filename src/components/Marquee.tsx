import { marqueeItems } from '../content'

export function Marquee() {
  // Rendered twice so the track can scroll to -50% and wrap seamlessly.
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" id="marquee">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
