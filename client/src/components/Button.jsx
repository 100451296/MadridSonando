/* eslint-disable react/prop-types */
function Button({ children, link, profile }) {
  return (
    <a
      href={link}
      className="bg-white text-black text-xl px-4 py-2 rounded-md
          transition-all duration-200 hover:bg-cyan-500 hover:text-gray-50
          hover:-translate-y-1 hover:scale-104 flex justify-center items-center"
    >
      {profile === "true" && (
        <div className="text-2xl flex items-center justify-center mr-2">
          <ion-icon name="person-outline" className="text-black"></ion-icon>
        </div>
        
      )}
      {children}
    </a>
  );
}

export default Button