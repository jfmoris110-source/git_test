# Contributing

Thanks for looking at this project. A few quick guidelines to get your changes accepted.

1. Fork the repo and create a branch for your change:

```bash
git checkout -b fix/your-issue
```

2. Install dev dependencies and run linters/formatters locally before pushing:

```bash
yarn install
yarn format
yarn lint
```

3. Run tests (if any):

```bash
yarn test
```

4. Commit with a descriptive message and open a pull request.

Style and tooling
- This repo uses Biome as the canonical formatter/linter for JS/TS/JSON/MD.
- CSS is linted with Stylelint (see `stylelint.config.mjs`).
- Husky runs a sequential pre-commit script to avoid parallel resource contention.

If you have questions, open an issue.
