# tts-play

text-to-speech and play sound locally.

### Intsall
```shell
$ yarn add tts-play
```

### How To Use
```typescript
import {play} from 'tss-play'

async function main(): Promise<void> {
    await play('hello world')
}

main()
    .then(() => console.log('Finished.'))
    .catch(console.error)
```

### Credit
this package is just a simple wrapper to `google-tts-api` and `sound-play`, these are good package!
