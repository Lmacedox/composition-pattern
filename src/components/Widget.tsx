'use client'

import { Check, Rocket, X } from 'lucide-react'
import { Notification } from './Notification'

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
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para assistir a uma live de component pattern" />
          </Notification.Root>

          <Notification.Root>
            <Notification.Content text="Você recebeu um convite para assistir a uma live de component pattern" />

            <Notification.Actions>
              <Notification.Action
                icon={X}
                onClick={() => console.log('Click Negative Action')}
                className="bg-rose-900"
              />
              <Notification.Action
                icon={Check}
                onClick={() => console.log('Click Negative Action')}
                className="bg-teal-800"
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>

      {/* Old Section */}
      <div>
        <div className="bg-zinc-300 font-medium bg-zinc-950 px-5 py-2 text-sm text-zinc-500 text-zinc-400">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para assistir a uma live de component pattern" />
            <Notification.Actions>
              <Notification.Action
                icon={Check}
                onClick={() => console.log('Click Negative Action')}
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>
    </div>
  )
}
