import React from "react";
import GitHubProvider from "./providers/github-provider";
import * as G from "./global/resetCSS";
import App from "./App";

const Providers = () => {
    return (
        <main>
        <GitHubProvider>
        <G.resetCSS>
            <App/>
        </G.resetCSS>
        </GitHubProvider>
        </main>
    )
}

export default Providers;