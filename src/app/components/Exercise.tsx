import Link from "next/link";

export default function Exercise() {
  const movePage = () => {};
  return (
    <div className="text-center">
      <h1>Pick Your Exercise</h1>
      <ul>
        {/* all these links should open their own page */}
        <li>
          <Link href="/chest">Chest</Link>
        </li>
        <li>
          <Link href="/back">Back</Link>
        </li>
        <li>
          <Link href="/legs">Legs</Link>
        </li>
        <li>
          <Link href="/shoulder">Shoulder</Link>
        </li>
        <li>
          <Link href="/biceps">Biceps</Link>
        </li>
      </ul>
      <Link href="/workout">START WORKOUT</Link>
    </div>
  );
}
