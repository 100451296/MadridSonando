/* eslint-disable react/prop-types */
function BorderButton({ children, link }) {
  return (
    <a
      href={link}
      className="border border-white bg-gray-800 text-gray-100 text-xl px-4 py-2 rounded-md 
        transition-all duration-50 hover:bg-cyan-500 hover:text-gray-50 
        hover:-translate-y-1 hover:scale-104"
    >
      {children}
    </a>
  );
}

export default BorderButton;