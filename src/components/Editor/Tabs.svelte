<script>
  import { files, selectFile } from '$stores/editor.js'
  import Tab from '$components/Editor/Tab.svelte'
</script>

<div class="tabs">
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
