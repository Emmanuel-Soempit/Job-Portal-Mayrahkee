
function PopUpBox({ isOpen, children}) {
  return (
    isOpen && (
<<<<<<< HEAD
      <div className="h-full w-full flex justify-center items-center bg-gray-600/70 fixed top-0 left-0">
=======
      <div className="h-full z-[999] w-full flex justify-center items-center bg-gray-600/50 fixed top-0 left-0">
>>>>>>> 10d797cd6ff8aa129207f9c089b161e15aab3e28
        {children}
      </div>
    )
  );
}

export default PopUpBox;
