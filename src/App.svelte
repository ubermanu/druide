<script>
  import Toolbar from '$components/Toolbar.svelte'
  import EditorView from '$views/EditorView.svelte'
</script>

<main>
  <Toolbar />
  <EditorView />
</main>

<aside />

<style>
  main {
    height: 100vh;
  }
</style>
