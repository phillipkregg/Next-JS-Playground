"use client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import PaginatingTable from "./paginatingTable";

export default function Page() {
  const queryClient = new QueryClient();

  return (
    <div>
      <div>Paginating TanStack Table</div>
      <QueryClientProvider client={queryClient}>
        <PaginatingTable />
      </QueryClientProvider>
    </div>
  );
}
