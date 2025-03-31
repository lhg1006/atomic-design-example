export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
  >
    {label}
  </button>
);
