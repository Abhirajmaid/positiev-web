export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors duration-200";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-darkPrimary",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    outline: "border-2 border-darkGray text-darkGray hover:bg-darkGray hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
