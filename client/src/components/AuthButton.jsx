/* eslint-disable react/prop-types */
function AuthButton({ children, onClick }) {
    return (
      <button
        className="bg-cyan-500 text-white font-bold p-5 rounded-full mt-5 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-indigo-500 duration-100
          text-xl w-full"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  
  export default AuthButton;