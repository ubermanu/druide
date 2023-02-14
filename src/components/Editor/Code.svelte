<script>
  import CodeMirror from '$components/CodeMirror.svelte'
  import { mode } from '$stores/editor.js'

  export let file
</script>

<CodeMirror doc={file.content} readOnly={$mode !== 'edit'} />
