import { type TextareaHTMLAttributes } from 'react';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function FormTextarea({ label, error, ...props }: FormTextareaProps) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          {...props}
          className="p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}