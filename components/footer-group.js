import Link from "next/link";

export default function footer() {
  return (
    <footer className="border-t border-gray-200/50 bg-white/50 backdrop-blur-sm mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-molgan text-xl font-bold text-gray-900">
              Audix
            </h3>
            <p className="text-gray-600">
              Premium audio experiences for the modern lifestyle.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Products</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="/earbuds"
                  className="hover:text-gray-900 transition-colors"
                >
                  Earbuds
                </Link>
              </li>
              <li>
                <Link
                  href="/headphones"
                  className="hover:text-gray-900 transition-colors"
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  href="/speakers"
                  className="hover:text-gray-900 transition-colors"
                >
                  Speakers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="/help"
                  className="hover:text-gray-900 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="hover:text-gray-900 transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-gray-900 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="hover:text-gray-900 transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Audix. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link
              href="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-gray-900 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
