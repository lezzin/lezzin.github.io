export function formatText(text: string): string {
  const bold = text.replace(
    /\*\*(.*?)\*\*/g,
    '<span class="text-green-700 dark:text-green-400 font-bold">$1</span>'
  );

  const highlight = bold.replace(
    /==(.*?)==/g,
    '<mark class="mark">$1</mark>'
  )

  return highlight;
}