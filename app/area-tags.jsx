'use client';

import { useState } from 'react';

export function AreaTags({ areas }) {
  const [activeArea, setActiveArea] = useState(areas[0]);

  return (
    <div className="area-tags" aria-label="Service areas">
      {areas.map((area) => (
        <button
          className={area === activeArea ? 'active' : ''}
          key={area}
          type="button"
          aria-pressed={area === activeArea}
          onClick={() => setActiveArea(area)}
        >
          {area}
        </button>
      ))}
    </div>
  );
}
