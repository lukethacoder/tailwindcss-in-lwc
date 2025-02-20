# ⚡ TailwindCSS in LWC

Small POC of using TailwindCSS (v4) in an on-platform Salesforce setup.

## Installation

```bash
pnpm install
```

## Development

In two different terminals run the following:

Runs the LWR instance:
```bash
pnpm dev
```

Runs the TailwindCSS watch command:
```bash
pnpm styles
```

> [!warning]
> You are still required to manually reload the browser to get the `staticresource` to properly refresh the page...unfortunately.