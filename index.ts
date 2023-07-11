import { useCallback, useMemo, useRef, useState } from 'react'

function useHtmlDialog(options: {
	resetStyles?: boolean
	closeOnOutsideClick?: boolean
}): ReturnShape {
	const ref = useRef<HTMLDialogElement>(null)
	const [isOpen, setIsOpen] = useState(false)

	const show = useCallback(() => {
		ref.current?.show()
		setIsOpen(true)
	}, [])
	const showModal = useCallback(() => {
		ref.current?.showModal()
		setIsOpen(true)
	}, [])
	const close = useCallback(() => {
		ref.current?.close()
		setIsOpen(false)
	}, [])

	const dialogElementProps = useMemo(() => {
		const onClick: DialogElementProps['onClick'] = (
			e: React.MouseEvent<HTMLDialogElement, MouseEvent>,
		) => {
			if (options?.closeOnOutsideClick === false) {
				return
			}
			if (e.target === ref.current) {
				close()
			}
		}

		const onKeyDown: DialogElementProps['onKeyDown'] = (
			e: React.KeyboardEvent<HTMLDialogElement>,
		) => {
			if (e.key === 'Escape') {
				close()
			}
		}

		const style: React.CSSProperties | undefined =
			options?.resetStyles === false
				? undefined
				: {
						padding: 0,
						border: 'none',
						background: 'transparent',
				  }

		return { ref, style, onClick, onKeyDown } satisfies DialogElementProps
	}, [options, close])

	return {
		ref,
		show,
		showModal,
		close,
		props: dialogElementProps,
		isOpen,
	}
}

type DialogElementProps = React.HTMLAttributes<HTMLDialogElement> & {
	ref: React.RefObject<HTMLDialogElement>
}

type ReturnShape = {
	ref: React.RefObject<HTMLDialogElement>
	show: () => void
	showModal: () => void
	close: () => void
	props: {
		ref: React.RefObject<HTMLDialogElement>
		style: React.CSSProperties | undefined
		onClick: (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => void
		onKeyDown: (e: React.KeyboardEvent<HTMLDialogElement>) => void
	}
	isOpen: boolean
}

export { useHtmlDialog }
