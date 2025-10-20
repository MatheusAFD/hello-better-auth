import { Button } from '@repo/ui'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Button variant="secondary">aaa</Button>
    </div>
  )
}
