export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function remove(key) {
  localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear;
}
