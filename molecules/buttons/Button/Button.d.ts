import React from "react";
declare type ButtonType = "active" | "disabled";
export interface ButtonProps {
    label: string;
    type: ButtonType;
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
export {};
