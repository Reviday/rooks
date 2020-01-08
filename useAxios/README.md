# Usage

```js
import useAxios from "@rooks/use-axios"

const App = () => {
  const { loading, data, refetch } = useAxios({
    url: "url"
  });
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h1>{loading && "Loading"}</h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
```
