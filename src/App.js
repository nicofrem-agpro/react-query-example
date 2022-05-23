import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import mocks from "mocks/browser";

import WORQUsers from "pages/WithoutReactQuery/Users";
import WORQUser from "pages/WithoutReactQuery/User";

import RQUsers from "pages/ReactQuery/Users";
import RQUser from "pages/ReactQuery/User";

mocks.start();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="wo-rq">
            <Route path="users">
              <Route path=":id" element={<WORQUser />} />
              <Route index element={<WORQUsers />} />
            </Route>
          </Route>
          <Route path="rq">
            <Route path="users">
              <Route path=":id" element={<RQUser />} />
              <Route index element={<RQUsers />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
