import React, { useEffect, useState } from 'react';
import { CALLING_CODES } from '../data/callingCodes';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
  required?: boolean;
  defaultCallingCode?: string;
}

const inputClass = 'bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#D4AF37] focus:outline-none';
const INITIAL_COUNTRY = CALLING_CODES.find((item) => item.code === '+234')!.country;

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  label,
  placeholder = 'Phone number',
  required = false,
  defaultCallingCode = '+234',
}) => {
  const [callingCode, setCallingCode] = useState(defaultCallingCode);
  const [country, setCountry] = useState(
    CALLING_CODES.find((item) => item.code === defaultCallingCode)?.country ?? INITIAL_COUNTRY,
  );
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (!value) {
      setNumber('');
      return;
    }
    const match = [...CALLING_CODES]
      .sort((a, b) => b.code.length - a.code.length)
      .find((item) => value === item.code || value.startsWith(`${item.code} `));
    if (match) {
      setCallingCode(match.code);
      setCountry(match.country);
      setNumber(value.slice(match.code.length).trim());
    } else {
      setNumber(value);
    }
  }, [value]);

  const update = (code: string, nationalNumber: string) => {
    onChange(`${code} ${nationalNumber}`.trim());
  };

  return (
    <div className="grid grid-cols-[minmax(132px,0.9fr)_minmax(0,1.6fr)] gap-2">
      <select
        aria-label={`${label} country calling code`}
        value={`${country}::${callingCode}`}
        onChange={(event) => {
          const [selectedCountry, code] = event.target.value.split('::');
          setCallingCode(code);
          setCountry(selectedCountry);
          update(code, number);
        }}
        className={`${inputClass} min-w-0`}
      >
        {CALLING_CODES.map((item, index) => (
          <option key={`${item.country}-${item.code}-${index}`} value={`${item.country}::${item.code}`}>
            {item.country} ({item.code})
          </option>
        ))}
      </select>
      <input
        type="tel"
        required={required}
        aria-label={label}
        placeholder={placeholder}
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
          update(callingCode, event.target.value);
        }}
        className={`${inputClass} w-full min-w-0`}
      />
    </div>
  );
};
