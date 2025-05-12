import React from 'react';

const NoticeCard = ({ notices = [], previewCount = 3, onSeeAll }) => {
  const previewNotices = notices.slice(0, previewCount);
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Notice Board</h2>
      <ul className="space-y-2">
        {previewNotices.map((notice, idx) => (
          <li key={idx} className="bg-yellow-100 border-l-4 border-yellow-500 px-4 py-2 rounded shadow">
            <span className="font-medium">{notice.title}</span>
            <span className="block text-sm text-gray-600">{notice.date}</span>
          </li>
        ))}
      </ul>
      {onSeeAll && (
        <div className="mt-4 text-center">
          <button
            onClick={onSeeAll}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded"
          >
            See All Notices
          </button>
        </div>
      )}
    </div>
  );
};

export default NoticeCard;
