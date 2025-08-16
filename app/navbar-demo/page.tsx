import { CombinedNavbar } from "@/components/combined-navbar"

export default function NavbarDemo() {
  return (
    <main className="min-h-screen">
      <CombinedNavbar />
      
      {/* Content to demonstrate sticky behavior and scrolling effect */}
      <div className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Sticky Navbar Components Demo
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Top Navbar Features (Golden Background)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Sticky positioning</strong> - Always visible at the top</li>
                <li><strong>Golden background</strong> - Uses bg-yellow-500</li>
                <li><strong>White text</strong> - All text elements in white</li>
                <li>Company phone number on the left side</li>
                <li>Company email and download button on the right side</li>
                <li>Responsive design for all screen sizes</li>
                <li>Hover effects with subtle gray transitions</li>
                <li>Download button with white background and golden text</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Main Navbar Features (Sticky Below Top Navbar)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Sticky positioning</strong> - Always visible below top navbar</li>
                <li><strong>No space between navbars</strong> - Seamless connection</li>
                <li><strong>No animations</strong> - Static, clean appearance</li>
                <li>Company logo on the left side</li>
                <li>Navigation menu with <strong>4 items</strong>:</li>
                <li className="ml-6">• <strong>HOME</strong> - New addition</li>
                <li className="ml-6">• Cities</li>
                <li className="ml-6">• Courses</li>
                <li className="ml-6">• Services (dropdown)</li>
                <li>Consistent blue background (no transparency changes)</li>
                <li>Mobile-responsive sheet menu</li>
                <li>Proper z-index layering (z-40)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Services Dropdown Menu
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Workshops</li>
                <li>In-House Training</li>
                <li>Customize Your Course</li>
                <li>Consulting</li>
                <li>Self Learning</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sticky Behavior & Technical Features
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Top Navbar</strong>: <code>sticky top-0 z-50</code></li>
                <li><strong>Main Navbar</strong>: <code>sticky top-8 z-40</code></li>
                <li>Both navbars stay visible while scrolling</li>
                <li><strong>No space between navbars</strong> - Seamless connection</li>
                <li><strong>No animations or transitions</strong> on main navbar</li>
                <li>Built with shadcn/ui components</li>
                <li>Fully responsive design</li>
                <li>Accessibility features with ARIA labels</li>
                <li>Proper z-index layering for overlapping</li>
                <li>Static, clean appearance without motion</li>
              </ul>
            </section>

            <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
                🎯 Key Updates Made
              </h2>
              <ul className="list-disc list-inside space-y-2 text-yellow-700">
                <li><strong>Sticky positioning</strong> for both navbars</li>
                <li><strong>Golden background</strong> (bg-yellow-500) for top navbar</li>
                <li><strong>White text</strong> for all top navbar elements</li>
                <li><strong>HOME menu item</strong> added to main navigation</li>
                <li><strong>No space between navbars</strong> - Seamless connection</li>
                <li><strong>No animations</strong> - Static, clean appearance</li>
                <li><strong>Proper z-index</strong> layering (z-50, z-40)</li>
                <li><strong>Responsive sticky behavior</strong> on all devices</li>
              </ul>
            </section>
          </div>

          {/* Add some content to enable scrolling and demonstrate sticky behavior */}
          <div className="h-96 bg-gray-100 rounded-lg mt-16 flex items-center justify-center">
            <p className="text-gray-500 text-lg text-center">
              <strong>Scroll down to see the sticky navbar behavior!</strong><br />
              Both navbars will remain visible at the top with no space between them
            </p>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg mt-8 flex items-center justify-center">
            <p className="text-gray-500 text-lg text-center">
              <strong>Notice the seamless connection</strong><br />
              Top navbar: Golden background, Main navbar: Blue background - No gaps!
            </p>
          </div>

          <div className="h-96 bg-gray-300 rounded-lg mt-8 flex items-center justify-center">
            <p className="text-gray-500 text-lg text-center">
              <strong>Clean, static appearance</strong><br />
              No animations or transitions - just smooth, consistent navigation
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
