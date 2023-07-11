import { useCallback, useMemo, useRef } from "react"

function useHtmlDialog(
  options = { resetStyles: true, closeOnOutsideClick: true }
) {
  const ref = useRef<HTMLDialogElement>(null)
  const show = useCallback(() => ref.current?.show(), [])
  const showModal = useCallback(() => ref.current?.showModal(), [])
  const close = useCallback(() => ref.current?.close(), [])

  const props = useMemo(() => {
    const styleReset = {
      padding: 0,
      border: "none",
      background: "transparent",
    }
    return {
      ref,
      style: options?.resetStyles ? styleReset : undefined,
      onClick: (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
        if (!options?.closeOnOutsideClick) return
        if (e.target === ref.current) ref.current?.close()
      },
    }
  }, [options])

  return { show, showModal, close, props }
}

export { useHtmlDialog }
