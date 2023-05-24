import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./routers/AppRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
