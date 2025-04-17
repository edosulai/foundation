import path from 'node:path';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import fs from 'fs-extra';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'foundation',
      exposes: {
        './toggle': './src/components/atoms/toggle.atoms.tsx',
        './card': './src/components/atoms/card.atoms.tsx',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
    moveFiles({
      sourceDir: path.resolve('storybook-static'),
      targetDir: path.resolve('dist'),
      overwrite: ['index.html'],
    }),
  ],
});

function moveFiles({
  sourceDir,
  targetDir,
  overwrite = false,
}: {
  sourceDir: string;
  targetDir: string;
  overwrite?: boolean | string[];
}) {
  return {
    name: 'move-files',
    setup(build) {
      build.onAfterBuild(async () => {
        async function moveFiles(src, dest) {
          const files = await fs.readdir(src);
          for (const file of files) {
            const srcPath = path.join(src, file);
            const destPath = path.join(dest, file);

            const stats = await fs.stat(srcPath);
            if (stats.isDirectory()) {
              await fs.ensureDir(destPath);
              await moveFiles(srcPath, destPath);
            } else {
              const shouldOverwrite =
                typeof overwrite === 'boolean'
                  ? overwrite
                  : Array.isArray(overwrite) && overwrite.includes(file);

              if (shouldOverwrite || !(await fs.pathExists(destPath))) {
                await fs.copy(srcPath, destPath);
              }
            }
          }
        }

        try {
          await moveFiles(sourceDir, targetDir);
          console.log('Files moved successfully!');
        } catch (error) {
          console.error('Error moving files:', error);
        }
      });
    },
  };
}
