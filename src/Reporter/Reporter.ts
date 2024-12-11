import Html from './Html';

class Reporter
{
    protected html: Html;

    constructor()
    {
        this.html = new Html();
    }

    public toHtml(): string
    {
        return this.html.getHtml();
    }

    public writeHtmlHeader(html:string): void
    {
        this.html.setHeader(html);
    }

    public writeHtmlBody(html: string): void
    {
        this.html.setBody(html);
    }

    public writeHtmlFotoer(html: string): void
    {
        this.html.setFooter(html);
    }
}

export default Reporter;