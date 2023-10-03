import { redirect } from 'next-intl/server';

export default function LocalePage() {
  redirect('/recipes');
}
