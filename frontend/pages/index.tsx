import Link from 'next/link';

// Component for the main heading
const LandingHeader = () => (
  <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-teal-400 drop-shadow-lg mb-6">
    r3k
  </h1>
);

// Component for the descriptive paragraph
const LandingDescription = () => (
  <p className="text-xl md:text-2xl text-gray-400 mb-10 text-center max-w-xl">
    Tactical Mission Planner for your top 1–3 daily objectives. Maintain focus. Track progress. Dominate your day.
  </p>
);

// Component for the call-to-action link/button
const EnterOpsRoomLink = () => (
  <Link href="/overview" legacyBehavior> 
    <a className="bg-teal-600 hover:bg-teal-500 text-black font-bold py-3 px-6 rounded-2xl shadow-lg uppercase tracking-wider transition">
      Enter Ops Room
    </a>
  </Link>
);

// Main Landing Page Component
export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-gray-100 font-mono px-4">
      <LandingHeader />
      <LandingDescription />
      <EnterOpsRoomLink />
    </main>
  );
}