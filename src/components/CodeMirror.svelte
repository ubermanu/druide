<script>
  import { basicSetup, EditorView } from 'codemirror'
  import { Compartment, EditorState } from '@codemirror/state'
  import { javascript } from '@codemirror/lang-javascript'
  import { onMount } from 'svelte'

  export let readOnly = false
  export let doc = ''

  let view
  let parent

  let editable = new Compartment()

  onMount(() => {
    view = new EditorView({
      parent: parent,
      state: EditorState.create({
        doc: doc,
        extensions: [basicSetup, javascript(), editable.of([EditorView.editable.of(!readOnly), EditorState.readOnly.of(readOnly)])]
      })
    })
  })

  $: if (view) {
    // Update the read-only state
    view.dispatch({
      effects: [editable.reconfigure([EditorView.editable.of(!readOnly), EditorState.readOnly.of(readOnly)])]
    })
  }
</script>

<div bind:this={parent} />
