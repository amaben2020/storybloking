const AllRestaurants = ({ restaurants }) => {
  console.log(restaurants);
  return (
    <section>
      <p className="text-5xl mt-8 text-center">All Restaurants</p>
      <div className="mt-8 grid w-full grid-cols-1 gap-2 mx-auto sm:grid-cols-3">
        {restaurants.map((r) => (
          <div key={r.slug}>
            <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
              <img
                className="aspect-video w-80 rounded-t-2xl object-cover object-center"
                src={r.content.background_image?.filename}
              />
              <div className="p-6">
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

export default AllRestaurants;
