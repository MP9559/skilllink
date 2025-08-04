const Dropdown = ({ title, items, isProfile = false, icon, onItemClick }) => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-xl rounded-xl p-4 z-50 animate-dropdown transition-all duration-300">
      <p className="text-sm font-semibold mb-3 flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        {title}
      </p>
      <ul className="text-sm space-y-1">
        {items.map((item, index) => {
          const label = typeof item === "string" ? item : item.label;
          const icon = typeof item === "object" ? item.icon : null;
          const isDanger = typeof item === "object" && item.danger;

          return (
            <li
              key={index}
              className={`flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-100 cursor-pointer transition ${
                isDanger ? "text-red-500 hover:bg-red-100" : ""
              }`}
              onClick={() => onItemClick && onItemClick(label)}
            >
              {icon && <span className="text-lg">{icon}</span>}
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown