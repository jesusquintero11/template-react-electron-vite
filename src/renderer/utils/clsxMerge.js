import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const clsxMerge = (...inputs) => twMerge(clsx(inputs))