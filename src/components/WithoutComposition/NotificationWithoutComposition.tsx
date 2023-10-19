import { Check, X } from 'lucide-react'
import { ReactNode } from 'react'

interface NotificationProps {
  text: string
  icon: ReactNode
  hasActions?: boolean
  onCancelAction?: () => void
  onSubmitAction?: () => void
}

export function Notification({
  text,
  icon,
  hasActions = false,
  onCancelAction,
  onSubmitAction,
}: NotificationProps) {
  return (
    <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
      {/* <Rocket className="w-6 h-6 text-violet-500 mt-3" /> */}
      {icon}
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-sm leading-relaxed text-zinc-600 text-zinc-100">
          {text}
          {/* Você recebeu um convite para fazer parte da empresa Rocketseat. */}
        </p>
        <div className="text-xs text-zinc-400 flex items-center gap-1">
          <span>Convite</span>
          <span>Ha 3 min</span>
        </div>
      </div>
      {hasActions && (
        <div className="flex gap-2 self-center">
          <button
            onClick={onSubmitAction}
            className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 bg-zinc-800"
          >
            <X className="w-3 h-3 text-zinc-50" />
          </button>
          <button
            onClick={onCancelAction}
            className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-600"
          >
            <Check className="w-3 h-3 text-zinc-50" />
          </button>
        </div>
      )}
    </div>
  )
}
