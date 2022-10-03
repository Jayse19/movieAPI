import { QueryClient, QueryClientProvider } from "react-query";
import MovieApi from "../components/ApiPractice/ApiPractice"

const ApiPractice = () => {
    const queryClient = new QueryClient
    return (
        <QueryClientProvider client={queryClient}>
            <MovieApi />
        </QueryClientProvider>
    );
}

export default ApiPractice;