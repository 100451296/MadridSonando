function Button({ children, link }) {
  return (
    <a
      href={link}
      className="bg-white text-black text-xl px-4 py-2 rounded-md
          transition-all duration-200 hover:bg-cyan-500 hover:text-gray-50
          hover:-translate-y-1 hover:scale-104"
    >
      {children}
    </a>
  );
}

export default Button