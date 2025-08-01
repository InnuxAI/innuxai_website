// knip.config.js
module.exports = {
    entry: ['app/layout.tsx', 'app/page.tsx'],
    ignore: ['node_modules', 'dist', 'types/**/*.d.ts'],
    rules: {
      files: 'error',           // Treat unused files as errors
      exports: 'error',         // Unused exports as errors
      dependencies: 'error',    // Unused deps as errors
      devDependencies: 'warn',  // Dev deps warnings, can be 'error' as well
    },
  };
  