<script>
    import {XIcon} from "svelte-feather-icons";
    import {closeFile} from "$stores/editor.js";

    export let file = {};
</script>

<div class="tab" class:active={file.isActive} class:hasUnsavedChanges={file.hasUnsavedChanges} on:click>
    <span class="tab__title">
        <slot/>
    </span>

    <button class="close-btn" on:click|stopPropagation={() => closeFile(file)}>
        {#if file.hasUnsavedChanges}
            <div class="tab__unsaved-changes-indicator"></div>
        {:else}
            <XIcon size="12"/>
        {/if}
    </button>
</div>

<style>
    .tab {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
        height: 100%;
        width: fit-content;
        box-sizing: border-box;
        background-color: var(--color-grey-100);
        border-bottom: 3px solid transparent;
    }

    .tab.active {
        border-bottom-color: var(--color-primary);
    }

    .tab__title {
        font-size: 12px;
        cursor: default;
    }

    .close-btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        margin-left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tab__unsaved-changes-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--color-primary);
    }
</style>
