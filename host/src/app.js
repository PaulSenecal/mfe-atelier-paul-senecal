import React, { Suspense } from "react";
const Header = React.lazy(() => import("header/Header"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      <div style={{ padding: "1rem" }}>
        <h2>Host Application Content</h2>
      </div>
    </div>
  );
};

export default App;