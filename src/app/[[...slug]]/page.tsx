import { getStoryblokApi } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';

export default async function Page({ params }: { params: { slug: string[] } }) {
  let slug = params.slug ? params.slug.join('/') : 'home';
  console.log('slug', slug);
  const storyblokApi = getStoryblokApi();
  let sb = await storyblokApi?.get(
    `cdn/stories/${slug}`,
    {
      version: 'draft',
      resolve_relations: ['featured_restaurants.restaurants'],
    }
    // { cache: 'no-store' }
  );

  console.log(sb);

  return (
    <div className="mb-40 text-white">
      {/* before relation */}
      {/* <StoryblokStory story={sb?.data.story} bridgeOptions={{}} /> */}

      <StoryblokStory
        story={sb?.data.story}
        bridgeOptions={{
          resolveRelations: ['featured_restaurants.restaurants'],
        }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  let sb = await storyblokApi?.get('cdn/links/', {
    version: 'draft',
  });
  console.log('data', sb?.data);
  let paths: any[] = [];

  Object.keys(sb?.data.links || []).forEach((linkKey) => {
    if (sb?.data.links[linkKey].is_folder) {
      return;
    }
    const slug = sb?.data.links[linkKey].slug;
    if (slug == 'home') {
      return;
    }
    let splittedSlug = slug.split('/');
    paths.push({ slug: splittedSlug });
  });
  return paths;
}
