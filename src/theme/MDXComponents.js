import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Notice from '@site/src/components/notices/index.js';
export default {
  // Re-use the default mapping
  ...MDXComponents,
  Notice,
};