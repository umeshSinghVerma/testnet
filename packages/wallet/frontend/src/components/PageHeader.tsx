import { ReactNode } from 'react'
import Backbutton from './BackButton'
import { usePathname } from 'next/navigation'
type PageHeaderProps = {
  title: string
  message?: ReactNode
}

export const PageHeader = ({ title, message }: PageHeaderProps) => {
  const pathname = usePathname()
  return (
    <div className="flex items-center">
      {pathname !== '/' && (
        <div className="md:hidden">
          <Backbutton />
        </div>
      )}
      <div className="text-turqoise">
        <h1 className="text-2xl font-semibold md:text-4xl">{title}</h1>
        <p className="text-lg font-light md:text-lg">{message}</p>
      </div>
    </div>
  )
}
