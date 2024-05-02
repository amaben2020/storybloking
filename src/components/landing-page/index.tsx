import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

const LandingPage = ({ blok, restaurants }: any) => {
  console.log(blok);
  console.log(restaurants);

  return (
    <main {...storyblokEditable(blok)}>
      {blok?.body?.map((nestedBlok: any) => (
        <StoryblokComponent
          restaurants={restaurants}
          blok={nestedBlok}
          key={nestedBlok._uid}
        />
      ))}
    </main>
  );
};

export default LandingPage;
