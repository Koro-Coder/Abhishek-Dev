import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import { useTheme } from '../context/ThemeContext';

// Inline SVG Data URIs for instant zero-latency loading of autumn leaves
const LEAF_SVG_DATA_URIS = [
  // 1. Maple Leaf (Warm Autumn Amber)
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path d="M24 4 L26 14 L33 11 L32 18 L40 18 L34 25 L39 30 L30 31 L29 37 L24 33 L19 37 L18 31 L9 30 L14 25 L8 18 L16 18 L15 11 L22 14 Z" fill="%23EA580C" stroke="%231F2937" stroke-width="2" stroke-linejoin="round"/><path d="M24 33 L24 44" stroke="%231F2937" stroke-width="2.5" stroke-linecap="round"/><path d="M24 30 L24 16 M24 24 L31 19 M24 24 L17 19 M24 28 L32 27 M24 28 L16 27" stroke="%239A3412" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  // 2. Oak Leaf (Golden Yellow)
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path d="M24 5 C28 8 32 9 30 14 C35 16 36 21 32 24 C36 28 34 32 30 34 C31 37 28 39 25 38 L25 44 L23 44 L23 38 C20 39 17 37 18 34 C14 32 12 28 16 24 C12 21 13 16 18 14 C16 9 20 8 24 5 Z" fill="%23F59E0B" stroke="%231F2937" stroke-width="2" stroke-linejoin="round"/><path d="M24 10 L24 38" stroke="%23B45309" stroke-width="1.5" stroke-linecap="round"/><path d="M24 17 L29 14 M24 17 L19 14 M24 25 L31 22 M24 25 L17 22 M24 32 L29 30 M24 32 L19 30" stroke="%23B45309" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  // 3. Crimson Autumn Leaf
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path d="M24 6 C34 14 36 26 27 36 L24 44 L21 36 C12 26 14 14 24 6 Z" fill="%23DC2626" stroke="%231F2937" stroke-width="2" stroke-linejoin="round"/><path d="M24 10 L24 38" stroke="%23991B1B" stroke-width="1.5" stroke-linecap="round"/><path d="M24 18 L29 15 M24 18 L19 15 M24 26 L30 23 M24 26 L18 23 M24 33 L28 31 M24 33 L20 31" stroke="%23991B1B" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  // 4. Golden Birch Leaf
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path d="M24 6 C32 10 38 18 36 28 C34 35 28 37 25 38 L25 44 L23 44 L23 38 C20 37 14 35 12 28 C10 18 16 10 24 6 Z" fill="%23D97706" stroke="%231F2937" stroke-width="2" stroke-linejoin="round"/><path d="M24 10 L24 38" stroke="%2378350F" stroke-width="1.5" stroke-linecap="round"/><path d="M24 16 L30 14 M24 16 L18 14 M24 23 L32 20 M24 23 L16 20 M24 30 L29 28 M24 30 L19 28" stroke="%2378350F" stroke-width="1.2" stroke-linecap="round"/></svg>`
];

export const SeasonalParticles: React.FC = () => {
  const { theme } = useTheme();
  const [leafImages, setLeafImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    // Pre-create image elements from SVG data URIs
    const images: HTMLImageElement[] = LEAF_SVG_DATA_URIS.map((uri) => {
      const img = new Image();
      img.src = uri;
      return img;
    });

    // Wait until images load before setting state
    let loadedCount = 0;
    images.forEach((img) => {
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          setLeafImages(images);
        }
      };
      // In case data URIs trigger instantly
      if (img.complete) {
        loadedCount += 1;
        if (loadedCount === images.length) {
          setLeafImages(images);
        }
      }
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden select-none"
    >
      {theme === 'light' ? (
        // Autumn / Fall Theme: 3D Tumbling Leaves over warm cream background
        leafImages.length > 0 ? (
          <Snowfall
            snowflakeCount={36}
            images={leafImages}
            radius={[12, 22]}
            speed={[0.6, 2.0]}
            wind={[-0.4, 1.8]}
            rotationSpeed={[-1.2, 1.2]}
            enable3DRotation={true}
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none',
            }}
          />
        ) : (
          // Fallback while images render: Warm amber particles
          <Snowfall
            snowflakeCount={40}
            color="#EA580C"
            radius={[3, 6]}
            speed={[0.6, 2.0]}
            wind={[-0.4, 1.5]}
            enable3DRotation={true}
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none',
            }}
          />
        )
      ) : (
        // Winter / Night Theme: Crystalline Snowfall over obsidian grid
        <Snowfall
          snowflakeCount={95}
          color="#FFFFFF"
          radius={[0.8, 3.2]}
          speed={[0.5, 2.0]}
          wind={[-0.3, 1.0]}
          enable3DRotation={false}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};
