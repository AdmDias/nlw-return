import { Widget } from "./components/Widget"

export function App() {
  const isMobile = navigator.userAgent.toLowerCase().includes('windows')
  return (
    <div className="App">
      {
        isMobile ? (
          <Widget />
        ): (
          <h1>Voce esta usando pc amigo</h1>
        )
      }
    </div>
  )
}
