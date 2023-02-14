<script>
    import {EditIcon, EyeIcon, FolderIcon, MoreVerticalIcon, SearchIcon} from 'svelte-feather-icons'
    import { mode } from '$stores/editor.js'
</script>
<div class="toolbar">
    <div class="toolbar__left">
        <button class="btn" disabled>
            <MoreVerticalIcon/>
        </button>
    </div>
    <div class="toolbar__right">
        <button class="btn" disabled>
            <FolderIcon/>
        </button>
        <button class="btn" disabled>
            <SearchIcon/>
        </button>
        <div class="separator"></div>
        <button class="btn" class:active={$mode === 'view'} on:click={() => mode.set('view')}>
            <EyeIcon/>
        </button>
        <button class="btn" class:active={$mode === 'edit'} on:click={() => mode.set('edit')}>
            <EditIcon/>
        </button>
    </div>
</div>

<style>
    .toolbar {
        background-color: var(--color-black);
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 13px;
    }

    .toolbar__left {
        margin-right: auto;
    }

    .toolbar__right {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    .btn {
        background-color: transparent;
        border: none;
        color: var(--color-lightgrey);
        cursor: pointer;
        padding: 0;
        height: 100%;
        display: flex;
        align-items: center;
        transition: color 0.2s ease-in-out;
    }

    .separator {
        width: 5px;
        height: 5px;
        background-color: var(--color-grey-400);
        border-radius: 50%;
    }

    .btn.active {
        color: var(--color-primary);
        pointer-events: none;
    }

    .btn[disabled] {
        pointer-events: none;
        opacity: 0.2;
    }
</style>
