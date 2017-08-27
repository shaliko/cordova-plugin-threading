interface Navigator {
    /** Provides access to the device contacts database. */
    Echo: Echo;
}

interface Echo {
    /**
     * The navigator.Echo.myPluginMethod method executes asynchronously
     * @param onSuccess Success callback function
     * @param onError Error callback function
     */
    myPluginMethod(onSuccess: (result: string) => void,
        onError?: (error: string) => void): void;
}
