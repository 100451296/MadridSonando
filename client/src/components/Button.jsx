function Button({ children }) {
  return (
    <button
      className="bg-white text-black text-xl px-4 py-2 rounded-md
          transition-all duration-300 hover:bg-gray-400"
    >
      {children}
    </button>
  );
}

export default Button