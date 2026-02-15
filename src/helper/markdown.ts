export function formatBold(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="text-gray-900 dark:text-gray-100 font-medium">$1</span>');
}
