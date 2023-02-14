import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { php } from '@codemirror/lang-php'
import { json } from '@codemirror/lang-json'

/**
 * @typedef {import('@codemirror/lang-javascript').LanguageSupport} LanguageSupport
 * @type {{js: LanguageSupport, html: LanguageSupport}}
 */
export const fileAssociations = {
  css: css(),
  html: html(),
  js: javascript(),
  json: json(),
  jsx: javascript({ jsx: true }),
  php: php(),
  ts: javascript({ typescript: true }),
  tsx: javascript({ jsx: true, typescript: true })
}

/**
 * Gets the language from a filename.
 * @param {string} filename
 * @returns {LanguageSupport|null}
 */
export function getLangFromFilename(filename) {
  const ext = filename.split('.').pop()
  return fileAssociations[ext] ?? null
}
