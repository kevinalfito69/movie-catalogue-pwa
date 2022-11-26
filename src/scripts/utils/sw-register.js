const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worket not support in the browser');
    return;
  }
  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('ServiceWorker registered');
  } catch (error) {
    console.log('Failed registered serviceWorker', error);
  }
};
export default swRegister;
