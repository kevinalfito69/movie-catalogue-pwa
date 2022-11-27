import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worket not support in the browser');
    return;
  }
  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');
  try {
    // await navigator.serviceWorker.register('./sw.bundle.js');
    await wb.register();
    console.log('ServiceWorker registered');
  } catch (error) {
    console.log('Failed registered serviceWorker', error);
  }
};
export default swRegister;
