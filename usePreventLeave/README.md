# Usage

```js
import usePreventLeave from "@rooks/use-preventleave"

const App = () => {
  const { enablePreve, disablePreve } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePreve}>Protect</button>
      <button onClick={disablePreve}>Unprotect</button>
    </div>
  );
};
```
