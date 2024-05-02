import { storyblokEditable } from '@storyblok/react/rsc';
//@ts-ignore
export default function SiteConfig({ children, data, blok }) {
  if (!data) {
    data = blok;
  }
  return (
    <div className="min-h-screen flex flex-col" {...storyblokEditable(blok)}>
      {/* Header */}
      <div className=" w-full">
        <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              className="text-lg font-bold tracking-tighter text-green-400 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
              href="/"
            >
              {' '}
              {data?.main_text}{' '}
            </a>
          </div>
          <nav className="flex-col flex-grow hidden md:flex md:justify-start md:flex-row">
            <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
              {data.menu.map((m: any) => {
                return (
                  <li key={m.name}>
                    <a
                      href={m.link.story.slug}
                      className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"
                    >
                      {m.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Children */}
      <div className="flex-grow">{children}</div>
      {/* Footer */}
      <footer className="w-full" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="px-4 py-12 w-full bg-gray-50 sm:px-6 lg:px-16 flex justify-center ">
          <div className="flex flex-wrap items-baseline lg:justify-center space-x-4">
            <span className="mt-2 text-sm font-light text-gray-500">
              {data.address}
            </span>
            <span className="mt-2 text-sm font-light text-gray-500">
              {data.email}
            </span>
            <span className="mt-2 text-sm font-light text-gray-500">
              {data.phone}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
