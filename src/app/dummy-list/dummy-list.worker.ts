/// <reference lib="webworker" />

function fibonacci(num: number): number {
  if (num == 1 || num == 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}
self.addEventListener('message', (evt) => {
  // const num = evt.data;
  // if (!num) return;
  postMessage(fibonacci(22))
})
