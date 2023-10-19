'use client'

import { Rocket } from 'lucide-react'
import { Notification } from './NotificationWithoutComposition'

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      {/* Header */}
      <div className="bg-zinc-200 bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold text-zinc-50">Notificações</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      {/* Recent Section */}
      <div>
        <div className="bg-zinc-300 font-medium bg-zinc-950 px-5 py-2 text-sm text-zinc-500 text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification
            text="Você recebeu um convite para fazer parte da empresa Rocketseat."
            icon={<Rocket className="w-6 h-6 text-violet-500 mt-3" />}
            hasActions
            onSubmitAction={() => console.log('Hello')}
            onCancelAction={() => console.log('Hello')}
          />
          <Notification
            text="Você recebeu um convite para fazer parte da empresa Rocketseat."
            icon={<Rocket className="w-6 h-6 text-violet-500 mt-3" />}
          />
        </div>
      </div>

      {/* Old Section */}
      <div>
        <div className="bg-zinc-300 font-medium bg-zinc-950 px-5 py-2 text-sm text-zinc-500 text-zinc-400">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification
            text="Você recebeu um convite para fazer parte da empresa Rocketseat."
            icon={<Rocket className="w-6 h-6 text-violet-500 mt-3" />}
          />
        </div>
      </div>
    </div>
  )
}
