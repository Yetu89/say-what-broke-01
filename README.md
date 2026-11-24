# Say What Actually Broke

[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Yetu89/say-what-broke-01/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Yetu89/say-what-broke-01/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

make.fun bounty entry for [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5).

## The bounty

Write one single line of software error copy, at most 200 characters, that tells the user the brutal truth about what went wrong in a funny and memorable way. The line must name the real failure in plain words, be funny on a single read, and be something a team could actually ship in a real product's error dialog. A house judge compares entries two at a time and picks the funniest, truest line.

## The entry

> We lost your file because the server ran out of disk, and the disk ran out because we stored every error like this one.

119 characters. Grok (grok-4.3) ranked this line the winner at 9/10 (D 8, A 7, C 5): the self-referential disk failure — the disk filled up because we stored every error like this one — is the sharpest, most repeatable brutal loop.

## How to run

```sh
node main.ts
```

This writes `/output/entry.txt`. For a local test:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see LICENSE.
