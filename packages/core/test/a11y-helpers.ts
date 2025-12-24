import * as axeCore from 'axe-core';

/**
 * Run axe-core against the given element or document body.
 */
export async function runAxe(node: HTMLElement | Document = document): Promise<axeCore.AxeResults> {
    // Inject axe into the page if not present
    if (!(window as any).axe) {
        const script = document.createElement('script');
        script.text = axeCore.source;
        document.head.appendChild(script);
    }
    return await (window as any).axe.run(node, {
        runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa'],
        },
    });
}
