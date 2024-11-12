import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../lib/firebase/firebase";
import { writable } from "svelte/store";

export const authStore = writable({
    user: null,
    loading: true,
    data: {},
});

export const authHandler = {
    signup: async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            authStore.update(store => ({
                ...store,
                user: userCredential.user,
                loading: false,
            }));
            return userCredential.user;
        } catch (error) {
            console.error("Error during signup:", error);
            throw error;
        }
    },
    
    login: async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            authStore.update(store => ({
                ...store,
                user: userCredential.user,
                loading: false,
            }));
            return userCredential.user;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    },
    
    logout: async () => {
        try {
            await signOut(auth);
            authStore.update(store => ({
                ...store,
                user: null,
                loading: false,
            }));
        } catch (error) {
            console.error("Error during logout:", error);
            throw error;
        }
    }
};