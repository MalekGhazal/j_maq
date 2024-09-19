import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync } from 'fs';

const routes = ['/', '/about', '/contact', '/jehan'];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://jehanassi.fr/' });

// Return a promise that resolves with your XML string
const sitemap = streamToPromise(Readable.from(routes).pipe(stream)).then(
  (data) => data.toString()
);

sitemap.then((xml) => {
  writeFileSync('./dist/sitemap.xml', xml);
  console.log('Sitemap generated!');
});
