import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[#f8f9fa] dark:bg-gray-900 py-12 md:py-16">
      <div className="google-container">
        <div className="mb-8">
          <h3 className="text-base font-medium mb-4 font-google-sans dark:text-white">
            Sign up for the Google Workspace newsletter
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="border border-[#dadce0] dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md px-4 py-2 w-full sm:w-[300px]"
            />
            <button className="bg-[#1a73e8] text-white px-6 py-2 rounded-md hover:bg-[#1967d2] dark:bg-[#4285f4] dark:hover:bg-[#5e97f6] transition-colors">
              Sign up
            </button>
          </div>
        </div>

        <div className="border-t border-[#dadce0] dark:border-gray-800 pt-8 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4">
            <div>
              <h4 className="text-sm font-medium mb-4 font-google-sans text-[#3a485d] dark:text-gray-300">
                Products
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#">Gmail</FooterLink>
                <FooterLink href="#">Drive</FooterLink>
                <FooterLink href="#">Meet</FooterLink>
                <FooterLink href="#">Chat</FooterLink>
                <FooterLink href="#">Calendar</FooterLink>
                <FooterLink href="#">Docs</FooterLink>
                <FooterLink href="#">Sheets</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 font-google-sans text-[#3a485d] dark:text-gray-300">
                Solutions
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#">New Business</FooterLink>
                <FooterLink href="#">Small Business</FooterLink>
                <FooterLink href="#">Enterprise</FooterLink>
                <FooterLink href="#">Frontline Workers</FooterLink>
                <FooterLink href="#">Education</FooterLink>
                <FooterLink href="#">Nonprofits</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 font-google-sans text-[#3a485d] dark:text-gray-300">
                Security and management
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#">Security</FooterLink>
                <FooterLink href="#">Endpoint</FooterLink>
                <FooterLink href="#">Work Safer</FooterLink>
                <FooterLink href="#">Admin console</FooterLink>
                <FooterLink href="#">Vault</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 font-google-sans text-[#3a485d] dark:text-gray-300">
                Pricing
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#">Business plans</FooterLink>
                <FooterLink href="#">Enterprise plans</FooterLink>
                <FooterLink href="#">Frontline plans</FooterLink>
                <FooterLink href="#">Education plans</FooterLink>
                <FooterLink href="#">Pricing calculator</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 font-google-sans text-[#3a485d] dark:text-gray-300">
                Resources
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#">Training & certification</FooterLink>
                <FooterLink href="#">Browser Chrome Enterprise</FooterLink>
                <FooterLink href="#">Google Cloud</FooterLink>
                <FooterLink href="#">Google Workspace Status</FooterLink>
                <FooterLink href="#">Partner program</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 font-google-sans text-[#3a485d] dark:text-gray-300">
                Learning and support
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">Customer stories</FooterLink>
                <FooterLink href="#">Support for admins</FooterLink>
                <FooterLink href="#">Support for users</FooterLink>
                <FooterLink href="#">Google Workspace on Twitter</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#dadce0] dark:border-gray-800 pt-8 pb-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="mr-6">
              <Image
                src="https://ext.same-assets.com/2256776582/1294131253.svg"
                alt="Google"
                width={24}
                height={24}
              />
            </Link>
            <div className="flex space-x-6">
              <FooterLink href="#">About Google</FooterLink>
              <FooterLink href="#">Google products</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
            </div>
          </div>
          <div className="flex items-center">
            <select className="bg-transparent text-[#5f6368] dark:text-gray-300 text-sm border-none outline-none font-google-sans-text">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-[#5f6368] hover:text-[#202124] dark:text-gray-400 dark:hover:text-white font-google-sans-text"
      >
        {children}
      </Link>
    </li>
  );
}
