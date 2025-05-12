import React from 'react';

const Card = ({ image, alt, title, subtitle }) => (
  <div className="flex items-center bg-white rounded shadow p-3 space-x-3">
    {image && (
      <img
        src={image}
        alt={alt}
        className="w-14 h-14 rounded-full object-cover"
      />
    )}
    <div>
      {typeof title === 'string' ? (
        <p className="font-semibold">{title}</p>
      ) : (
        title
      )}
      {subtitle && (typeof subtitle === 'string' ? (
        <p className="text-sm text-red-600">{subtitle}</p>
      ) : (
        subtitle
      ))}
    </div>
  </div>
);

export default Card;
