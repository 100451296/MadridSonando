function AuthButton({ children }) {
    return (
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
      >
        {children}
      </button>
    );
  }
  
  export default AuthButton;