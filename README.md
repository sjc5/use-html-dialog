# use-html-dialog

Simple, tiny React hook for working with native HTML dialogs. Optionally resets user agent dialog styles and closes on backdrop click when used in modal mode.

## Installation

```bash
npm i use-html-dialog
```

## Usage

```tsx
const { showModal, props, close } = useHtmlDialog()

return (
  <>
    <button onClick={showModal}>Open modal</button>

    <dialog {...props}>
      This is a modal dialog.
      <button onClick={close}>Close modal</button>
    </dialog>
  </>
)
```

## API

### Options

The hook takes an options object as an optional argument. The following options are available:

| Option                | Type      | Default | Description                                                                                      |
| --------------------- | --------- | ------- | ------------------------------------------------------------------------------------------------ |
| `resetStyles`         | `boolean` | `true`  | Whether to reset default user agent dialog styles.                                               |
| `closeOnOutsideClick` | `boolean` | `true`  | Whether to close the dialog when the backdrop is clicked. Only applies when `showModal` is used. |

#### Example:

```tsx
const dialog = useHtmlDialog({
  resetStyles: false,
  closeOnOutsideClick: false,
})
```

### Hook Return

The hook returns an object with the following properties:

| Property    | Type       | Description                                                          |
| ----------- | ---------- | -------------------------------------------------------------------- |
| `show`      | `function` | Shows the dialog.                                                    |
| `showModal` | `function` | Shows the dialog as a modal.                                         |
| `close`     | `function` | Closes the dialog.                                                   |
| `props`     | `object`   | Props to spread on the dialog element.                               |
| `ref`       | `object`   | Ref to the dialog element, in case you need it (you probably don't). |

## License

MIT
