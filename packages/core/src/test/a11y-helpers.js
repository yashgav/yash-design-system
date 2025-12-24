import * as axe from 'axe-core';

export async function runAxe(node = document) {
    if (!window.axe) {
        const script = document.createElement('script');
        script.text = axe.source;
        document.head.appendChild(script);
    }
    return await window.axe.run(node, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] },
    });
}
