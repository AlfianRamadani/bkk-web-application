import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...classes){
    return twMerge(clsx(...classes));
}