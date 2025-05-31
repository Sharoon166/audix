"use client";

export default function Footer({ slide = 0, slideLength = 0 }) {
  // Ensure values are valid numbers
  const safeSlide = typeof slide === 'number' && !isNaN(slide) ? slide : 0;
  const safeSlideLength = typeof slideLength === 'number' && !isNaN(slideLength) ? slideLength : 0;
  
  // Calculate current slide display (1-based instead of 0-based)
  const currentSlideDisplay = safeSlide + 1;
  
  return (
    <footer className="text-sm flex justify-between items-center mt-8">
      <p>&copy; {new Date().getFullYear()} Audix. All rights reserved.</p>
      {safeSlideLength > 0 && (
        <div className="flex items-center font-molgan text-2xl gap-2">
          <span>{String(currentSlideDisplay)}</span>
          <span>/</span>
          <span>{String(safeSlideLength)}</span>
        </div>
      )}
    </footer>
  );
}
