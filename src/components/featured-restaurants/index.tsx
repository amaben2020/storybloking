import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
const FeaturedRestaurants = ({ blok }: any) => {
  return (
    <section {...storyblokEditable(blok)}>
      <p className="text-5xl mt-8 text-center">Featured Restaurants</p>
      <div className="mt-8 grid w-full grid-cols-1 gap-2 mx-auto sm:grid-cols-3">
        {blok?.restaurants?.map((r: any) => (
          <div key={r.slug}>
            <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
              <Image
                alt=""
                className="aspect-video w-80 rounded-t-2xl object-cover object-center"
                src={r.content.background_image?.filename}
                width={400}
                height={500}
              />
              <div className="p-6">
                <small className="text-gray-900 text-xs">
                  {/* Rating - {reestaurant.rating.value} */}
                </small>
                <h1 className="text-2xl font-medium text-gray-700 pb-2">
                  {r.content.name}
                </h1>
                <p className="text text-gray-500 leading-6">
                  {r.content.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturedRestaurants;
