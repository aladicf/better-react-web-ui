export default function Page() {
	return (
		<main className="bg-white p-2 text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
			<h1 className="text-xl">Shift handoffs, written down</h1>
			<p>Keep opening tasks, stock notes, and unfinished work together.</p>
			<a className="text-blue-700 underline" href="/demo">Open the demo</a>
			<section><h2 className="text-xl">Opening tasks</h2><p>See what needs doing before service.</p></section>
			<section><h2 className="text-xl">Stock notes</h2><p>Tell the next shift what needs replacing.</p></section>
		</main>
	);
}
