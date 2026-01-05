import { SelectHTMLAttributes } from 'react';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  error?: string;
  isValid?: boolean;
}

export default function FormSelect({
  label,
  options,
  error,
  isValid,
  className = '',
  ...props
}: FormSelectProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
        {props.required && <span className="text-purple-500 ml-1">*</span>}
      </label>
      <select
        className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white transition-all duration-300 focus:outline-none focus:ring-2 cursor-pointer ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : isValid
            ? 'border-green-500 focus:ring-green-500'
            : 'border-gray-700 focus:ring-purple-500 focus:border-purple-500'
        } ${className}`}
        {...props}
      >
        <option value="" className="bg-gray-900">Select an option...</option>
        {options.map((option, index) => (
          <option key={index} value={option} className="bg-gray-900">
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500 flex items-center">
          <span className="mr-1">⚠</span>
          {error}
        </p>
      )}
      {isValid && !error && (
        <p className="mt-1 text-sm text-green-500 flex items-center">
          <span className="mr-1">✓</span>
          Looks good!
        </p>
      )}
    </div>
  );
}
