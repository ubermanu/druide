<script>
  import { files, selectFile, appendFile, createEmptyFile } from '$stores/editor.js'
  import Tab from '$components/Editor/Tab.svelte'

  function newFile() {
    const file = createEmptyFile()
    appendFile(file)
    selectFile(file)
  }
</script>

<div class="tabs" on:dblclick={newFile}>
  {#each $files as file}
    <Tab {file} on:click={() => selectFile(file)}>
      {file.name}
    </Tab>
  {/each}
</div>

<style>
  .tabs {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 50px;
    overflow-x: auto;
    background-color: var(--color-black);
  }
</style>
