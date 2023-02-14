<script>
    import {files} from "$stores/editor.js";
    import Tabs from '$components/Editor/Tabs.svelte';
    import Code from "$components/Editor/Code.svelte";
</script>

<div class="view">
    <div class="view__top">
        <Tabs />
    </div>
    <div class="view__content">
        <div class="pages">
            {#each $files as file}
                <div class="page" class:active={file.isActive}>
                    <Code {file} />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .view {
        display: flex;
        flex-direction: column;
    }

    .view__top {
        flex: 0 0 auto;
    }

    .view__content {
        flex: 1 1 auto;
        overflow: hidden;
    }

    .pages {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        overflow-x: auto;
    }

    .page:not(.active) {
        display: none;
    }
</style>
