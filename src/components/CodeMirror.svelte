<script>
  import { basicSetup, EditorView } from 'codemirror'
  import { Compartment, EditorState } from '@codemirror/state'
  import { javascript } from '@codemirror/lang-javascript'
  import { onMount } from 'svelte'

  export let readOnly = false
  export let doc = ''

  let view
  let container

  let editable = new Compartment()

  onMount(() => {
    view = new EditorView({
      parent: container,
      state: EditorState.create({
        doc: doc,
        extensions: [
          basicSetup,
          javascript(),
          editable.of([
            // prettier-ignore
            EditorView.editable.of(!readOnly),
            EditorState.readOnly.of(readOnly)
          ])
        ]
      })
    })
  })

  $: if (view) {
    // Update the read-only state
    view.dispatch({
      effects: [
        editable.reconfigure([
          // prettier-ignore
          EditorView.editable.of(!readOnly),
          EditorState.readOnly.of(readOnly)
        ])
      ]
    })
  }
</script>

<div bind:this={container} class="container" class:readOnly />

<style>
  .container {
    width: 100%;
  }

  .container.readOnly {
    pointer-events: none;
    user-select: none;
  }

  .container.readOnly :global(.cm-activeLine) {
    background: transparent !important;
  }
</style>
