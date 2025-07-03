import { Check, X } from "lucide-react"

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left bg-background/70 backdrop-blur-sm rounded-tl-xl border border-enhanced/20">
              Recursos
            </th>
            <th className="p-4 text-center bg-background/70 backdrop-blur-sm border border-enhanced/20">
              <span className="text-primary font-bold">LiveTurb</span>
            </th>
            <th className="p-4 text-center bg-background/70 backdrop-blur-sm border border-enhanced/20">DeepTube</th>
            <th className="p-4 text-center bg-background/70 backdrop-blur-sm rounded-tr-xl border border-enhanced/20">
              Minera ROI
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border border-enhanced/20 bg-background/50">Espionagem de Anúncios</td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-enhanced/20 bg-background/50">Transformação de VSL em Live</td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-enhanced/20 bg-background/50">Análise de Criativos com IA</td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-enhanced/20 bg-background/50">Transcrição de VSL</td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-enhanced/20 bg-background/50">Acesso com Cloaker Quebrado</td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-enhanced/20 bg-background/50">Interface em Português</td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <X className="h-5 w-5 text-red-500 mx-auto" />
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">
              <Check className="h-5 w-5 text-green-500 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-enhanced/20 bg-background/50 rounded-bl-xl">Preço Inicial</td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center font-bold text-primary">
              R$ 97/mês
            </td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center">R$ 200/mês</td>
            <td className="p-4 border border-enhanced/20 bg-background/50 text-center rounded-br-xl">R$ 150/mês</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
