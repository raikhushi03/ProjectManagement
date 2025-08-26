export default function Button({children, ...props}){
  return(
     <button {...props} className="p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props}>{children}</button>
  );
}