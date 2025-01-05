import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

/**
 * @param {string} _url
 */
export function render(_url) {
    const html = renderToString(
        <StaticRouter location={_url}>
            <App />
        </StaticRouter>
    );
    return { html };
}
