export default function App() {
  return (
    <>
      {/*Nav*/}
      <nav id="header" className="w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <div className="order-1 md:order-2">
            <a
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >
              <svg
                className="fill-current text-gray-800 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
              </svg>
              TEDDIR
            </a>
          </div>
        </div>
      </nav>
      <div
        className="carousel relative container mx-auto"
        style={{ maxWidth: 1600 }}
      >
        <div className="carousel-inner relative overflow-hidden w-full">
          {/*Slide 1*/}
          <input
            className="carousel-open absolute opacity-0"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden={undefined}
            defaultChecked={true}
          />
          <div
            className="carousel-item absolute"
            style={{ height: "50vh" }}
          >
            <div
              className="flex h-full w-full mx-auto md:items-center bg-cover bg-right"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1652410055929-a17c5244073f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-white text-2xl my-4">
                    Sajadah Travel – Your Perfect Travel Companion for Comfort & Convenience
                  </p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-100 text-gray-300 leading-relaxed hover:text-white hover:border-white"
                    href="#store"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Store
              </a>
            </div>
          </nav>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="https://amzn.to/4jPjIvC">
              <img
                className="hover:grow hover:shadow-lg aspect-square"
                src="/ama-1.jpg"
              />
              <div className="pt-3 flex items-center justify-between">
                <p className="line-clamp-2">ihvan online Muslim Prayer Rug and Prayer Beads with Elegant Design Cylinder Gift Box, Janamaz, Sajadah, Soft Islamic Gifts Set, Carpet Mat, Taffeta Fabric, Black</p>
              </div>
              <a
                className="inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                href="https://amzn.to/4jPjIvC"
              >
                book now
              </a>
            </a>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="https://amzn.to/3WR9TDD">
              <img
                className="hover:grow hover:shadow-lg aspect-square"
                src="/ama-2.jpg"
              />
              <div className="pt-3 flex items-center justify-between">
                <p className="line-clamp-2">Modefa Turkish Islamic Prayer Rug - Soft Velvet Janamaz Praying Carpet - Comfortable Muslim Praying Mat for Men & Women - Ramadan or Eid Gift - with Kufi Prayer Cap - Elegant Swirl (Blue)</p>
              </div>
              <a
                className="inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                href="https://amzn.to/3WR9TDD"
              >
                book now
              </a>
            </a>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="https://amzn.to/3WQhXEA">
              <img
                className="hover:grow hover:shadow-lg aspect-square"
                src="/ama-3.jpg"
              />
              <div className="pt-3 flex items-center justify-between">
                <p className="line-clamp-2">Muslim Prayer Rug and Prayer Beads with Elegant Gift Box | Janamaz | Sajadah | Soft Islamic Prayer Rug | Islamic Gifts Set | Prayer Carpet Mat, Taffeta Fabric, Pink</p>
              </div>
              <a
                className="inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                href="https://amzn.to/3WQhXEA"
              >
                book now
              </a>
            </a>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="https://amzn.to/3CGyHHm">
              <img
                className="hover:grow hover:shadow-lg aspect-square"
                src="/ama-4.jpg"
              />
              <div className="pt-3 flex items-center justify-between">
                <p className="line-clamp-2">Muslim Prayer Rug and Prayer Beads with Elegant Cylinder Gift Box | Janamaz | Sajadah | Soft Islamic Prayer Rug | Islamic Gifts Set | Prayer Carpet Mat, Taffeta Fabric, Grey</p>
              </div>
              <a
                className="inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                href="https://amzn.to/3CGyHHm"
              >
                book now
              </a>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <a
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
            href="#"
          >
            About
          </a>
          <p className="my-8">
            With Sajadah Travel, every journey becomes a better experience. Offering practical, stylish, and durable travel products, they provide everything you need for comfort and convenience during your travels. Whether you’re embarking on a spiritual journey or a business trip, Sajadah Travel ensures that your travel experience is peaceful, organized, and stress-free.
          </p>
        </div>
      </section>
    </>

  )
}
