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
            <button><i class="fa-regular fa-floppy-disk" style="margin-right: 10px;"></i>Save</button>
            <button class="btn-outline"> <i class="fa-solid fa-arrow-right-from-bracket" style="margin-right: 10px;"></i>Logout</button>
        </div>
        
    </div>

    <div class="List">
        <div class="Todo">
            <input type="checkbox">
            <span>Testing git changes</span>
            <button><i class="fa-solid fa-trash" style="margin-right: 10px;"></i>Delete</button>
        </div>
        <div class="Todo">
            <input type="checkbox">
            <span>Buy groceries</span>
            <button><i class="fa-solid fa-trash" style="margin-right: 10px;"></i>Delete</button>
        </div>
        <div class="Todo">
            <input type="checkbox">
            <span>Buy groceries</span>
            <button><i class="fa-solid fa-trash" style="margin-right: 10px;"></i>Delete</button>
        </div>
    </div>

    <div class="AddTodo">
        <input class="" type="text" placeholder="What do you want to do next?">
        <button><i class="fa-regular fa-square-plus" style="margin-right: 10px;"></i>Add</button>
    </div>
</div>

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
</style>