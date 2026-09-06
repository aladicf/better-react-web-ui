export default function Page() {
	return (
		<main className="space-y-12 p-8">
			<style>{'@keyframes feature-enter { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }'}</style>
			<h1>Keep the next shift informed</h1>
			<section className="opacity-0 motion-safe:animate-[feature-enter_600ms_ease-out_forwards]"><h2>Opening tasks</h2><p>See what needs doing before service.</p></section>
			<section className="opacity-0 motion-safe:animate-[feature-enter_600ms_ease-out_150ms_forwards]"><h2>Stock notes</h2><p>Record what needs replacing.</p></section>
			<section className="opacity-0 motion-safe:animate-[feature-enter_600ms_ease-out_300ms_forwards]"><h2>Unfinished work</h2><p>Leave the next shift a clear next step.</p></section>
		</main>
	);
}
