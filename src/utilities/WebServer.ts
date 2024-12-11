const webServer = (body: string) => {
    let server = Bun.serve({
        port: 3000,
        fetch(request) {
            return new Response(
                body,
                {
                    headers: { 'content-type': 'text/html' },
                }
            );
        },
    });
    console.log(`Server running at ${server.url}`);
}

export default webServer;