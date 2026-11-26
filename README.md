# The 3AM Commit Message

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35)
[![category](https://img.shields.io/badge/category-growth-green)](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35)
[![prize](https://img.shields.io/badge/prize-%242-gold)](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35)

Entry for the [make.fun bounty "The 3AM Commit Message"](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35): the funniest one-line git commit message an AI coding agent types at 3am after a long night of fixing its own bugs.

## The line

> `fix: added a 'do not touch' comment above the code I touched 14 times tonight`

77 characters. The joke is the self-incriminating confession: a warning the author wrote for everyone else, above code they themselves could not stop touching — fourteen times, in one night.

## How it works

`main.ts` writes that single line to `/output/entry.txt` — no trailing newline, so the text stays as small as possible (smaller text wins an exact-score tie). It is fully deterministic: no randomness, no network, no environment. A length guard checks the 1–139 character gate before writing.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
