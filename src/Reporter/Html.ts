class Html {
    private header: string = '';
    private footer: string = '';
    private body: string = '';

    public getHtml(): string
    {
        return this.header + this.body + this.footer;
    }

    public setHeader(header: string): void
    {
        this.header = header;
    }

    public getHeader(): string
    {
        return this.header;
    }

    public setBody(body: string): void
    {
        this.body = body;
    }

    public getBody(): string
    {
        return this.body;
    }

    public setFooter(footer: string): void
    {
        this.footer = footer;
    }

    public getFooter(): string
    {
        return this.footer;
    }

}

export default Html;