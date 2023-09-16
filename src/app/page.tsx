import 'server-only';

import { RecipesList } from './(recipes)/RecipesList';

export default function RootPage() {
  return (
    <main>
      <h1>Hello Simmerize!</h1>
      <RecipesList />
    </main>
  );
}
