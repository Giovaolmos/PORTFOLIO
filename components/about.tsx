import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Sobre mí</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <Card className="p-6 sm:p-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy un desarrollador web apasionado por crear soluciones digitales que combinan diseño elegante con
                código limpio y eficiente. Mi enfoque está en construir aplicaciones web modernas que no solo se vean
                bien, sino que también ofrezcan una experiencia de usuario excepcional.
              </p>
              <p>
                Con experiencia en desarrollo full-stack, me especializo en tecnologías como React, Next.js, TypeScript
                y Node.js. Me encanta aprender nuevas tecnologías y mantenerme actualizado con las últimas tendencias
                del desarrollo web.
              </p>
              <p>
                Cuando no estoy programando, disfruto contribuir a proyectos de código abierto, escribir sobre
                desarrollo web y explorar nuevas herramientas que puedan mejorar mi flujo de trabajo.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
