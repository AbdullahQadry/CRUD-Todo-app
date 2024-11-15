<script>
  import { onMount } from 'svelte';
  import { authHandler, authStore } from '../../store/store';
  import { getDoc, doc, setDoc } from "firebase/firestore";
  import { auth, db } from "../../lib/firebase/firebase";


  
    let TodoList = [];
    let currentTodo = '';
    let error = false;
    let editIndex = null;
    let showModal = false;
    let editInput;
    let addTodoInput;

    authStore.subscribe((curr) => {
       TodoList = curr.data.todos;
    });

    
    
    async function StoreTodo() {
           try {
            const userRef = doc(db, 'users', $authStore.user.uid);
            await setDoc(userRef, { todos: TodoList }, { merge: true });
    
           } catch (error) {
               console.log('There was an error saving',error);
            
    }
}


    function AddTodo() {
        error = false;
        if (!currentTodo) {
            error = true;
        }
        TodoList = [...TodoList, currentTodo];
        currentTodo = "";
    }
    
    function removeTodo(index) {
        let newTodoList = [...TodoList].filter((val, i) => {
            console.log(i, index, i !== index);
            return i != index;
        });
        TodoList = newTodoList;
    }

    function editTodoModal(index) {
            currentTodo = TodoList[index];
            editIndex = index;
            showModal = true;
        }

    function saveTodo() {
            if (editIndex !== null) {
                TodoList[editIndex] = currentTodo;
                currentTodo = '';
                editIndex = null;
                showModal = false;
            }
        }

    function closeModal() {
            currentTodo = '';
            editIndex = null;
            showModal = false;
        }

        function handleKeydown(event) {
        if (event.key === 'Enter') {
            if (showModal) {
                saveTodo();
            } else {
                AddTodo();
            }
        }
    }

    $: {
        if (showModal && editInput) {
            editInput.focus();
        } else if (!showModal && addTodoInput) {
            addTodoInput.focus();
        }
    }

</script>

