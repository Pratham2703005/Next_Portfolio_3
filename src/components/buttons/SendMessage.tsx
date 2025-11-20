import React from 'react';
import { Send } from 'lucide-react';

interface SendButtonProps {
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const SendButton = ({ isLoading = false, type = 'button', disabled = false }: SendButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[var(--military-tactical)] text-[var(--military-dark)] font-bold uppercase tracking-wider hover:bg-[var(--military-accent)] transition-all border-2 border-transparent hover:border-[var(--military-accent)] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--military-accent)]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <Send size={20} className="relative z-10" />
      <span className="relative z-10">{isLoading ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
    </button>
  );
};

export default SendButton;
