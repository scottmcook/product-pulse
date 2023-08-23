This is a [Next.js](https://nextjs.org/) project deployed on [Vercel](https://vercel.com/). Utility classes from Tailwind CSS were used alongside some custom CSS.

- [Live site](https://ubiquiti-productivity-tool.vercel.app/)
- [GitHub repo](https://github.com/scottmcook/ubiquiti-productivity-tool)
- [Scott's personal website and contact information](https://runnincode.com/)

### Challenges and constraints

Time was the most critical resource for this project. Unfortunately, I did not have weekend time to allocate towards this as I had a friend's wedding to attend. Had I had weekend availability I'm sure I would have been able to implement all of the features, code cleanup (a lot of UI could be refactored into their own components), and style misses.

### Style changes

- Increased [contrast](https://webaim.org/resources/contrastchecker/) for font and background colors. A few would have been pretty difficult for color blindness.
- Added breakpoints for the grid view so that the number of columns are reduces on smaller screen sizes.
- Scaled product cards with a transition on hover.

## Getting Started

After installing the dependencies (`npm run i`), run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
