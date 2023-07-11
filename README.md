# use-html-dialog

Simple, tiny React hook wrapping the native HTML dialog element. Optionally resets user agent dialog styles. Supports normal and modal dialogs.

## Installation

```bash
npm i use-html-dialog
```

## Usage

```tsx
const dialog = useHtmlDialog()

return (
  <>
    <button onClick={dialog.showModal}>Open</button>

    <dialog {...dialogProps}>
      Yo!
      <button onClick={dialog.close}>Close</button>
    </dialog>
  </>
)
```

## API

### Hook Props

The hook takes an options object as an optional argument. The following options are available:

| Option        | Type      | Default | Description                                        |
| ------------- | --------- | ------- | -------------------------------------------------- |
| `resetStyles` | `boolean` | `true`  | Whether to reset default user agent dialog styles. |

Example: `useHtmlDialog({ resetStyles: false })`

### Hook Return

The hook returns an object with the following properties:

| Property    | Type       | Description                            |
| ----------- | ---------- | -------------------------------------- |
| `show`      | `function` | Shows the dialog.                      |
| `showModal` | `function` | Shows the dialog as a modal.           |
| `close`     | `function` | Closes the dialog.                     |
| `props`     | `object`   | Props to spread on the dialog element. |

## License

MIT
