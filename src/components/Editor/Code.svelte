<script>
  import CodeMirror from '$components/CodeMirror.svelte'
  import { mode } from '$stores/editor.js'
  import { getLangFromFilename } from '$lib/CodeMirror/lang.js'

  export let file
</script>

<CodeMirror doc={file.content} readOnly={$mode !== 'edit'} lang={getLangFromFilename(file.name)} />
