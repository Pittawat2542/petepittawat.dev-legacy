import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import cn from 'classnames'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-yellow-50 border-yellow-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              ⚠️ ขณะนี้เว็บไซต์อยู่ระหว่างการปรับปรุง ⛑
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert