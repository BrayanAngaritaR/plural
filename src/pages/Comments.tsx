import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Comments() {
   return (
      <QueryClientProvider client={queryClient}>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores error esse eligendi, fugit veniam harum ex, explicabo impedit deserunt enim. Dolores molestias consectetur vel mollitia sed quisquam maiores dolorum.</p>
      </QueryClientProvider>
   )
}

export default Comments;