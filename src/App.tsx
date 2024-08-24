import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import RoutesCustom from "./routes/RoutesCustom";

const queryClient = new QueryClient();
function App(): React.ReactElement {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <RoutesCustom />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </Router>
  );
}

export default App;
