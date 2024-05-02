//@ts-nocheck

import { storyblokEditable } from '@storyblok/react/rsc';
import Dish from './../dish';
const Restaurant = ({ blok }) => {
  console.log(blok);

  return (
    <main {...storyblokEditable(blok)}>
      <div>
        <div
          className={`min-h-[500px]
              relative
              flex
              items-end
              justify-center
              p-9
              my-6
              rounded-[5px]
              overflow-hidden`}
        >
          <div className="relative z-10 text-center">
            <h1 className="text-7xl text-white font-bold mb-3">{blok.title}</h1>
          </div>
          <img
            src={`${blok.background_image?.filename}`}
            alt={blok.background_image.alt}
            className="absolute top-0 left-0 z-0 w-full h-full object-cover"
          />
        </div>
        <div className="px-6">
          <h2 className="text-2xl font-bold ">{blok.description}</h2>
          <hr className="flex-grow border-t mt-2 border-gray-300" />
          <div className="flex justify-between mt-4">
            <p className="text-xl">📍{blok.city}</p>
            <div className="flex ">
              {blok.cuisines.map((c) => (
                <span
                  key={c}
                  className="px-4 py-1 rounded-full mx-2 text-white text-sm  bg-green-500 "
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between gap-4 mt-4">
            <p className="font-thin">Vegan {blok.vegan ? '✅' : '❌'}</p>
            {/* <p className="font-thin">
                Rating - <span className="font-bold">{blok.rating.value}</span>
              </p> */}
          </div>
        </div>
        <div className="mt-8 grid w-full grid-cols-1 gap-2 mx-auto sm:grid-cols-3">
          {blok.dishes.map((d: any) => (
            <div className=" " key={d}>
              <Dish dish={d}></Dish>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Restaurant;
