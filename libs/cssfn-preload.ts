import { ensureRendererWorkersReady } from '@cssfn/cssfn'



// performance.mark('preload cssfn start');
const _loaded = await ensureRendererWorkersReady();
console.log('next-mark-loaded');
// performance.mark('preload cssfn end');
// performance.measure(
//     'preload cssfn duration',
//     'preload cssfn start',
//     'preload cssfn end'
// );