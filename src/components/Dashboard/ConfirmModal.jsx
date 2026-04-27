import React from 'react';
import { Trash2, X, Loader2 } from 'lucide-react';

function ConfirmModal({ isOpen, onClose, onConfirm, title, message, isLoading }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={!isLoading ? onClose : undefined}
      />
      
      {/* Modal Card */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-[2rem] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 fade-in duration-200">
        {!isLoading && (
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 text-slate-500 hover:text-white transition"
          >
            <X size={20} />
          </button>
        )}

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-6">
            {isLoading ? (
              <Loader2 size={32} className="animate-spin" />
            ) : (
              <Trash2 size={32} />
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {message}
          </p>

          <div className="flex w-full gap-3 mt-8">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-semibold transition shadow-lg shadow-red-900/20 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 size={16} className="animate-spin" />}
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
