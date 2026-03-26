export const FRAME_COUNT = 121;

export const frames = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/frames/frame_${String(i).padStart(4, '0')}.webp`
);
