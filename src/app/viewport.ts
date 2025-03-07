import { Viewport } from 'next';

export default function viewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ffffff'
  };
}
