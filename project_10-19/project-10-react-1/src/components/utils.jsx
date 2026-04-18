export function generateId() {
  return Date.now().toString(36).substring(2, 10);
}

export function normalize(text) {
  return text.trim().toLowerCase().replaceAll(" ", "");
}
