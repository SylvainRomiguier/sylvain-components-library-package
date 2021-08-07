import React from "react";
export interface TextInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    password?: boolean;
}
export declare const TextInput: React.FC<TextInputProps>;
