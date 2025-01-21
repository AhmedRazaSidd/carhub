import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLDivElement>;
    btnType: "button" | "submit";
}

export interface manufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}