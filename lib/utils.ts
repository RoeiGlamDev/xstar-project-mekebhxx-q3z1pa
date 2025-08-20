import { useEffect, useState } from 'react';

// Function to debounce input changes
export const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

// Function to format currency
export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

// Function to generate a unique ID
export const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

// Function to check if a value is in an array
export const isInArray = (value: any, array: any[]) => {
    return array.includes(value);
};

// Function to scroll to a specific element
export const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

// Default export
export default {
    useDebounce,
    formatCurrency,
    generateUniqueId,
    isInArray,
    scrollToElement,
};