// @returns A string with all valid class names.
export function clsx(...classes: any[]): string {
	return classes.filter(Boolean).join(' ');
}

export function getNameFromEmail(email: string): string {
	return email.split('@')[0];
}