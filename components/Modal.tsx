export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 right-0 bottom-0 bg-slate-400 bg-opacity-40 z-20"
      />
      <div className="fixed m-auto z-30 bg-white rounded-lg border border-gray-100 text-center shadow-2xl">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 rounded-full border border-gray-300 bg-gray-100 p-1.5"
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        {children}
      </div>
    </>
  );
}
