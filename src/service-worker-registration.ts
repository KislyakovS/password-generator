const hasServiceWorker = "serviceWorker" in navigator;

export const register = () => {
  if (hasServiceWorker) {
    navigator.serviceWorker.register(
      new URL("service-worker.ts", import.meta.url),
      { type: "module" }
    );
  }
};

export const unregister = async () => {
  if (hasServiceWorker) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
};
