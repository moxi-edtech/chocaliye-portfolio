"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

export function ScrollIndicator({ sections }: { sections: readonly Section[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = sections
      .map(section => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const update = () => {
      const marker = window.innerHeight * 0.42;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      nodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        const distance =
          rect.top <= marker && rect.bottom >= marker
            ? 0
            : Math.min(Math.abs(rect.top - marker), Math.abs(rect.bottom - marker));

        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      setActive(bestIndex);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);

  return (
    <nav className="scrollIndicator" aria-label="Navegação por seções">
      <div className="scrollIndicatorTrack">
        {Array.from({ length: 28 }).map((_, index) => (
          <span
            aria-hidden="true"
            className={`scrollTick ${index % 4 === 0 ? "scrollTickMajor" : ""}`}
            key={index}
          />
        ))}

        <div className="scrollSections">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`scrollSection ${index === active ? "is-active" : ""}`}
              style={{ top: `${(index / Math.max(sections.length - 1, 1)) * 100}%` }}
              aria-current={index === active ? "location" : undefined}
            >
              <span>{section.label}</span>
              <i aria-hidden="true" />
            </a>
          ))}
        </div>

        <span
          className="scrollMarker"
          style={{ top: `${(active / Math.max(sections.length - 1, 1)) * 100}%` }}
          aria-hidden="true"
        />
      </div>

      <span className="scrollCount" aria-hidden="true">
        {String(active + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
      </span>
    </nav>
  );
}
