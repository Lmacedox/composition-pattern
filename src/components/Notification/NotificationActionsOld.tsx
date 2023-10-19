import { Check, X } from 'lucide-react'

interface NotificationActionsProps {
  onCancelAction?: () => void
  onSubmitAction?: () => void
}

export function NotificationActions({
  onCancelAction,
  onSubmitAction,
}: NotificationActionsProps) {
  return (
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
  )
}
