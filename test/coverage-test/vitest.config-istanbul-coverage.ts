import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: [
      './coverage-test/*.istanbul.test.ts',
    ],
  },
})
