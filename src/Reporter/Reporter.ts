import Html from './Html';
import WarningManager from '../Warning/WarningManger';

class Reporter
{
    protected html: Html;
    protected warningManager: WarningManager;

    constructor(warningManager: WarningManager)
    {
        this.html = new Html();
        this.warningManager = warningManager;
        this.generate();
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

    private generate(): void
    {
        this.writeHtmlHeader('<h1>Weather Report</h1>');

        let warnings = this.warningManager.get();
        let html = '';
        if(warnings.length > 0)
        {
            
            warnings.forEach((warning) => {
                let color = 'black';
                let title = '';
                switch (warning.getPrio()) {
                    case 1:
                        color = 'red';
                        title = 'Warning';
                        break;
                    case 2:
                        color = 'orange';
                        title = 'Attention';
                        break;
                    case 3:
                        color = 'yellow';
                        title = 'Information';
                        break;
                    default:
                        break;
                }
                html += `<h3>${title}</h3>`;
                html += `<p style="color:${color}">${warning.getMessage()}</p>`;

            });
        }
        else
        {
            html += '<h1>No warnings</h1>';
        }
        this.writeHtmlBody(html);
        this.writeHtmlFotoer(`<p style=" text-align: center; ">Generated at ${new Date().toISOString()}</p>`);
    }
}

export default Reporter;