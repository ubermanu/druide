import { derived, writable } from 'svelte/store'

export const MODES = {
  VIEW: 'view',
  EDIT: 'edit'
}

/**
 * Can be 'view' or 'edit'
 * @type {Writable<string>}
 */
export const mode = writable('view')

/**
 * @typedef {Object} File
 * @property {string} name
 * @property {string} content
 * @property {?string} path
 * @property {string} lang
 * @property {boolean} hasUnsavedChanges
 * @property {boolean} isActive
 */

/**
 * The list of files opened in the editor.
 * @type {import('svelte/store').Writable<File[]>}
 */
export const files = writable([
  {
    name: 'index.html',
    content: '<h1>Hello World</h1>',
    path: '/home/user/projects/my-project/index.html',
    lang: 'html',
    hasUnsavedChanges: false,
    isActive: true
  },
  {
    name: 'index.js',
    content: 'console.log("Hello World")',
    path: '/home/user/projects/my-project/index.js',
    lang: 'js',
    hasUnsavedChanges: true,
    isActive: false
  }
])

/**
 * The currently active file.
 * @type {import('svelte/store').Readable<File>}
 */
export const activeFile = derived([files], ([$files]) => $files.find((file) => file.isActive))

/**
 * Selects a file.
 * @param {File} file
 */
export const selectFile = (file) => {
  files.update(($files) =>
    $files.map((f) => {
      f.isActive = f === file
      return f
    })
  )
}

/**
 * Saves a file.
 * @param {File} file
 */
export const saveFile = (file) => {
  files.update(($files) =>
    $files.map((f) => {
      if (f === file) {
        f.hasUnsavedChanges = false
      }
      return f
    })
  )
}

/**
 * Closes a file.
 * If it is the active file, the previous file in the list will be selected.
 * @param {File} file
 */
export const closeFile = (file) => {
  files.update(($files) => {
    const index = $files.indexOf(file)
    if (index === -1) {
      return $files
    }
    if (file.isActive && index > 0) {
      $files[index - 1].isActive = true
    }
    return $files.filter((f) => f !== file)
  })
}

/**
 * Adds a file to the list of files.
 * @param {File} file
 */
export const appendFile = (file) => {
  files.update(($files) => {
    return [...$files, file]
  })
}

let untitledFileCounter = 0

/**
 * Creates an empty file.
 * @returns {File}
 */
export const createEmptyFile = () => {
  return {
    name: 'Untitled ' + ++untitledFileCounter,
    content: '',
    path: null,
    lang: 'js',
    hasUnsavedChanges: false,
    isActive: false
  }
}
