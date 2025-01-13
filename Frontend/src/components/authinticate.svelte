<script>
    import { onMount } from "svelte";

    let email = "";
    let password = "";
    let repassword = "";
    let error = false;
    let register = false;
    let Authing = false;
    let SubmitBtn;
    let token; // Store the token after login
    let userId;

    onMount(() => {
        SubmitBtn.focus();
    });

    async function registerUser(email, password) {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.status === 201) {
            return data; // Return user data
        } else {
            throw new Error(data.error); // Throw error for handling
        }
    }

    async function loginUser(email, password) {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.status === 200) {
            return { token: data.token, userId: data.user_id }; // Return the token
        } else {
            throw new Error(data.error); // Throw error for handling
        }
    }

    async function VerfiyAuth() {
        if (Authing) return;

        if (!email || !password || (register && !repassword)) {
            error = true;
            return;
        }
        Authing = true;
        try {
            if (!register) {
                // Perform login
                const data = await loginUser(email, password);
                token = data.token;
                userId = data.userId;

                localStorage.setItem("token", token);
                localStorage.setItem("userId", userId)
                // Store the token or set it up in your state/store as needed
                console.log("Logged in successfully. Token: ", token);
                window.location.href = "/dashboard";
            } else {
                // Perform registration
                const userData = await registerUser(email, password);
                console.log("Registered successfully. User Data: ", userData);
            }
            error = false;
        } catch (err) {
            console.log("Error: ", err.message);
            error = true;
        } finally {
            Authing = false; // Reset the Authing status
        }
    }

    function registerswitch() {
        register = !register;
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            SubmitBtn.focus();
            SubmitBtn.click();
        }
    }
</script>

