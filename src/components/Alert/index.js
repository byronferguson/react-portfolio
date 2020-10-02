import React from 'react';

export default function Alert({ msg, type = 'error' }) {
  const baseStyle = {
    card: 'rounded-md p-4',
    msg: 'text-sm leading-5 font-medium uppercase',
  };
  const typeStyle = {
    error: {
      card: 'bg-red-200',
      msg: 'text-red-800',
    },
    success: {
      card: 'bg-green-200',
      msg: 'text-green-800',
    },
  };
  return msg ? (
    <div className={`${baseStyle.card} ${typeStyle[type].card}`}>
      <div className="flex">
        <div className="ml-3">
          <p className={`${baseStyle.msg} ${typeStyle[type].msg}`}>{msg}</p>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
