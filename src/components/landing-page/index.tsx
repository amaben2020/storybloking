import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

const LandingPage = ({ blok }: any) => {
  console.log('BLOK', blok);
  // console.log('RESTAURANTS', restaurants);

  return (
    <main {...storyblokEditable(blok)}>
      {blok?.body?.map((nestedBlok: any) => (
        <StoryblokComponent
          // restaurants={restaurants}
          blok={nestedBlok}
          key={nestedBlok._uid}
        />
      ))}
    </main>
  );
};

export default LandingPage;