<div class="AuthContainer">
    <form class="box" action="">
        <div>
            <svg
                width="80px"
                height="80px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512;"
                xml:space="preserve"
            >
                <g>
                    <g>
                        <path
                            style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                            d="&#10;&#9;&#9;&#9;M492,331.277V80.919c0-33.137-26.863-60-60-60H80c-33.137,0-60,26.863-60,60v350.163c0,33.137,26.863,60,60,60h352&#10;&#9;&#9;&#9;c33.071,0,59.889-26.758,59.995-59.804"
                        />
                    </g>
                    <g>
                        <g>
                            <line
                                style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                                x1="101.498"
                                y1="113.466"
                                x2="155.577"
                                y2="113.466"
                            />
                            <line
                                style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                                x1="128.428"
                                y1="116.593"
                                x2="128.428"
                                y2="211.389"
                            />
                        </g>
                        <circle
                            style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                            cx="250.651"
                            cy="162.427"
                            r="48.961"
                        />
                        <g>
                            <g>
                                <path
                                    style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                                    d="&#10;&#9;&#9;&#9;&#9;&#9;M172.307,349.573c0,26.183-14.532,46.901-37.587,47.304c-7.674,0.134-27.508,0.209-27.508,0.209l-0.193-95.026&#10;&#9;&#9;&#9;&#9;&#9;c0,0,17.844,0,26.913,0C159.221,302.06,172.307,323.39,172.307,349.573z"
                                />
                            </g>
                            <circle
                                style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                                cx="272.18"
                                cy="349.573"
                                r="48.961"
                            />
                        </g>
                        <line
                            style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                            x1="378.374"
                            y1="113.466"
                            x2="410.502"
                            y2="113.466"
                        />
                        <line
                            style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                            x1="378.374"
                            y1="208.006"
                            x2="410.502"
                            y2="208.006"
                        />
                        <line
                            style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                            x1="378.374"
                            y1="302.546"
                            x2="410.502"
                            y2="302.546"
                        />
                        <line
                            style="fill:none;stroke:#000000;stroke-width:40;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                            x1="378.374"
                            y1="397.086"
                            x2="410.502"
                            y2="397.086"
                        />
                    </g></g
                ><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g
                ></g><g></g><g></g> <g></g><g></g><g></g><g></g>
            </svg>

            <h1>
                {#if register}
                    <span>
                        Register to your<br />favorite todo app
                    </span>
                {:else}
                    <span>
                        Login to your<br />favorite todo app
                    </span>
                {/if}
            </h1>
            <div class="otherway">
                {#if register}
                    <div>
                        <p style="display:inline-block">
                            Already have an account?
                        </p>
                        <button
                            class="switcher"
                            on:click={registerswitch}
                            on:keydown={() => {}}>Login</button
                        >
                    </div>
                {:else}
                    <div>
                        <p style="display:inline-block">
                            Don't have an account?
                        </p>
                        <button
                            class="switcher"
                            on:click={registerswitch}
                            on:keydown={() => {}}>Register</button
                        >
                    </div>
                {/if}
            </div>
        </div>
        <div class="formcontent">
            {#if error}
                <p class="error">The information you entered is incorrect!</p>
            {/if}

            <label>
                <input bind:value={email} type="email" placeholder="Email" />
            </label>

            <label>
                <input
                    bind:value={password}
                    type="password"
                    placeholder="Password"
                />
            </label>

            {#if register}
                <label>
                    <input
                        bind:value={repassword}
                        type="password"
                        placeholder="Repeat password"
                    />
                </label>
            {/if}

            <button
                bind:this={SubmitBtn}
                on:keydown={handleKeyDown}
                type="submit"
                on:click={VerfiyAuth}
            >
                {#if register}
                    create your account
                {:else}
                    Login
                {/if}
            </button>
        </div>
    </form>
</div>

<style>
    .AuthContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        flex: 1;
        height: 100vh;
        width: 100vw;
        background-color: #e9e9e9;
        background-color: #e9e9e9;
    }

    form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: left;
        flex-direction: row;
        justify-content: center;
        align-items: left;
        text-align: left;
        gap: 60px;
        gap: 60px;
        width: 60%;
        height: auto;
        height: auto;
        background-color: white;
        border-radius: 10px;
        padding: 80px 80px;
    }

    .formcontent {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-end;
        gap: 30px;
        width: 34%;
        height: 100%;
        margin-right: 40px;
        margin-top: 40px;
    }

    form label {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        padding: 14px;
        font-size: 14px;
        border-width: 20px;
        border: solid 1px rgb(211, 211, 211);
        margin: 0;
    }

    form input {
        border: none;
        background: transparent;
        width: inherit;
        border: none;
        font-size: inherit;
        font-weight: 600;
    }
    form input:focus {
        border: none;
        outline: none;
    }

    form input::placeholder {
        font-weight: 400;
    }

    form h1 {
        text-align: left;
        margin: 0;
        padding: 0;
    }

    form button {
        background: black;
        color: white;
        border: none;
        font-size: 18px;
        padding: 12px 30px;
        border-radius: 4px;
        margin-left: auto;
        cursor: pointer;
        transition: 0.4s;
    }
    form button:hover {
        border-radius: 16px;
    }

    .error {
        color: rgb(255, 81, 81);
        font-size: 14px;
        font-weight: 600;
        margin: 0;
        padding: 0;
        margin-right: auto;
    }

    .otherway {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        gap: 20px;
        width: 100%;
        height: auto;
        margin-top: 10px;
    }
    .switcher {
        color: black;
        background: transparent;
        border: none;
        font-size: 18px;
        font-weight: 600;
        padding: 0;
        cursor: pointer;
        transition: 0.4s;
    }

    .box {
        position: relative;
        transform-style: preserve-3d;
        border-radius: 20px;
    }
    .box::before {
        content: "";
        position: absolute;
        inset: 80px;
        background: conic-gradient(
            from 90deg at 40% -25%,
            #ffd700,
            #f79d03,
            #ee6907,
            #e6390a,
            #de0d0d,
            #d61039,
            #cf1261,
            #c71585,
            #cf1261,
            #d61039,
            #de0d0d,
            #ee6907,
            #f79d03,
            #ffd700,
            #ffd700,
            #ffd700
        );
        filter: blur(80px);
        transform: translate3d(0px, 0px, -1px);
        border-radius: inherit;
        pointer-events: none;
    }
</style>
