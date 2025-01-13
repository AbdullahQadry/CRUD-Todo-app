<script>
    import { onMount } from "svelte";
    import { authStore } from "../store/store";

    const backend_url = "backend-811770959487.europe-west3.run.app";

    const nonAuthRoutes = ["/", "/product"]; // Adjust public routes as necessary

    onMount(() => {
        console.log("Mounting");

        const token = localStorage.getItem("token"); // Retrieve the JWT token from localStorage
        const currentPath = window.location.pathname;
        console.log(token, currentPath);

        if (!token && !nonAuthRoutes.includes(currentPath)) {
            window.location.href = "/";
            return;
        }

        if (token && currentPath === "/") {
            window.location.href = "/dashboard";
            return;
        }

        if (!token) return; // Stop further execution if no token is found

        console.log("we are here");
        (async () => {
            try {
                const response = await fetch(`https://${backend_url}/auth/verify`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("response: ", response);

                if (response.status === 401) {
                    // Token is invalid or expired
                    localStorage.removeItem("token");
                    window.location.href = "/";
                    return;
                }

                const userData = await response.json();
                console.log("User data:", userData);

                const todosResponse = await fetch(`https://${backend_url}/users/${userData.userId}/todos`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (todosResponse.status === 403) {
                    console.error("Permission denied");
                    return;
                }

                const todosData = await todosResponse.json();
                const TodoItems = todosData.map((item) => item.content);

                authStore.update((curr) => ({
                    ...curr,
                    user: userData,
                    data: { email: userData.email, todos: TodoItems },
                    loading: false,
                }));
            } catch (error) {
                console.error("Error fetching data:", error);
                localStorage.removeItem("token");
                window.location.href = "/";
            }
        })();
    });
</script>

<slot />
