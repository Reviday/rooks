# Usage

```js
import useNotification from "@rooks/use-notification"

const App = () => {
  const triggerNotif = useNotification("Hello", { body: "Hello world!" });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};
```
