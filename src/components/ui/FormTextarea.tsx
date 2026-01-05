import { TextareaHTMLAttributes } from 'react';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  isValid?: boolean;
}

export default function FormTextarea({
  label,
  error,
  isValid,
  className = '',
  ...props
}: FormTextareaProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
        {props.required && <span className="text-purple-500 ml-1">*</span>}
      </label>
      <textarea
        className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : isValid
            ? 'border-green-500 focus:ring-green-500'
            : 'border-gray-700 focus:ring-purple-500 focus:border-purple-500'
        } ${className}`}
        {...props}
      />
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
