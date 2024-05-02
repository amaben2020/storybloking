import { storyblokEditable } from '@storyblok/react/rsc';
const Dish = ({ dish }: any) => {
  return (
    <section {...storyblokEditable(dish)}>
      <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
        <img
          alt=""
          className="aspect-video w-80 rounded-t-2xl object-cover object-center"
          src={dish?.image?.filename}
        />
        <div className="p-6">
          {/* <small className="text-gray-900 text-xs">
            Rating - {dish.rating.value}
          </small> */}
          <h1 className="text-2xl font-medium text-gray-700 pb-2">
            {dish?.name}
          </h1>
          <p className="text text-gray-500 leading-6">{dish?.description}</p>
        </div>
      </div>
    </section>
  );
};
export default Dish;
