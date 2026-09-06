'use client';

import { useState } from 'react';

export default function Page() {
	const [open, setOpen] = useState(false);
	return (
		<main className="p-8">
			<div className="inline-block cursor-pointer rounded bg-blue-700 px-4 py-2 text-white" onClick={() => setOpen(!open)}>Menu</div>
			<nav hidden={!open} aria-label="Main"><a href="/demo">Open the demo</a></nav>
		</main>
	);
}
