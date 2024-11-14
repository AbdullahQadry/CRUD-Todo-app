<script>
    import { db } from '../lib/firebase/firebase';
    import { doc, getDoc, setDoc } from 'firebase/firestore';
    import { onMount } from 'svelte';

    export let id;
    export let todo='';
    export let index;
    export let editTodoModal;
    export let removeTodo;

    let isChecked = false;

    // Fetch the initial state from Firestore
    onMount(async () => {
        const docRef = doc(db, 'checkboxState', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            isChecked = docSnap.data().checked;
        }
    });

    // Save the state to Firestore whenever it changes
    async function handleCheckboxChange(event) {
        isChecked = event.target.checked;
        await setDoc(doc(db, 'checkboxState', id), {
            checked: isChecked
        });
    }
</script>

<div class="TodoItem">
    <div>
        <input type="checkbox" bind:checked={isChecked} on:change={handleCheckboxChange}> {index + 1}. {todo}
    </div>
    <div class="actions">
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <i on:click={() => editTodoModal(index)} on:keydown={() => {}} class="fa-regular fa-edit" style="margin-right: 10px;"></i>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <i on:click={() => removeTodo(index)} on:keydown={() => {}} class="fa-regular fa-trash-can" style="margin-right: 10px;"></i>
    </div>
</div>


<style>
 .TodoItem {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 0px;
    }
    .actions {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .actions i {
        cursor: pointer;
    } 

    .actions i:hover {
        color: #bb61fc;
    }
</style>