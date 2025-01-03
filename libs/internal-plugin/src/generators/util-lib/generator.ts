import { formatFiles, Tree } from '@nx/devkit';
import { libraryGenerator } from '@nx/js';
import { join } from 'path';
import { UtilLibGeneratorSchema } from './schema';

export async function utilLibGenerator(
  tree: Tree,
  options: UtilLibGeneratorSchema
) {
  await libraryGenerator(tree, {
    name: `${options.directory}-util-${options.name}`,
    directory: join('libs', options.directory, `util-${options.name}`),
    tags: `type:util, scope:${options.directory}`,
  });
  // comment the rest of the code
  await formatFiles(tree);
}

export default utilLibGenerator;
