<script>
  import { onMount } from 'svelte'
  import { basicSetup, EditorView } from 'codemirror'
  import { Compartment, EditorState } from '@codemirror/state'
  import { javascript } from '@codemirror/lang-javascript'

  export let readOnly = false
  export let doc = ''

  // TODO: Add a default null language
  export let lang = javascript()

  let view
  let container

  let theme = EditorView.theme(
    {
      '& .cm-gutters': { background: 'transparent' },
      '& .cm-activeLine': { background: 'rgba(255, 255, 255, 0.1)' },
      '& .cm-cursor': { borderLeft: '1px solid white' }
    },
    { dark: true }
  )

  let editable = new Compartment()
  let language = new Compartment()

  onMount(() => {
    view = new EditorView({
      parent: container,
      state: EditorState.create({
        doc: doc,
        extensions: [
          basicSetup,
          theme,
          language.of(lang),
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
        ]),
        language.reconfigure(lang)
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
