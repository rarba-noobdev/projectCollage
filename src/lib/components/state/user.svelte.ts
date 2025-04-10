import { goto } from '$app/navigation';
import type { Session, SupabaseClient, User } from '@supabase/supabase-js';
import { setContext, getContext } from 'svelte';

interface UserStateProps {
	session: Session | null;
	supabase: SupabaseClient | null;
	user: User | null;
}

export class UserState {
	session = $state<Session | null>(null);
	supabase = $state<SupabaseClient | null>(null);
	user = $state<User | null>(null);

	constructor(data: UserStateProps) {
		this.updateState(data);
	}

	updateState(data: UserStateProps) {
		this.session = data.session;
		this.supabase = data.supabase;
		this.user = data.user;
	}

	async logOut() {
		await this.supabase?.auth.signOut();
		goto('/');
	}
}

const USER_STATE_KEY = Symbol('THANKS_VIKI_TAWHEED');

export function setUserState(data: UserStateProps) {
	return setContext(USER_STATE_KEY, new UserState(data));
}
export function getUserState() {
	return <ReturnType<typeof setUserState>>getContext(USER_STATE_KEY);
}
