/** 1. Tag it as client component */
'use client';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import { ReactNode } from 'react';
import AllRestaurants from './all-restaurants';
import FeaturedRestaurants from './featured-restaurants';
import Hero from './hero';
import LandingPage from './landing-page';
import Restaurant from './restaurant';

/** 2. Import your components */

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: 'your-access-token',
  use: [apiPlugin],
  components: {
    restaurant: Restaurant,
    hero: Hero,
    landing_page: LandingPage,
    featured_restaurants: FeaturedRestaurants,
    all_restaurants: AllRestaurants,
  },
});
export default function StoryblokProvider({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
