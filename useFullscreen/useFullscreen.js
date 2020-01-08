export const useFullscreen = callback => {
  const [isFull, setIsFull] = useState(false);
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(err => {
        Promise.resolve(err);
        alert("Too many operations.");
      });
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen().catch(err => {
        Promise.resolve(err);
        alert("Too many operations.");
      });
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen().catch(err => {
        Promise.resolve(err);
        alert("Too many operations.");
      });
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen().catch(err => {
        Promise.resolve(err);
        alert("Too many operations.");
      });
    }
    runCb(false);
  };
  const toggleFull = () => {
    if (!isFull) {
      triggerFull();
      setIsFull(true);
    } else {
      exitFull();
      setIsFull(false);
    }
  };
  return { element, triggerFull, exitFull, toggleFull };
};
