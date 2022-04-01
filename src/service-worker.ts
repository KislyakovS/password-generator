import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

registerRoute(
  ({ request }) => request.destination === 'font' ||
    request.destination === 'manifest' ||
    request.destination === 'image' ||
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'document',
  new StaleWhileRevalidate()
);