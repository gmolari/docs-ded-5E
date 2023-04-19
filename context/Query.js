import { 
    QueryClientProvider,
    QueryClient,
} from 'react-query';
const queryClient = new QueryClient()

export default function Query({children}){

    // const queryClient = useQueryClient();
    // const {getApi} = useApi()
    // const query = useQuery({queryKey: ['todos'], queryFn: getApi});

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}