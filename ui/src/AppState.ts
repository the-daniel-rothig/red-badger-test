type AppState = {
    isError: boolean;
    errorMessage?: string;

    isLoading: boolean;
    
    output?: string;
    input?: string;
};

export default AppState;