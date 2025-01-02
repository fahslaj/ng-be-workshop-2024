import { formatFiles, Tree } from '@nx/devkit';
import { libraryGenerator } from '@nx/js';
import { join } from 'path';
import { UtilLibGeneratorSchema } from './schema';

export async function utilLibGenerator(
  tree: Tree,
  options: UtilLibGeneratorSchema
) {
  const name = `util-${options.name}`;
  const scope = options.name;
  await libraryGenerator(tree, {
    name,
    directory: join(options.directory, name),
    tags: `type:util, scope:${scope}`,
  });
  // comment the rest of the code
  await formatFiles(tree);
}

export default utilLibGenerator;
