// @ts-ignore
import ColorThief from 'colorthief';

export function rgbToHex(r: number, g: number, b: number) {
  const toHex = (n: number) => n.toString(16).padStart(2, '0');
  return '#' + [r, g, b].map(toHex).join('');
}

export async function getDominantColor(imageElement: HTMLImageElement) {
  const colorThief = new ColorThief();
  if(!imageElement.complete) {
    await new Promise((resolve, reject) => {
      imageElement.addEventListener('load', resolve);
      imageElement.addEventListener('error', reject);
    });
  }
  const color = await colorThief.getColor(imageElement) as [number, number, number];
  return rgbToHex(...color);
}

export function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export function validateSearchParam(param: string | null, defaultValue: string, choices?: string[]) {
  if(!param || !choices?.includes(param)) {
    return defaultValue;
  }
  return param;
}