import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function useCountUp(end: number, duration: number = 2000) {
  let start = 0
  const increment = end / (duration / 16)

  return new Promise<number>((resolve) => {
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        clearInterval(timer)
        resolve(end)
      }
    }, 16)
  })
}
