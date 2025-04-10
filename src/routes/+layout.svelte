<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation';
	import { setUserState } from '$lib/components/state/user.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	let { data, children } = $props();
	let userState = setUserState({ session: data.session, supabase: data.supabase, user: data.user });
	let { session, supabase } = $derived(data);

	$effect(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			userState.updateState({ session: newSession, supabase, user: newSession?.user || null });
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => data.subscription.unsubscribe();
	});
</script>

<Header></Header>
{@render children()}
