import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Page/Home";
import Zustand from "./Page/Zustand";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <Zustand />
    </QueryClientProvider>
  );
}

export default App
