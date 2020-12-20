import { ServiceWorker } from 'aws-amplify';

export const serviceWorker = new ServiceWorker();
console.log('init servie worker aws-amplify plugin')

export async function registerSW() {
    await serviceWorker.register('/service-worker.js', '/');
}