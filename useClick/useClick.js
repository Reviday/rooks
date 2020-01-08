export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    console.log("asd");
    if (typeof onClick === "function") {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }
  }, []);
  return element;
};
