# Usage

```js
import useFadeIn from "@rooks/use-usefadein"

const App = () => {
  const fadeinH1 = useFadeIn(1, 2);
  const fadeinP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeinH1}>Hello</h1>
      <p {...fadeinP}>lorem ipsum ...</p>
    </div>
  );
};
```
