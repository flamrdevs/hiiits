<img src="https://hiiits.deta.dev/hit/flamrdevs/hiiits?" width="100%" heigth="10px" />

# hiiits

## Introduction

hits counter for github README.md. This project use [Deta](https://www.deta.sh) as cloud service.

## Usage

`/README.md`

```markdown
<img src="https://hiiits.deta.dev/hit/flamrdevs/hiiits?" width="100%" heigth="10px" />

# Introduction

...
```

## API

```typescript
// Types
type IHit = {
  k: string; // key
  u: string; // username
  r: string; // repository
  t: string; // timestamp
};
```

| path                        | description                                | return |
| --------------------------- | ------------------------------------------ | ------ |
| /hit/:username/:repository  | hit point                                  | svg    |
| /hits                       | get all records                            | IHit[] |
| /hits/:username             | get all records by username                | IHit[] |
| /hits/:username/:repository | get all records by username and repository | IHit[] |

## Authors

- [flamrdevs](https://github.com/flamrdevs)

## License

[MIT License](./LICENSE)
