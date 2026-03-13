export function formatText(text: string): string {
  const bold = text.replace(
    /\*\*(.*?)\*\*/g,
    '<span class="text-green-700 dark:text-green-400 font-bold">$1</span>'
  );

  const highlight = bold.replace(
    /==(.*?)==/g,
    '<mark class="bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 px-1 rounded">$1</mark>'
  )

  return highlight;
}