{#if !$authStore.loading}

<div class="MainContainer">

    <div class="HeaderContainer">

        <div class="LogoTitle">

            <svg width=50px height=50px version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g>
                    <g>
                        <path style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="&#10;&#9;&#9;&#9;M492,331.277V80.919c0-33.137-26.863-60-60-60H80c-33.137,0-60,26.863-60,60v350.163c0,33.137,26.863,60,60,60h352&#10;&#9;&#9;&#9;c33.071,0,59.889-26.758,59.995-59.804"/>
                    </g>
                    <g>
                        <g>
                                <line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="101.498" y1="113.466" x2="155.577" y2="113.466"/>
                                <line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="128.428" y1="116.593" x2="128.428" y2="211.389"/>
                        </g>
                            <circle style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" cx="250.651" cy="162.427" r="48.961"/>
                        <g>
                            <g>
                                <path style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="&#10;&#9;&#9;&#9;&#9;&#9;M172.307,349.573c0,26.183-14.532,46.901-37.587,47.304c-7.674,0.134-27.508,0.209-27.508,0.209l-0.193-95.026&#10;&#9;&#9;&#9;&#9;&#9;c0,0,17.844,0,26.913,0C159.221,302.06,172.307,323.39,172.307,349.573z"/>
                            </g>
                                <circle style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" cx="272.18" cy="349.573" r="48.961"/>
                        </g>
                            <line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="113.466" x2="410.502" y2="113.466"/>
                            <line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="208.006" x2="410.502" y2="208.006"/>
                            <line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="302.546" x2="410.502" y2="302.546"/>
                            <line style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="378.374" y1="397.086" x2="410.502" y2="397.086"/>
                    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g> <g></g><g></g><g></g><g></g>
                </svg>

            <h2>Feeling productive today?</h2>
        </div>

        <div class="CTA">
            <button on:click={StoreTodo}><i class="fa-regular fa-floppy-disk" style="margin-right: 10px;"></i>Save</button>
            <button on:click={authHandler.logout} class="btn-outline"> <i class="fa-solid fa-arrow-right-from-bracket" style="margin-right: 10px;"></i>Logout</button>
        </div>
        
    </div>

    <div class="List" >
        {#if TodoList.length === 0}
        <div class="EmptyList">
            <i class="fa-solid fa-champagne-glasses wine"></i>
            <h3>Nothing to do, horraaay!</h3>
        </div>
        {/if}

        {#each TodoList as todo, index}
        <div class="TodoItem"> 
            
            

            <div class="ItemDetails actions">
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <i on:click={() => removeTodo(index)} on:keydown={() => {}} class="fa-regular fa-circle-check"></i>
                <p> {index+1}. {todo}</p></div>
            <div class="actions">
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <i on:click={() => editTodoModal(index)} on:keydown={() => {}} class="fa-regular fa-edit" style="margin-right: 10px;"></i>
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <i on:click={() => removeTodo(index)} on:keydown={() => {}} class="fa-regular fa-trash-can" style="margin-right: 10px;"></i>
            </div> 

        </div>
    {/each}
    </div>

    {#if showModal}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="modal" on:keydown={handleKeydown}>
        <div class="modal-content">
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <span class="close" on:click={closeModal} on:keydown={() => {}}>&times;</span>
            <input bind:value={currentTodo} class="EditTodo" type="text" placeholder="Edit your todo" bind:this={editInput}>
        </div>
    </div>
{/if}

    <div class="AddTodo">
        <input bind:value={currentTodo} on:keydown={handleKeydown} bind:this={addTodoInput} type="text" placeholder="What do you want to do next?">
        <button on:click={AddTodo}><i class="fa-regular fa-square-plus" style="margin-right: 10px;"></i>Add</button>
    </div>
</div>

{/if}

<style>

    .MainContainer {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .HeaderContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 20px;
    }

    .LogoTitle {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    button{
    background: black;
    color: white;
    border: none;
    font-size: 18px;
    padding: 12px 30px;
    border-radius: 4px;
    margin-right: 10px;
    margin-left: auto;
    cursor: pointer;
    transition: 0.4s;
}
    button:hover {
        border-radius: 16px;
    }

    .btn-outline{
        background: transparent;
        color: black;
        border: 1px solid black;
    }

    .List {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        flex: 1;
    }

    .EmptyList {
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 100px;
        color: #919191;
    }

    .wine {
        color: #e2316c;
        font-size: 3rem;
    }

    .TodoItem {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 20px 40px;
        background-color: #eeeeee;
        border-radius: 10px;
        margin: 0 60px;
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


    .ItemDetails {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .ItemDetails p {
        font-size: 16px;
        font-weight: 600;
    }

    .fa-circle-check {
        font-size: 1.2rem;
    }


    .AddTodo {
        position: fixed;
        width: 100%;
        max-width: 1200px;
        bottom: 0;
        display: flex;
        align-items: stretch;
        flex-direction: row;
        gap: 20px;
        padding-bottom: 60px;
    }

   

    input {
        background-color: white;
        flex: 1;
        padding: 20px;
        font-size: 16px;
        border: none;
        border-radius: 2px;
        font-weight: 600;
        -webkit-box-shadow: 0px 20px 70px -22px #bb61fc;
        box-shadow: 0px 20px 70px -22px #bb61fc;
    }
        input::placeholder{
            font-weight: 400;
        }

    .modal {
                display: block;
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgb(0,0,0);
                background-color: rgba(0,0,0,0.4);
                backdrop-filter: blur(20px);
            }

            .modal-content {
                background-color: #ffffff;
                margin: 15% auto;
                padding: 100px;
                border: 1px solid #888;
                width: 60%;
                border-radius: 10px;
            }

            .EditTodo {
                background-color: white;
                position: relative;
                padding: 20px;
                font-size: 16px;
                border: none;
                border-radius: 2px;
                font-weight: 600;
                width: 80%;
                margin-right: 20px;
            }


            .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
            }

            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }
    
</style>