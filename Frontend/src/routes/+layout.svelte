<script>
    import { onMount } from "svelte";
     import { auth, db } from "../lib/firebase/firebase";
    import { authStore } from "../store/store";

    const nonAuthRoutes = ["/", "product"];

    onMount(() => {
        console.log("Mounting");
        const unsubscribe = auth.onAuthStateChanged(async user => {
            const currentPath = window.location.pathname;

            if (!user && !nonAuthRoutes.includes(currentPath)) {
                window.location.href = "/";
                return;
            }

            if (user && currentPath === "/") {
                window.location.href = "/dashboard";
                return;
            }

            if (!user) {
                return;
            }

            const docRef =1;
            console.log("Fetching User");
            const response = await fetch(
                "http://127.0.0.1:3000/users/1/todos",
                { method :"GET"}   
            );

            const userData = await response.json()
            console.log ("userData: ", userData)
            const dataToSetToStore = {
                    email: user.email,
                    todos: userData,
                };
            authStore.update((curr) => {
                return {
                    ...curr,
                    user,
                    data: dataToSetToStore,
                    loading: false,
                };
            });
        });
        return unsubscribe;
    });

</script>
<slot/>