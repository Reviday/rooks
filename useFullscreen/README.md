# Usage

```js
import useFullscreen from "@rooks/use-fullscreen"

const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull, toggleFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element} onClick={toggleFull}>
        <img src="image.jpg" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};
```
