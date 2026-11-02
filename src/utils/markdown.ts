export function formatText(text: string): string {
  if (!text) return ''
  return text
    .replace(
      /\*\*(.*?)\*\*/g,
      '<span class="text-emerald-700 dark:text-emerald-400 font-bold">$1</span>'
    )
    .replace(/==(.*?)==/g, '<mark class="mark">$1</mark>')
}
