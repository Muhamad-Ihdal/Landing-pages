export default function generateId() {
    return Date.now().toString(36).substring(2,10)
}