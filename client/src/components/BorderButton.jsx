function BorderButton({ children }) {
  return (
    <button
      className="border border-white bg-black text-gray-100 text-xl px-4 py-2 rounded-md 
          transition-all duration-300 hover:bg-white hover:text-black"
    >
      {children}
    </button>
  );
}

export default BorderButton;
