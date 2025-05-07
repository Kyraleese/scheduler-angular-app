import { SourceMapConsumer } from 'source-map';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Instantiate SourceMapConsumer
const consumer = new SourceMapConsumer();
// Call initialize on the instance
consumer.initialize({
  'lib/mappings.wasm': 'path/to/your/lib/mappings.wasm',
});
if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
