import { FormEvent , ReactElement } from "react";

export interface InputProps {
    label: string;
    type: "email" | "password" | "text" | "number";
    placeholder: string;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    hasIcon?:boolean;
    icon?: ReactElement
}