"use client";
export default function Footer({currentslide,length}) {
  return (
    <>
      <footer className="text-sm flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Audix. All rights reserved.</p>
        <p className="font-molgan">
          <span className="text-xl font-bold">{currentslide+1}</span> /{length}
        </p>
      </footer>
    </>
  );
}
